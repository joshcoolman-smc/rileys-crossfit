import Image from "next/image"
import { Button } from "@/features/ui/components/Button"

interface HomeHeroProps {
  imageUrl?: string
  title?: string
  description?: string
}

export function HomeHero({
  imageUrl = "/images/hero-barbell.png",
  title = "Train Hard. Get Results.",
  description = "Join Riley's CrossFit and transform your fitness journey with expert coaching and a supportive community.",
}: HomeHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="CrossFit training"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">{title}</h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8 font-body">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default">Join Now</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
