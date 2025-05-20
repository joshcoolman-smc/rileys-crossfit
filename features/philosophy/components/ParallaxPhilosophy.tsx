"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Section {
  id: string
  title: string
  quote: string
  image: string
  alt: string
}

interface ParallaxPhilosophyProps {
  sections?: Section[]
  scrollDuration?: number
}

export function ParallaxPhilosophy({ sections: customSections, scrollDuration = 1000 }: ParallaxPhilosophyProps) {
  // Default sections if none are provided
  const defaultSections: Section[] = [
    {
      id: "strength",
      title: "Strength Through Struggle",
      quote:
        "The greatest growth happens at the edge of your comfort zone. Embrace the struggle, for it is the path to true strength.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-leonardho-1552242.jpg-XVMT72nJj5diuIsptF7XvjTc6sZoeD.jpeg",
      alt: "Athletes working with battle ropes in a CrossFit gym",
    },
    {
      id: "persistence",
      title: "Persistence Overcomes Resistance",
      quote:
        "It's not about being the best, it's about being better than you were yesterday. Keep pushing, keep growing.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-cesar-galeao-1673528-3253501.jpg-UqBzN48rDlOj4TcPTnuFhn41YaJEPX.jpeg",
      alt: "Athlete working with battle ropes in training",
    },
    {
      id: "foundation",
      title: "Build Your Foundation",
      quote:
        "Like a barbell loaded with weight, your potential has no limits. Start with a solid foundation and build upon it daily.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-victorfreitas-703012.jpg-7afOsWrEorrILxSQB9F4Wtesz3AyzE.jpeg",
      alt: "Athlete preparing to lift a barbell with weight plates",
    },
    {
      id: "community",
      title: "Stronger Together",
      quote: "In the community of shared struggle, we find our greatest allies. We rise by lifting others.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-frans-van-heerden-201846-1566414.jpg-JYHBjaEvPY4vnbMSm1YF0y0JRmfh1F.jpeg",
      alt: "Female athlete lifting a barbell with coach observing",
    },
    {
      id: "commitment",
      title: "Grip Life Tightly",
      quote:
        "Success comes to those who hold on when others let go. Commit fully to your journey, and results will follow.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-victorfreitas-791764.jpg-rfGZcdCaG9EJ2UWt5g7Kx49Dh9JKyZ.jpeg",
      alt: "Close-up of hands gripping a pull-up bar",
    },
  ]

  const sections = customSections || defaultSections
  const [activeSection, setActiveSection] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState<boolean[]>(Array(sections.length).fill(false))
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up Intersection Observer
  useEffect(() => {
    const observers = sections.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Update intersection state
            setIsIntersecting((prev) => {
              const newState = [...prev]
              newState[index] = entry.isIntersecting
              return newState
            })

            // Update active section
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(index)
            }
          })
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "0px",
        },
      )
    })

    // Observe all section refs
    sectionRefs.current.forEach((ref, index) => {
      if (ref) observers[index].observe(ref)
    })

    // Cleanup
    return () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) observers[index].unobserve(ref)
      })
    }
  }, [sections.length])

  // Smooth scroll function
  const scrollToSection = (index: number) => {
    const sectionRef = sectionRefs.current[index]
    if (sectionRef) {
      const startPosition = window.pageYOffset
      const targetPosition = sectionRef.offsetTop
      const distance = targetPosition - startPosition
      let startTime: number | null = null

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / scrollDuration, 1)
        const easeInOutCubic =
          progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

        window.scrollTo(0, startPosition + distance * easeInOutCubic)

        if (timeElapsed < scrollDuration) {
          requestAnimationFrame(animateScroll)
        }
      }

      requestAnimationFrame(animateScroll)
    }
  }

  return (
    <div className="parallax-container">
      {/* Navigation Dots */}
      <nav className="nav-dots">
        {sections.map((section, index) => (
          <div key={section.id} className="dot-container">
            <button
              className={`nav-dot ${activeSection === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
              aria-label={`Navigate to ${section.title}`}
            />
            <span className="dot-label">{section.title}</span>
          </div>
        ))}
      </nav>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="parallax-section"
          id={section.id}
        >
          <div
            className="parallax-background"
            style={{
              transform: isIntersecting[index] ? "scale(1.15)" : "scale(1.0)",
            }}
          >
            <Image
              src={section.image || "/placeholder.svg"}
              alt={section.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="parallax-image"
            />
            <div className="overlay" />
          </div>

          <div className="content">
            <h2 className={`title ${isIntersecting[index] ? "animate" : ""}`}>{section.title}</h2>
            <p className={`quote ${isIntersecting[index] ? "animate" : ""}`}>{section.quote}</p>
          </div>
        </div>
      ))}

      {/* Styled JSX */}
      <style jsx>{`
        .parallax-container {
          position: relative;
          width: 100%;
        }

        .nav-dots {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dot-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background-color: #D0FF73;
          transform: scale(1.3);
        }

        .dot-label {
          position: absolute;
          right: 25px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .dot-container:hover .dot-label {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* Global styles */}
      <style jsx global>{`
        .parallax-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .parallax-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 1.5s ease-out;
        }

        .parallax-image {
          object-fit: cover;
          object-position: center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }

        .title {
          font-family: var(--font-montserrat);
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .quote {
          font-family: var(--font-lora);
          font-size: 1.5rem;
          font-style: italic;
          color: #D0FF73;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }

        .title.animate,
        .quote.animate {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .nav-dots {
            right: 15px;
          }

          .title {
            font-size: 2rem;
          }

          .quote {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}
