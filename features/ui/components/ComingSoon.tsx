import { Button } from "@/features/ui/components/Button"

interface ComingSoonProps {
  title?: string
}

export function ComingSoon({ title = "Coming Soon" }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">{title}</h1>
      <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8 font-body">
        We're working hard to bring you something amazing. Check back soon!
      </p>
      <Button href="/" variant="default">
        Back to Home
      </Button>
    </div>
  )
}
