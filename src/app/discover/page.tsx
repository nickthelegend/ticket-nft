import { Card, CardContent } from "@/components/ui/card"
import { Brain, Palette, Leaf, Dumbbell, Flower2, Bitcoin } from "lucide-react"

const categories = [
  { name: "AI", icon: Brain, events: "1k Events" },
  { name: "Arts & Culture", icon: Palette, events: "716 Events" },
  { name: "Climate", icon: Leaf, events: "338 Events" },
  { name: "Fitness", icon: Dumbbell, events: "502 Events" },
  { name: "Wellness", icon: Flower2, events: "824 Events" },
  { name: "Crypto", icon: Bitcoin, events: "875 Events" },
]

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Discover Events</h1>
        <p className="text-gray-400 mb-8">
          Explore popular events near you, browse by category, or check out some of the great community calendars.
        </p>

        <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.name}
                className="bg-gray-900/50 border-white/10 hover:border-white/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-white/5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.events}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

