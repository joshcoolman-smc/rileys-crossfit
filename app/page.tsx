import { HomeHero } from "@/features/home/components/HomeHero"
import { InstructorsSection } from "@/features/instructors/components/InstructorsSection"
import { StudioSection } from "@/features/studio/components/StudioSection"
import { TestimonialsSection } from "@/features/testimonials/components/TestimonialsSection"

export default function Home() {
  return (
    <div>
      <HomeHero />

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Studio Section */}
      <StudioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  )
}
