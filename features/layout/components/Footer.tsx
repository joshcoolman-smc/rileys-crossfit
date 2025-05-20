import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-heading font-bold text-lg mb-4">Riley&apos;s CrossFit</h3>
            <p className="mb-4 text-sm">
              Dedicated to helping you achieve your fitness goals through expert coaching, supportive community, and
              proven CrossFit methodology.
            </p>
            <p className="text-sm">© 2023 Riley&apos;s CrossFit. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D0FF73] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1">
            <h4 className="text-white font-heading font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  CrossFit Classes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  Nutrition Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D0FF73] transition-colors">
                  Community Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h4 className="text-white font-heading font-bold mb-4">Connect With Us</h4>
            <address className="not-italic text-sm mb-4">
              <p>123 Fitness Street</p>
              <p>Anytown, ST 12345</p>
              <p className="mt-2">
                <a href="tel:+15551234567" className="hover:text-[#D0FF73] transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@rileyscrossfit.com" className="hover:text-[#D0FF73] transition-colors">
                  info@rileyscrossfit.com
                </a>
              </p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#D0FF73] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#D0FF73] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#D0FF73] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
