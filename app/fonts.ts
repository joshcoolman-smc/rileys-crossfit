import { Montserrat, Lora, Hind_Madurai } from "next/font/google"

// Montserrat for headings
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

// Lora for accents and quotes
export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  style: ["normal", "italic"],
})

// Hind Madurai for body text
export const hindMadurai = Hind_Madurai({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hind-madurai",
  weight: ["300", "400", "500", "600", "700"],
})
