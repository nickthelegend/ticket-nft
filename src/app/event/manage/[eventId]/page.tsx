"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, MessageSquare, Share2, Eye, ArrowUpRight, Globe, LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function EventManagePage({ params }: { params: { eventId: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Personal</span>
              <ArrowUpRight className="h-4 w-4 text-gray-400" />
            </div>
            <Button variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              Event Page
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="h-14 w-full justify-start bg-transparent border-none">
              <TabsTrigger
                value="overview"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none",
                  "hover:bg-gray-800/50 transition-colors",
                )}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="guests"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none",
                  "hover:bg-gray-800/50 transition-colors",
                )}
              >
                Guests
              </TabsTrigger>
              <TabsTrigger
                value="registration"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none",
                  "hover:bg-gray-800/50 transition-colors",
                )}
              >
                Registration
              </TabsTrigger>
              <TabsTrigger
                value="blasts"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none",
                  "hover:bg-gray-800/50 transition-colors",
                )}
              >
                Blasts
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none",
                  "hover:bg-gray-800/50 transition-colors",
                )}
              >
                Insights
              </TabsTrigger>
              <TabsTrigger
                value="more"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none",
                  "hover:bg-gray-800/50 transition-colors",
                )}
              >
                More
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="relative bg-[#1a1f36] hover:bg-[#252b45] text-white h-12 w-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-blue-500/50 before:to-blue-300/50 before:rounded-lg after:absolute after:inset-[1px] after:-z-10 after:bg-[#1a1f36] after:rounded-[6px] hover:before:opacity-100 hover:before:animate-gradient-rotate">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              Invite Guests
            </Button>
            <Button className="relative bg-[#1a1f36] hover:bg-[#252b45] text-white h-12 w-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-purple-500/50 before:to-purple-300/50 before:rounded-lg after:absolute after:inset-[1px] after:-z-10 after:bg-[#1a1f36] after:rounded-[6px] hover:before:opacity-100 hover:before:animate-gradient-rotate">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-400" />
              Send a Blast
            </Button>
            <Button className="relative bg-[#1a1f36] hover:bg-[#252b45] text-white h-12 w-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-pink-500/50 before:to-pink-300/50 before:rounded-lg after:absolute after:inset-[1px] after:-z-10 after:bg-[#1a1f36] after:rounded-[6px] hover:before:opacity-100 hover:before:animate-gradient-rotate">
              <Share2 className="w-5 h-5 mr-2 text-pink-400" />
              Share Event
            </Button>
          </div>

          {/* Event Preview */}
          <Card className="bg-[#1a1f36] border-gray-800">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                <div className="aspect-square bg-gray-800 rounded-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">a</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">When & Where</h2>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gray-800 rounded flex flex-col items-center justify-center">
                          <span className="text-sm text-gray-400">FEB</span>
                          <span className="text-xl">6</span>
                        </div>
                        <div>
                          <p className="font-medium">Today</p>
                          <p className="text-gray-400">12:30 AM - 1:30 AM GMT+5:30</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-yellow-500">
                        <Eye className="h-4 w-4" />
                        <span>Location Missing</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-t border-gray-800">
                      <span>lu.ma/bvgrut2f</span>
                      <Button variant="outline" size="sm" className="h-8">
                        Copy
                      </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="lg" className="flex-1">
                        Edit Event
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invites Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Invites</h2>
                <p className="text-gray-400">Invite subscribers, contacts and past guests via email or SMS.</p>
              </div>
              <Button variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                + Invite Guests
              </Button>
            </div>
            <Card className="bg-[#1a1f36] border-gray-800">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">No Invites Sent</h3>
                  <p className="text-gray-400">You can invite subscribers, contacts and past guests to the event.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Hosts Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Hosts</h2>
                <p className="text-gray-400">Add hosts, special guests, and event managers.</p>
              </div>
              <Button variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                + Add Host
              </Button>
            </div>
            <Card className="bg-[#1a1f36] border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">nickthelegend</p>
                      <p className="text-sm text-gray-400">testingtesla7@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-green-500">Creator</span>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Visibility Section */}
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Visibility & Discovery</h2>
              <p className="text-gray-400">Control how people can find your event.</p>
            </div>
            <Card className="bg-[#1a1f36] border-gray-800">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-sm text-gray-400">Managing Calendar</p>
                  <p className="font-medium">Your Personal Calendar</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Globe className="h-4 w-4 text-green-500" />
                    <span className="text-gray-400">Public — This event is listed on your profile page.</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                    <Eye className="h-4 w-4 mr-2" />
                    Change Visibility
                  </Button>
                  <Button variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Transfer Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

