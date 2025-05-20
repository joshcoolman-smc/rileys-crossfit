import Image from "next/image"
import { cn } from "@/lib/utils"

interface InstructorCardProps {
  name: string
  role: string
  bio: string
  imageUrl: string
  className?: string
}

export function InstructorCard({ name, role, bio, imageUrl, className }: InstructorCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg transition-transform hover:scale-[1.02]", className)}>
      <div style={{ backgroundColor: "#2C3320" }} className="h-full flex flex-col">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${name}, ${role} at Riley's CrossFit`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-heading text-xl font-bold text-white mb-1">{name}</h3>
          <p style={{ color: "#D0FF73" }} className="font-heading text-sm font-medium mb-4">
            {role}
          </p>
          <p className="text-zinc-300 text-sm font-body flex-grow">{bio}</p>
        </div>
      </div>
    </div>
  )
}
