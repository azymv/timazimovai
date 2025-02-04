import { Hero } from "@/components/sections/hero"
import { CourseSection } from "@/components/sections/course"
import { ResourcesSection } from "@/components/sections/resources"
import { EbookSection } from "@/components/sections/ebook"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseSection />
      <ResourcesSection />
      <EbookSection />
    </>
  )
}