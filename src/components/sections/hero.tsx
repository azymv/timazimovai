import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Transform Your Product Management Career with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Hi, I am Tim Azimov. I help product managers leverage AI to build better products and accelerate their careers. Through my course, ebook, and free resources, I will show you how to use AI tools effectively in product management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#course">
              <Button size="lg" className="w-full sm:w-auto">
                Explore the Course
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#resources">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Free Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}