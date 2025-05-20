import { InstructorCard } from "./InstructorCard"

export function InstructorsSection() {
  const instructors = [
    {
      name: "Maya Johnson",
      role: "Head Coach & Nutrition Specialist",
      bio: "Maya brings 8+ years of CrossFit coaching experience and a passion for helping members achieve their fitness goals through proper form and nutrition guidance.",
      imageUrl: "/images/instructor-1.jpeg",
    },
    {
      name: "Lily Chen",
      role: "Mobility & Movement Coach",
      bio: "Specializing in mobility and recovery, Lily helps members improve their range of motion and prevent injuries while pushing their limits in workouts.",
      imageUrl: "/images/instructor-2.jpeg",
    },
    {
      name: "David Kim",
      role: "Strength & Conditioning Coach",
      bio: "With a background in competitive weightlifting, David focuses on helping members build strength and power through proper technique and progressive programming.",
      imageUrl: "/images/instructor-3.jpeg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Meet Our Coaches</h2>
          <p className="text-zinc-300 max-w-2xl font-body">
            Our expert coaches are dedicated to helping you achieve your fitness goals through personalized guidance and
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.name}
              name={instructor.name}
              role={instructor.role}
              bio={instructor.bio}
              imageUrl={instructor.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
