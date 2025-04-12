"use client"

import { motion } from "framer-motion"

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "Define problems worth solving.",
      details:
        "We start by understanding your business goals, target audience, and technical requirements through in-depth discovery sessions.",
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Architect efficient solutions.",
      details:
        "Our team creates detailed technical specifications, wireframes, and prototypes to visualize the solution before development begins.",
    },
    {
      number: "03",
      title: "DEVELOP",
      description: "Build robust systems.",
      details:
        "We implement the solution using modern technologies and best practices, with regular check-ins and iterative improvements.",
    },
    {
      number: "04",
      title: "DEPLOY",
      description: "Launch and optimize.",
      details:
        "We handle deployment, testing, and monitoring to ensure your solution performs flawlessly in production.",
    },
  ]

  return (
    <section id="process" className="py-24 px-4 md:px-12 lg:px-24 bg-brand text-white">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
      >
        PROCESS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-3 border-white p-5 sm:p-8 group hover:bg-white hover:text-brand transition-colors duration-300"
          >
            <div className="font-mono text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 group-hover:text-brand transition-colors duration-300">
              {step.number}
            </div>
            <h3 className="font-mono text-xl sm:text-2xl font-bold mb-2 tracking-tight">{step.title}</h3>
            <p className="font-mono text-sm sm:text-base">{step.description}</p>
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 mt-4 opacity-0 group-hover:opacity-100">
              <p className="font-mono text-xs sm:text-sm">{step.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
