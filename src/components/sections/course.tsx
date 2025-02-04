import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle2, Users } from "lucide-react"

const chapters = [
  {
    title: "Foundations of AI in Product Management",
    description: "Learn how AI is transforming product management and develop a framework for AI implementation in your product strategy.",
  },
  {
    title: "AI Tools for Product Discovery",
    description: "Master using AI for user research, market analysis, and identifying product opportunities.",
  },
  {
    title: "Building AI-Powered Products",
    description: "Learn to define, prioritize, and execute AI features in your product roadmap.",
  },
]

const features = [
  "12 weeks of structured learning",
  "Real-world project work",
  "AI tools evaluation framework",
  "Private community access",
  "Weekly live Q&A sessions",
  "Certificate upon completion",
]

export function CourseSection() {
  return (
    <section id="course" className="py-16 bg-muted">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Master AI Product Management
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A comprehensive course designed to help product managers leverage AI effectively. Learn to identify opportunities, build AI-powered features, and drive product success.
            </p>
            <div className="grid gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {chapters.map((chapter, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{chapter.title}</CardTitle>
                  <CardDescription>{chapter.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
              <CardDescription>Perfect for individual product managers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$999</span>
                <span className="text-gray-600">one-time payment</span>
              </div>
              <Button className="w-full" size="lg">
                Enroll Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent">
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
              <CardDescription>For teams and serious practitioners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$1499</span>
                <span className="text-gray-600">one-time payment</span>
              </div>
              <Button className="w-full" size="lg" variant="default">
                Enroll Now (Pro)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}