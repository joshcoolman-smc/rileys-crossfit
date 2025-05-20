"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type ButtonProps = {
  children: React.ReactNode
  variant?: "default" | "outline"
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
  type?: "button" | "submit" | "reset"
}

export function Button({ children, variant = "default", className = "", href, onClick, type = "button" }: ButtonProps) {
  const baseStyles = "font-heading font-bold py-3 px-8 rounded-md transition-colors text-center inline-block"

  const variantStyles = {
    default: "bg-[#D0FF73] hover:bg-[#B8E83D] text-zinc-900",
    outline: "border-2 border-[#D0FF73] text-[#D0FF73] hover:bg-[#D0FF73]/10",
  }

  const buttonClasses = cn(baseStyles, variantStyles[variant], className)

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}
