import Image from "next/image"
import { cn } from "@/lib/utils"

interface StudioCardProps {
  title: string
  description: string
  imageUrl: string
  className?: string
}

export function StudioCard({ title, description, imageUrl, className }: StudioCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg transition-transform hover:scale-[1.02]", className)}>
      <div style={{ backgroundColor: "#1E1A33" }} className="h-full flex flex-col">
        {/* Image with 16:9 aspect ratio */}
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-heading text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-zinc-300 text-sm font-body flex-grow">{description}</p>
          <div className="mt-4">
            <span style={{ color: "#BBA5FF" }} className="text-sm font-heading font-medium">
              Explore →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
