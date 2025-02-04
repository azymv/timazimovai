import { Hero } from "@/components/sections/hero"
import { CourseSection } from "@/components/sections/course"
import { ResourcesSection } from "@/components/sections/resources"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseSection />
      <ResourcesSection />
    </>
  )
}