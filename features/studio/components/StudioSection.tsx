import { StudioCard } from "./StudioCard"

export function StudioSection() {
  const studioSpaces = [
    {
      title: "Modern Training Facility",
      description:
        "Our main training area features state-of-the-art equipment in a spacious, well-ventilated environment designed for optimal workout experiences.",
      imageUrl: "/images/studio-1.jpeg",
    },
    {
      title: "Welcoming Reception",
      description:
        "Our warm, inviting reception area is where your fitness journey begins, with friendly staff ready to assist you with all your needs.",
      imageUrl: "/images/studio-2.jpeg",
    },
    {
      title: "Dedicated Yoga Space",
      description:
        "Find your center in our peaceful yoga studio, featuring natural light, wooden floors, and all the equipment you need for your practice.",
      imageUrl: "/images/studio-3.jpeg",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Studio</h2>
          <p className="text-zinc-300 max-w-2xl font-body">
            Explore our thoughtfully designed spaces created to inspire your fitness journey and help you achieve your
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studioSpaces.map((space) => (
            <StudioCard
              key={space.title}
              title={space.title}
              description={space.description}
              imageUrl={space.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
