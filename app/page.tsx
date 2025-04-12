"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ServiceEstimator from "@/components/service-estimator"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Preload critical assets
    const preloadLinks = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
        as: "style",
      },
    ]

    preloadLinks.forEach((link) => {
      const linkElement = document.createElement("link")
      Object.keys(link).forEach((attr) => {
        if (attr !== "crossOrigin") {
          linkElement.setAttribute(attr, link[attr as keyof typeof link] as string)
        } else if (link.crossOrigin) {
          linkElement.setAttribute("crossorigin", link.crossOrigin)
        }
      })
      document.head.appendChild(linkElement)
    })
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand z-50 origin-left" style={{ scaleX }} />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ServiceEstimator />
    </main>
  )
}
