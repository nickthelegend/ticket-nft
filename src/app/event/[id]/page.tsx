import { createClient } from "@supabase/supabase-js"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Ticket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

async function getEvent(id: string) {
  const { data: event } = await supabase.from("events").select("*").eq("event_id", id).single()

  if (!event) {
    notFound()
  }

  return event
}

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id)
  const eventDate = new Date(event.event_date)
  const isPast = eventDate < new Date()

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={event.image_url.replace("ipfs://", "https://ipfs.io/ipfs/") || "/placeholder.svg"}
          alt={event.event_name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <Link
          href="/events"
          className="absolute top-4 left-4 inline-flex items-center text-white hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <Badge variant={isPast ? "secondary" : "default"} className="mb-4">
                {isPast ? "Past Event" : "Upcoming Event"}
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-4">{event.event_name}</h1>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {format(eventDate, "MMMM d, yyyy")}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {format(eventDate, "h:mm a")}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {event.max_tickets} tickets available
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr,300px] gap-8">
              <div className="space-y-8">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle>About this event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 whitespace-pre-wrap">{event.description}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle>Venue Details</CardTitle>
                    <CardDescription>{event.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+627eea(${encodeURIComponent(event.location)})/${encodeURIComponent(event.location)},13,0/600x400@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2wxc3F2YjgwMXA0MnBucWp2Z3B0ZHJ0In0.xy-8b3h0qwm4NxxC845c1Q`}
                        alt="Event location map"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700 sticky top-6">
                  <CardHeader>
                    <CardTitle>Ticket Information</CardTitle>
                    <CardDescription>{isPast ? "This event has ended" : "Secure your spot now"}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Price per ticket</span>
                        <span className="text-xl font-semibold">{event.ticket_price} ALGO</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Available tickets</span>
                        <span className="text-xl font-semibold">{event.max_tickets}</span>
                      </div>
                      <Button className="w-full" size="lg" disabled={isPast}>
                        <Ticket className="w-4 h-4 mr-2" />
                        {isPast ? "Event Ended" : "Purchase Tickets"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

