import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export function EbookSection() {
  return (
    <section id="ebook" className="py-16 bg-muted">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Testing Product Ideas with AI
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A comprehensive guide on leveraging AI tools to validate your product ideas faster and more effectively. Learn how to use AI for user research, market analysis, and prototype testing.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>50+ pages of practical insights</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Real-world case studies</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Step-by-step implementation guides</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden h-[300px]">
              <img 
                src="/images/ebook-cover.png" 
                alt="E-book preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Get the E-Book</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">$10</span>
                  <span className="text-gray-600">one-time purchase</span>
                </div>
                <Button className="w-full" size="lg">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}