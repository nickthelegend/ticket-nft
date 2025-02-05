import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-12 w-64 mb-4 bg-gray-800" />
        <Skeleton className="h-6 w-full max-w-md mb-8 bg-gray-800" />

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="bg-gray-900/50 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Skeleton className="w-16 h-16 rounded-lg bg-gray-800" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-48 bg-gray-800" />
                      <Skeleton className="h-4 w-32 bg-gray-800" />
                      <Skeleton className="h-4 w-24 bg-gray-800" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-16 rounded bg-gray-800" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

