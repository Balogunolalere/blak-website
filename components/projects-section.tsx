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
      industry: "Digital Marketing Education",
      metric: "27.7k+",
      description: "Official affiliate partner platform for Digital BOSS Academy with comprehensive digital marketing training and resources.",
      url: "https://www.dbaincomeboost.com/",
      challenge:
        "Create a high-converting affiliate platform that effectively showcases Digital BOSS Academy's comprehensive digital marketing program while maintaining a professional and trustworthy user experience.",
      solution:
        "Developed a modern, conversion-optimized platform featuring detailed program information, success stories, and streamlined enrollment process, integrated with advanced analytics and automated sales funnels.",
      results: [
        "27.7k+ official members onboarded",
        "89% success rate for program participants",
        "Up to 50% commission rate structure",
        "Seamless integration with payment and course delivery systems"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
    {
      id: "novoagro",
      title: "NOVOAGRO LLP",
      industry: "Oil Refining",
      metric: "500K+",
      description: "World-class oil refining solutions with state-of-the-art processing technology.",
      url: "https://www.novoagrollp.kz/",
      challenge:
        "Establish a digital presence that effectively communicates NovoAgro's position as a leading force in the refining industry while showcasing their advanced technological capabilities and global reach.",
      solution:
        "Developed a modern corporate platform highlighting their 500,000 BPD processing capacity, international certifications, and commitment to sustainable practices across their global operations.",
      results: [
        "500K+ BPD processing capacity",
        "45+ countries served globally",
        "20+ years of industry excellence",
        "6 major ISO certifications achieved"
      ],
      technologies: ["Bootstrap", "jQuery", "Animate.css"],
    },
    {
      id: "philex",
      title: "PHILEX BAR",
      industry: "Hospitality & Entertainment",
      metric: "24/7",
      description: "Premium cocktail lounge offering vibrant nights and culinary delights in Ibadan.",
      url: "https://www.philexentertainment.com/bar",
      challenge:
        "Create an immersive digital platform for a high-end cocktail bar that captures its sophisticated atmosphere while streamlining the reservation process.",
      solution:
        "Built an elegant website featuring dynamic content, real-time booking system, and showcasing their unique blend of nightlife entertainment and culinary excellence.",
      results: [
        "Automated 24/7 table reservation system",
        "Integrated events calendar and booking",
        "Mobile-optimized dining menus",
        "Seamless social media integration"
      ],
      technologies: ["Wordpress", "Elemental", "jQuery", "Cloudinary"],
    },
    {
      id: "swap",
      title: "SWAP",
      industry: "Trade & Commerce",
      metric: "P2P",
      description: "Modern trade-by-barter platform revolutionizing community-based item exchange without monetary transactions.",
      url: "https://v0-neobrutalist-design-platform-dwhqnb.vercel.app",
      challenge:
        "Create an intuitive platform that facilitates direct item-for-item trading in local communities while ensuring user safety and engagement in a cashless exchange system.",
      solution:
        "Developed a neobrutalist design platform with seamless item posting, offer management, and secure meetup coordination, emphasizing community trust and easy navigation.",
      results: [
        "Zero-cost trade implementation",
        "Multi-category item support",
        "Real-time messaging system",
        "Built-in safety protocols"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
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
