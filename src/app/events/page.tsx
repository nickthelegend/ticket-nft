import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Events</h1>
          <Tabs defaultValue="upcoming">
            <TabsList className="bg-gray-900/50">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-32 text-right">
              <div className="text-lg font-medium">Feb 9</div>
              <div className="text-sm text-gray-400">Sunday</div>
            </div>
            <Card className="flex-1 bg-gray-900/50 border-white/10 hover:border-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">5:00 PM</p>
                    <h3 className="text-lg font-medium mt-1">Algorand Developer Meetup: Hyderabad</h3>
                    <p className="text-sm text-gray-400 mt-1">T-Hub Phase 2</p>
                  </div>
                  <div className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm">Pending</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

