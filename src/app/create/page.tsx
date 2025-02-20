"use client"

import { useState } from "react"
import { useWallet } from "@txnlab/use-wallet-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Clock, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "react-toastify"
import algosdk, { AtomicTransactionComposer } from "algosdk"

interface EventMetadata {
  name: string
  description: string
  location: string
  date: string
  image: string
  maxTickets: number
  ticketPrice: number
  venue: string
  organizer: string
  category: string
  requiresApproval: boolean
}

export default function CreateEventPage() {
  const { activeAddress, algodClient, transactionSigner, signTransactions, activeWallet } = useWallet()
  const [date, setDate] = useState<Date>()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("/placeholder.svg")
  const [ipfsHash, setIpfsHash] = useState<string>("")
  const [isUploading, setIsUploading] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    maxTickets: "100",
    ticketPrice: "0",
    eventMetadata: {
      venue: "",
      organizer: "",
      category: "conference",
      requiresApproval: false,
    },
  })

  const handleImageUpload = async (file: File) => {
    try {
      setIsUploading(true)

      // Preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setImageFile(file)

      // Upload to IPFS
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload-to-ipfs", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload to IPFS")
      }

      const data = await response.json()
      setIpfsHash(data.ipfsHash)
      toast.success("Image uploaded to IPFS successfully!")
    } catch (error) {
      console.error("Error uploading image:", error)
      toast.error("Failed to upload image to IPFS")
    } finally {
      setIsUploading(false)
    }
  }

  const createTicketNFTs = async () => {
    if (!activeAddress || !algodClient || !transactionSigner) {
      toast.error("Please connect your wallet first")
      return
    }

    if (!ipfsHash) {
      toast.error("Please upload an event image first")
      return
    }

    if (!date) {
      toast.error("Please select an event date")
      return
    }

    try {
      setIsCreating(true)

      // Prepare metadata
      const metadata: EventMetadata = {
        name: formData.name,
        description: formData.description,
        location: formData.location,
        date: date.toISOString(),
        image: `ipfs://${ipfsHash}`,
        maxTickets: Number.parseInt(formData.maxTickets),
        ticketPrice: Number.parseFloat(formData.ticketPrice),
        venue: formData.eventMetadata.venue,
        organizer: formData.eventMetadata.organizer,
        category: formData.eventMetadata.category,
        requiresApproval: formData.eventMetadata.requiresApproval,
      }

      const suggestedParams = await algodClient.getTransactionParams().do()
      console.log(activeAddress)

      console.log("Active address:", activeAddress);
console.log("Wallet details:", { transactionSigner, signTransactions });
      // Create NFT asset
      const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        sender: activeAddress,
        total: 1,
        decimals: 0,
        assetName: `${formData.name} Ticket`,
        unitName: "NFT",
        assetURL: `ipfs://${ipfsHash}`,
        manager: activeAddress,
        reserve: activeAddress,
        freeze: activeAddress,
        clawback: activeAddress,
        defaultFrozen: false,
        suggestedParams,
        note: new TextEncoder().encode(
          JSON.stringify({
            standard: "arc69",
            ...metadata,
          }),
        ),
      })
      
      const signedTxns = await transactionSigner([txn],[0]);

// Filter out any null values
const nonNullSignedTxns = signedTxns.filter(
  (txn): txn is Uint8Array => txn !== null
);

if (nonNullSignedTxns.length !== signedTxns.length) {
  console.error("Some transactions were not signed properly.");
  // Handle error appropriately
}

const { txid } = await algodClient.sendRawTransaction(nonNullSignedTxns).do();

      // Wait for confirmation
      await algosdk.waitForConfirmation(algodClient, txid, 4)

      toast.success("Ticket NFTs created successfully!")
    } catch (error) {
      console.error("Error creating NFTs:", error)
      toast.error("Failed to create ticket NFTs")
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          {/* Image Upload Section */}
          <Card className="bg-gray-800/50 border-dashed border-2 border-gray-700 aspect-square relative group">
            <CardContent className="p-0 h-full">
              <label className="w-full h-full flex flex-col items-center justify-center p-6 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleImageUpload(file)
                  }}
                  disabled={isUploading}
                />
                <div className="relative w-full h-full">
                  {isUploading ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                  ) : imagePreview ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Event cover"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Upload className="h-8 w-8" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Upload event image</p>
                    </div>
                  )}
                </div>
              </label>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Input
              placeholder="Event Name"
              className="text-3xl h-16 bg-transparent border-none placeholder:text-gray-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <div className="grid gap-4">
              <div className="flex items-center space-x-4">
                <div className="space-y-2 flex-1">
                  <Label>Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-gray-800/50",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString() : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Input
                placeholder="Event Location"
                className="bg-gray-800/50"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />

              <Textarea
                placeholder="Event Description"
                className="min-h-[100px] bg-gray-800/50"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />

              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label>Maximum Tickets</Label>
                  <Input
                    type="number"
                    className="w-32 bg-gray-800/50"
                    value={formData.maxTickets}
                    onChange={(e) => setFormData({ ...formData, maxTickets: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Ticket Price (ALGO)</Label>
                  <Input
                    type="number"
                    className="w-32 bg-gray-800/50"
                    value={formData.ticketPrice}
                    onChange={(e) => setFormData({ ...formData, ticketPrice: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Event Category</Label>
                  <Select
                    value={formData.eventMetadata.category}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        eventMetadata: { ...formData.eventMetadata, category: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-32 bg-gray-800/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="concert">Concert</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            className="w-full max-w-md bg-primary hover:bg-primary/90"
            onClick={createTicketNFTs}
            disabled={isCreating || !activeAddress}
          >
            {isCreating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Tickets...
              </>
            ) : (
              "Create Event & Mint Tickets"
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

