"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.current?.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section)
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <section id="hero" className="relative flex flex-col min-h-screen px-4 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex justify-between items-center pt-4 pb-2 h-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xl sm:text-2xl font-bold tracking-tighter"
        >
          bläk
        </motion.h1>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden border-3 border-current p-2 hover:bg-brand hover:text-white hover:border-brand transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-mono text-sm">
              {["services", "process", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`hover:text-brand transition-colors cursor-pointer relative ${
                      activeSection === section ? "text-brand" : ""
                    }`}
                  >
                    {section.toUpperCase()}
                    {activeSection === section && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 right-4 z-20 bg-background border-3 border-black dark:border-white p-6 w-64 md:hidden"
        >
          <ul className="font-mono text-base space-y-6">
            {["services", "process", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-brand transition-colors cursor-pointer ${
                    activeSection === section ? "text-brand" : ""
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center mt-8 sm:mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-screen-xl mx-auto"
        >
          <h2 className="font-mono text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-[1.1] tracking-[0.02em] max-w-7xl">
            DIGITAL ARCHITECTS FOR THE MODERN WEB
          </h2>
          <p className="font-mono text-base sm:text-lg md:text-xl mt-4 sm:mt-6 tracking-tight">
            Web Apps | Website Rebuilds | Web Scraping | AI Agents | Automation
          </p>
          <div className="mt-6 sm:mt-8">
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-base sm:text-lg bg-black text-white hover:bg-brand border-3 border-black rounded-none px-6 sm:px-8 py-2 sm:py-4 h-auto dark:bg-white dark:text-black dark:hover:bg-brand dark:hover:text-white"
            >
              START A PROJECT
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-12 sm:mt-16 md:mt-auto mb-8 flex justify-center">
        <button
          onClick={() => scrollToSection("services")}
          aria-label="Scroll down"
          className="border-3 border-current p-2 rounded-full hover:border-brand hover:text-brand transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
