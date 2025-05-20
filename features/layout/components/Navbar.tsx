"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Instructors", path: "/instructors" },
    { name: "Classes", path: "/classes" },
    { name: "Schedule", path: "/schedule" },
    { name: "Philosophy", path: "/philosophy" },
  ]

  return (
    <nav className="bg-black border-b border-zinc-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <Link href="/" className="text-white font-bold text-xl font-heading">
            Riley&apos;s WOD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-body">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-colors ${
                  pathname === item.path ? "text-[#D0FF73]" : "text-white hover:text-[#D0FF73]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 font-body">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`transition-colors ${
                    pathname === item.path ? "text-[#D0FF73]" : "text-white hover:text-[#D0FF73]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
