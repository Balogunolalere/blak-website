"use client"

import type React from "react"

import { Bot, Database, Workflow, Layout, Globe, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
}

function ServiceCard({ icon, title, description, details }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="border-3 border-black dark:border-white p-5 sm:p-8 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start">
        <div>{icon}</div>
        <button className="text-2xl font-mono" aria-label={isExpanded ? "Collapse details" : "Expand details"}>
          {isExpanded ? "−" : "+"}
        </button>
      </div>
      <h3 className="font-mono text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight mt-6">{title}</h3>
      <p className="font-mono text-sm sm:text-base">{description}</p>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="mt-6 space-y-2 font-mono text-xs sm:text-sm">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout size={48} className="mb-6" />,
      title: "WEB APPS",
      description: "Custom web applications designed for performance and usability.",
      details: [
        "Full-stack web application development",
        "Progressive Web Apps (PWAs)",
        "SaaS platform development",
        "Real-time applications with WebSockets",
        "API development and integration",
      ],
    },
    {
      icon: <RefreshCw size={48} className="mb-6" />,
      title: "WEBSITE REBUILDS",
      description: "Transform outdated sites into modern, high-performing web experiences.",
      details: [
        "Legacy system modernization",
        "Performance optimization",
        "Responsive redesigns",
        "Accessibility improvements",
        "CMS migrations and upgrades",
      ],
    },
    {
      icon: <Database size={48} className="mb-6" />,
      title: "WEB SCRAPING",
      description: "Extract structured data from any website with our custom scraping solutions.",
      details: [
        "Automated data extraction",
        "Competitor price monitoring",
        "Content aggregation",
        "Market research automation",
        "Custom datasets creation",
      ],
    },
    {
      icon: <Bot size={48} className="mb-6" />,
      title: "AI AGENTS",
      description: "Autonomous AI systems that perform complex tasks without human intervention.",
      details: [
        "Custom LLM-powered agents",
        "Workflow automation with AI",
        "Intelligent data processing",
        "Conversational AI interfaces",
        "Predictive analytics systems",
      ],
    },
    {
      icon: <Workflow size={48} className="mb-6" />,
      title: "AUTOMATION",
      description: "Streamline workflows and eliminate repetitive tasks with custom automation.",
      details: [
        "Business process automation",
        "Scheduled task management",
        "Data synchronization",
        "Document processing",
        "Cross-platform integrations",
      ],
    },
    {
      icon: <Globe size={48} className="mb-6" />,
      title: "DOMAIN SETUP",
      description: "Professional domain registration, configuration and DNS management.",
      details: [
        "Domain registration and transfer",
        "DNS configuration",
        "Email setup and management",
        "SSL certificate installation",
        "Domain security hardening",
      ],
    },
  ]

  return (
    <section id="services" className="pt-4 pb-24 sm:py-24 px-4 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-4xl md:text-5xl font-bold mb-8 sm:mb-16 tracking-tighter"
      >
        SERVICES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            details={service.details}
          />
        ))}
      </div>
    </section>
  )
}
