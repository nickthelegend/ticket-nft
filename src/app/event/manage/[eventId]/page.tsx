"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Users,
  MessageSquare,
  ArrowUpRight,
  QrCode,
  Award,
  Download,
  Settings,
  Clock,
  Star,
  Send,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { Calendar, Eye, Globe, LinkIcon,Share2 } from "lucide-react"
export default function EventManagePage({ params }: { params: { eventId: string } }) {
  const [guestCount] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Personal</span>
              <ArrowUpRight className="h-4 w-4 text-gray-400" />
            </div>
            <Button variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50">
              Event Page
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="guests" className="space-y-8">
          <TabsList className="border-b border-gray-800 w-full justify-start bg-transparent h-14">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="guests"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4"
            >
              Guests
            </TabsTrigger>
            <TabsTrigger
              value="blasts"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4"
            >
              Blasts
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4"
            >
              Certificates
            </TabsTrigger>
          </TabsList>


            <TabsContent value="overview" className="space-y-8">

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


            </TabsContent>
          <TabsContent value="guests" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">At a Glance</h2>
              <p className="text-4xl font-bold text-gray-400">{guestCount} guests</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-auto py-4 bg-[#1a1f36] hover:bg-[#252b45] justify-start  text-white">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                Invite Guests
              </Button>
              <Button className="h-auto py-4 bg-[#1a1f36] hover:bg-[#252b45] justify-start  text-white">
                <QrCode className="h-5 w-5 mr-3 text-green-400" />
                Check In Guests
              </Button>
              <Button className="h-auto py-4 bg-[#1a1f36] hover:bg-[#252b45] justify-start  text-white">
                <Users className="h-5 w-5 mr-3 text-orange-400" />
                Guest List
                <Badge className="ml-auto" variant="secondary">
                  Shown to guests
                </Badge>
              </Button>
            </div>

            <Card className="bg-[#1a1f36] border-gray-800">
              <CardContent className="p-12 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold mb-2">No Guests Yet</h3>
                <p className="text-gray-400">Share the event or invite people to get started!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blasts" className="space-y-8">
            <Input placeholder="Send a blast to your guests..." className="bg-[#1a1f36] border-gray-800 h-14" />

            <Card className="bg-[#1a1f36] border-gray-800 border-dashed">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Send Blasts</h3>
                <p className="text-gray-400 mb-4">
                  Share updates with your guests via email, SMS, and push notifications.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Send className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">System Messages</h3>
              <div className="space-y-4">
                <Card className="bg-[#1a1f36] border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Event Reminders</p>
                          <p className="text-sm text-gray-400">
                            Reminders are sent automatically via email, SMS, and push notification.
                          </p>
                        </div>
                      </div>
                      <Button variant="secondary" size="sm">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a1f36] border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Post-Event Feedback</p>
                          <p className="text-sm text-gray-400">Schedule a feedback email to go out after the event.</p>
                        </div>
                      </div>
                      <Button variant="secondary" size="sm">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Certificate Distribution</h2>
                <div className="space-y-4">
                  <Card className="bg-[#1a1f36] border-gray-800">
                    <CardHeader>
                      <CardTitle>Certificate Template</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-5" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
                          <Award className="h-16 w-16 mb-4" />
                          <h3 className="text-2xl font-bold mb-2">Certificate of Completion</h3>
                          <p className="text-sm opacity-80">This certifies that</p>
                          <p className="text-lg font-semibold my-2">{"[Participant Name]"}</p>
                          <p className="text-sm opacity-80">has successfully completed</p>
                          <p className="text-lg font-semibold mt-2">{"[Event Name]"}</p>
                          <div className="absolute bottom-4 right-4">
                            <QrCode className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <Button className="w-full" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-[#1a1f36] border-gray-800">
                  <CardHeader>
                    <CardTitle>Distribution Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Progress</span>
                        <span className="text-gray-400">0/0 Distributed</span>
                      </div>
                      <Progress value={0} className="h-2" />
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                        <div>
                          <p>Pending</p>
                          <p className="text-white font-medium">0</p>
                        </div>
                        <div>
                          <p>Claimed</p>
                          <p className="text-white font-medium">0</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a1f36] border-gray-800">
                  <CardHeader>
                    <CardTitle>Distribution Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Distribution Method</label>
                      <select className="w-full bg-black border border-gray-800 rounded-md p-2">
                        <option>Email Delivery</option>
                        <option>Manual Distribution</option>
                        <option>Automatic (After Event)</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Certificate Format</label>
                      <select className="w-full bg-black border border-gray-800 rounded-md p-2">
                        <option>NFT + PDF</option>
                        <option>PDF Only</option>
                        <option>NFT Only</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full relative bg-[#1a1f36] hover:bg-[#252b45] text-white h-12 before:absolute before:inset-0 before:-z-10 before:p-[1px] before:bg-gradient-to-r before:from-blue-500/50 before:to-purple-500/50 before:rounded-lg after:absolute after:inset-[1px] after:-z-10 after:bg-[#1a1f36] after:rounded-[6px] hover:before:opacity-100 hover:before:animate-gradient-rotate">
                  <Award className="w-5 h-5 mr-2" />
                  Distribute Certificates
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

