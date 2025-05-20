import { TestimonialCard } from "./TestimonialCard"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Riley's CrossFit completely transformed my fitness journey. The coaches are incredibly knowledgeable and the community is so supportive. I've achieved goals I never thought possible!",
      author: "Sarah M.",
      role: "Member since 2020",
      variant: "primary" as const,
    },
    {
      quote:
        "As someone who was intimidated by CrossFit, the coaches at Riley's made me feel welcome from day one. The personalized attention has helped me improve my form and strength tremendously.",
      author: "Michael T.",
      role: "Member since 2021",
      variant: "green" as const,
    },
    {
      quote:
        "The programming at Riley's CrossFit is thoughtful and effective. I've seen more progress in 6 months here than I did in years at traditional gyms. The community aspect keeps me coming back!",
      author: "Jessica L.",
      role: "Member since 2019",
      variant: "purple" as const,
    },
    {
      quote:
        "Riley's isn't just a gym, it's a family. The coaches genuinely care about your progress and the other members cheer you on every step of the way. Best fitness decision I've ever made.",
      author: "David K.",
      role: "Member since 2022",
      variant: "turquoise" as const,
    },
  ]

  return (
    <section className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-zinc-300 max-w-2xl font-body">
            Don't just take our word for it. Hear from the people who have transformed their lives at Riley's CrossFit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              variant={testimonial.variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
