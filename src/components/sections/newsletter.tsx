import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardTitle, Card } from "@/components/ui/card"

export function NewsletterSection() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="max-w-2xl mx-auto text-center p-8">
          <CardTitle className="text-2xl md:text-3xl mb-4">
            Stay Updated with AI Product Management Insights
          </CardTitle>
          <p className="text-gray-600 mb-6">
            Get weekly updates on AI tools, frameworks, and best practices for product managers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}