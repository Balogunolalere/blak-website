"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const socialLinks = [
    { name: "github", icon: <Github size={24} />, url: "https://github.com/Balogunolalere" },
    { name: "twitter", icon: <Twitter size={24} />, url: "https://x.com/___faust____" },
    { name: "linkedin", icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/olalere-balogun-271980253/" },
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
          <p className="font-mono text-sm">lordareello@gmail.com</p>
          <p className="font-mono text-sm">+2349077406839</p>
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
