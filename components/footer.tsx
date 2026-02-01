"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const socialLinks = [
    { name: "instagram", icon: <Instagram size={24} />, url: "https://www.instagram.com/blak.dev/" },
  ]

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-8 sm:py-12 px-4 md:px-12 lg:px-24 border-t-3 border-black dark:border-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
        <div>
          <h2 className="font-mono text-2xl font-bold tracking-tighter mb-6">bläk</h2>
          <p className="font-mono text-sm max-w-xs">
            Digital architects building web applications, automation systems, and AI solutions for forward-thinking
            businesses.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-lg font-bold mb-6">NAVIGATION</h3>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <button onClick={() => handleScroll("hero")} className="hover:text-brand transition-colors">
                HOME
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("services")} className="hover:text-brand transition-colors">
                SERVICES
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("process")} className="hover:text-brand transition-colors">
                PROCESS
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("projects")} className="hover:text-brand transition-colors">
                PROJECTS
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("contact")} className="hover:text-brand transition-colors">
                CONTACT
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-lg font-bold mb-6">CONNECT</h3>
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                onMouseEnter={() => setHoveredIcon(link.name)}
                onMouseLeave={() => setHoveredIcon(null)}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`border-3 border-black dark:border-white p-2 block hover:text-brand hover:border-brand transition-colors`}
                >
                  {link.icon}
                </Link>
                {hoveredIcon === link.name && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono whitespace-nowrap"
                  >
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
          <a href="mailto:hello@blakstudio.dev" className="font-mono text-sm hover:text-brand transition-colors block w-fit">hello@blakstudio.dev</a>
          <a href="tel:+2347046059891" className="font-mono text-sm hover:text-brand transition-colors block w-fit">+2347046059891</a>
          <a href="https://wa.me/2349077406839" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-muted-foreground hover:text-brand transition-colors flex items-center gap-2 w-fit">
            WhatsApp: +2349077406839
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
        </div>
      </div>

      <div className="border-t-2 border-black dark:border-white pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="font-mono text-xs sm:text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} bläk. All rights reserved.
        </p>
        <div className="flex space-x-6 font-mono text-xs">
          <Link href="/privacy-policy" className="hover:text-brand transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-brand transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
