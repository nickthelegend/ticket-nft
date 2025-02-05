import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

const validCategories = ["arts", "ai", "climate", "fitness", "wellness", "crypto"]

export default function CategoryPage({ params }: CategoryPageProps) {
  if (!validCategories.includes(params.category)) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 capitalize">{params.category} Events</h1>
        <p className="text-gray-400 mb-8">Discover the best {params.category} events happening near you.</p>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="bg-gray-900/50 border-white/10 hover:border-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-800 overflow-hidden">
                      <Skeleton className="w-full h-full bg-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Upcoming {params.category} Event</h3>
                      <p className="text-sm text-gray-400 mt-1">Virtual • Tomorrow at 7 PM</p>
                      <p className="text-sm text-gray-400 mt-1">500+ attending</p>
                    </div>
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded text-sm">Free</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

