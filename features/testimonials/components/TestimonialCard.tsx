import { cn } from "@/lib/utils"

type ColorVariant = "primary" | "green" | "purple" | "turquoise"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  variant?: ColorVariant
  className?: string
}

export function TestimonialCard({ quote, author, role, variant = "primary", className }: TestimonialCardProps) {
  // Define color variants
  const colorVariants = {
    primary: {
      background: "#2C3320", // Dark Primary
      accent: "#D0FF73", // Primary
      text: "#FFFFFF", // White
    },
    green: {
      background: "#0A2A27", // Dark Green
      accent: "#00584C", // Green
      text: "#FFFFFF", // White
    },
    purple: {
      background: "#1E1A33", // Dark Purple
      accent: "#7E57FF", // Purple
      text: "#FFFFFF", // White
    },
    turquoise: {
      background: "#0F3328", // Dark Turquoise
      accent: "#47EAAA", // Turquoise
      text: "#FFFFFF", // White
    },
  }

  const colors = colorVariants[variant]

  return (
    <div
      className={cn("rounded-lg p-6 flex flex-col h-full", className)}
      style={{ backgroundColor: colors.background }}
    >
      {/* Quote mark */}
      <div className="mb-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: colors.accent }}
        >
          <path d="M11.3 5.8C10.9 5.3 10.3 5 9.7 5H7.4C6.1 5 5 6.1 5 7.4V11.7C5 12.9 6.1 14 7.4 14H9.7C10.9 14 12 12.9 12 11.6V9.3C12 9.1 11.9 8.8 11.8 8.6L11.3 5.8ZM9.7 12.3H7.4C7 12.3 6.7 12 6.7 11.6V7.4C6.7 7 7 6.7 7.4 6.7H9.1L9.5 8.7C9.5 8.8 9.5 8.9 9.5 9V9.3H7.9C7.5 9.3 7.2 9.6 7.2 10C7.2 10.4 7.5 10.7 7.9 10.7H10.3V11.6C10.3 12 10 12.3 9.7 12.3ZM19 5.8C18.6 5.3 18 5 17.4 5H15.1C13.8 5 12.7 6.1 12.7 7.4V11.7C12.7 12.9 13.8 14 15.1 14H17.4C18.6 14 19.7 12.9 19.7 11.6V9.3C19.7 9.1 19.6 8.8 19.5 8.6L19 5.8ZM17.4 12.3H15.1C14.7 12.3 14.4 12 14.4 11.6V7.4C14.4 7 14.7 6.7 15.1 6.7H16.8L17.2 8.7C17.2 8.8 17.2 8.9 17.2 9V9.3H15.6C15.2 9.3 14.9 9.6 14.9 10C14.9 10.4 15.2 10.7 15.6 10.7H18V11.6C18 12 17.7 12.3 17.4 12.3Z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="font-body text-base mb-6 flex-grow" style={{ color: colors.text }}>
        {quote}
      </p>

      {/* Author info */}
      <div>
        <p className="font-heading font-bold text-base" style={{ color: colors.accent }}>
          {author}
        </p>
        {role && (
          <p className="font-body text-sm mt-1" style={{ color: colors.text }}>
            {role}
          </p>
        )}
      </div>
    </div>
  )
}
