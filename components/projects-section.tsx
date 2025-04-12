"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Project {
  id: string
  title: string
  industry: string
  metric: string
  description: string
  url: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "dba",
      title: "DBA INCOME BOOST",
      industry: "Financial Services",
      metric: "+142%",
      description: "Increased lead generation for financial advisors through optimized UX and performance.",
      url: "https://dbaincomeboost.com",
      challenge:
        "This financial education platform needed to increase qualified leads for their advisor network while providing valuable resources to visitors.",
      solution:
        "We rebuilt their platform with clear financial education pathways, advisor matching tools, and personalized retirement calculators to engage visitors and generate qualified leads.",
      results: [
        "142% increase in conversion rate",
        "68% reduction in page load time",
        "3.2x increase in mobile conversions",
        "52% increase in average session duration",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
    {
      id: "novoagro",
      title: "NOVOAGRO LLP",
      industry: "Agriculture",
      metric: "3.2x",
      description: "Expanded global market reach for Kazakhstan's leading agricultural exporter.",
      url: "https://novoagrollp.kz",
      challenge:
        "This major Kazakh grain and oilseed exporter needed to showcase their quality standards and production capacity to international buyers and trading partners.",
      solution:
        "We created a multilingual platform featuring their extensive product range, certification details, and production facilities, with region-specific content for key export markets.",
      results: [
        "3.2x increase in international inquiries",
        "First page rankings for 28 key industry terms",
        "187% increase in organic traffic",
        "Expanded market reach to 14 new countries",
      ],
      technologies: ["React", "i18next", "Node.js", "MongoDB"],
    },
    {
      id: "philex",
      title: "PHILEX BAR",
      industry: "Entertainment",
      metric: "+89%",
      description: "Transformed digital presence for this premium cocktail bar and entertainment venue.",
      url: "https://www.philexentertainment.com/bar",
      challenge:
        "This upscale cocktail bar and event space needed to showcase their unique atmosphere and simplify their event booking process to attract more private functions.",
      solution:
        "We developed an immersive digital experience with 360° virtual tours, mixologist profiles, and an integrated booking system for both bar reservations and private events.",
      results: [
        "89% increase in online bookings",
        "42% reduction in booking abandonment",
        "4.8/5 average user satisfaction rating",
        "62% increase in private event inquiries",
      ],
      technologies: ["Three.js", "WebGL", "Express", "PostgreSQL"],
    },
    {
      id: "swap",
      title: "SWAP.COM",
      industry: "E-commerce",
      metric: "$2.4M",
      description: "Revitalized this online consignment and thrift store with performance-focused rebuild.",
      url: "https://swap.com",
      challenge:
        "This major online secondhand marketplace was struggling with site performance issues and complex inventory management for their vast catalog of unique items.",
      solution:
        "We rebuilt their platform with advanced search filters, personalized recommendations, and an optimized checkout flow while implementing a robust inventory system for their one-of-a-kind items.",
      results: [
        "$2.4M increase in annual revenue",
        "73% reduction in cart abandonment",
        "2.8x improvement in site performance",
        "41% increase in average order value",
      ],
      technologies: ["Next.js", "TypeScript", "Stripe", "AWS"],
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 md:px-12 lg:px-24 relative">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-4xl md:text-5xl font-bold mb-4 tracking-tighter"
      >
        SELECTED WORK
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono text-lg mb-16"
      >
        A glimpse of our recent client success stories
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-3 border-black dark:border-white p-5 sm:p-8"
          >
            <h3 className="font-mono text-xl sm:text-2xl font-bold tracking-tight">{project.title}</h3>
            <p className="font-mono text-xs sm:text-sm mb-3 sm:mb-4">{project.industry}</p>
            <p className="font-mono text-4xl sm:text-5xl font-bold my-6 sm:my-8 text-brand">{project.metric}</p>
            <p className="font-mono text-sm sm:text-base mb-6 sm:mb-8">{project.description}</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                className="font-mono border-3 border-black dark:border-white rounded-none hover:bg-brand hover:text-white hover:border-brand transition-colors"
                onClick={() => window.open(project.url, "_blank")}
              >
                VISIT
              </Button>
              <Button
                variant="outline"
                className="font-mono border-3 border-black dark:border-white rounded-none hover:bg-brand hover:text-white hover:border-brand transition-colors"
                onClick={() => setSelectedProject(project)}
              >
                CASE STUDY
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-black border-3 border-black dark:border-white p-5 sm:p-8 max-w-3xl max-h-[90vh] overflow-y-auto w-[95%] sm:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-mono text-3xl font-bold tracking-tight">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:text-brand"
                  aria-label="Close case study"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="font-mono text-sm mb-8">{selectedProject.industry}</p>

              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xl font-bold mb-4">CHALLENGE</h4>
                  <p className="font-mono">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xl font-bold mb-4">SOLUTION</h4>
                  <p className="font-mono">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xl font-bold mb-4">RESULTS</h4>
                  <ul className="font-mono space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xl font-bold mb-4">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="font-mono text-sm border-2 border-black dark:border-white px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="font-mono bg-black text-white dark:bg-white dark:text-black hover:bg-brand hover:text-white border-3 border-black dark:border-white rounded-none"
                    onClick={() => window.open(selectedProject.url, "_blank")}
                  >
                    VISIT WEBSITE
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
