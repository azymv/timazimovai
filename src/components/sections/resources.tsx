import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

const resources = [
  {
    title: "AI Product Discovery Framework",
    description: "A step-by-step framework for identifying AI opportunities in your product, including templates and assessment tools.",
    downloadUrl: "#",
  },
  {
    title: "AI Feature Prioritization Canvas",
    description: "Evaluate and prioritize AI features with this structured canvas, considering feasibility, impact, and resources.",
    downloadUrl: "#",
  },
  {
    title: "AI Tools for PMs - Comparison Guide",
    description: "Detailed comparison of popular AI tools and platforms for product management tasks.",
    downloadUrl: "#",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Free Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download these free resources to start implementing AI in your product management practice today.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <a href={resource.downloadUrl}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}