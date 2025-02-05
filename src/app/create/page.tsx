"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Globe, Users, Upload, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function CreateEventPage() {
  const [date, setDate] = useState<Date>()
  const [imageUrl, setImageUrl] = useState<string>("/placeholder.svg")
  const [showImagePicker, setShowImagePicker] = useState(false)
  const [requireApproval, setRequireApproval] = useState(false)

  const featuredCategories = [
    "Lunar New Year",
    "St. Patrick's",
    "Party",
    "Food",
    "Drinks",
    "Sports",
    "Crypto",
    "Abstract",
    "Tech",
    "Wellness",
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Select defaultValue="personal">
            <SelectTrigger className="w-[200px] bg-gray-800/50">
              <SelectValue placeholder="Select Calendar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal Calendar</SelectItem>
              <SelectItem value="work">Work Calendar</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="bg-gray-800/50 ">
            <Globe className="mr-2 h-4 w-4" />
            Public
          </Button>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          {/* Image Upload Section */}
          <Card className="bg-gray-800/50 border-dashed border-2 border-gray-700 aspect-square relative group">
            <CardContent className="p-0 h-full">
              <button
                onClick={() => setShowImagePicker(true)}
                className="w-full h-full flex flex-col items-center justify-center p-6"
              >
                {imageUrl ? (
                  <div className="relative w-full h-full">
                    <img
                      src={imageUrl || "/placeholder.svg"}
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
              </button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Input
              placeholder="Event Name"
              className="text-3xl h-16 bg-transparent border-none placeholder:text-gray-500"
            />

            <div className="grid gap-4">
              <div className="flex items-center space-x-4">
                <div className="space-y-2 flex-1">
                  <Label>Start</Label>
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

                <Select defaultValue="12:00">
                  <SelectTrigger className="w-[120px] bg-gray-800/50">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                        {`${i.toString().padStart(2, "0")}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <div className="space-y-2 flex-1">
                  <Label>End</Label>
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

                <Select defaultValue="13:00">
                  <SelectTrigger className="w-[120px] bg-gray-800/50">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                        {`${i.toString().padStart(2, "0")}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Input placeholder="Add Event Location" className="bg-gray-800/50" />

            <Textarea placeholder="Add Description" className="min-h-[100px] bg-gray-800/50" />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Event Options</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Tickets</Label>
                  <Button variant="outline" className="bg-gray-800/50">
                    Free
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <Label>Require Approval</Label>
                  <Switch checked={requireApproval} onCheckedChange={setRequireApproval} />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Capacity</Label>
                  <Button variant="outline" className="bg-gray-800/50">
                    Unlimited
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button className="w-full max-w-md gradient-hover">
            Create Event
          </Button>
        </div>

    
      </div>

      <Dialog open={showImagePicker} onOpenChange={setShowImagePicker}>
        <DialogContent className="max-w-4xl bg-gray-900">
          <DialogHeader>
            <DialogTitle>Choose Image</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <Input placeholder="Search for more photos" className="bg-gray-800/50" />
            <div className="grid grid-cols-[200px,1fr] gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Featured</h4>
                <div className="space-y-1">
                  {featuredCategories.map((category) => (
                    <button key={category} className="w-full text-left px-2 py-1 rounded hover:bg-gray-800">
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square bg-gray-800 rounded-lg overflow-hidden"
                    onClick={() => {
                      setImageUrl(`/placeholder.svg?text=Image${i + 1}`)
                      setShowImagePicker(false)
                    }}
                  >
                    <img
                      src={`/placeholder.svg?text=Image${i + 1}`}
                      alt={`Sample ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

