"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface EstimatorOption {
  id: string
  label: string
  value: number
}

interface EstimatorQuestion {
  id: string
  question: string
  options: EstimatorOption[]
  selected: string | null
}

export default function ServiceEstimator() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  // Update the options to use Naira instead of dollars
  const [questions, setQuestions] = useState<EstimatorQuestion[]>([
    {
      id: "service",
      question: "What service are you interested in?",
      options: [
        { id: "webapp", label: "Web Application", value: 4000000 },
        { id: "rebuild", label: "Website Rebuild", value: 2000000 },
        { id: "scraping", label: "Web Scraping", value: 1200000 },
        { id: "ai", label: "AI Agent", value: 3200000 },
        { id: "automation", label: "Automation", value: 1600000 },
      ],
      selected: null,
    },
    {
      id: "complexity",
      question: "How complex is your project?",
      options: [
        { id: "simple", label: "Simple", value: 0.7 },
        { id: "moderate", label: "Moderate", value: 1 },
        { id: "complex", label: "Complex", value: 1.5 },
        { id: "very-complex", label: "Very Complex", value: 2 },
      ],
      selected: null,
    },
    {
      id: "timeline",
      question: "What's your timeline?",
      options: [
        { id: "standard", label: "Standard (2-3 months)", value: 1 },
        { id: "accelerated", label: "Accelerated (1-2 months)", value: 1.3 },
        { id: "urgent", label: "Urgent (2-4 weeks)", value: 1.6 },
      ],
      selected: null,
    },
  ])

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setQuestions(questions.map((q) => (q.id === questionId ? { ...q, selected: optionId } : q)))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateEstimate()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateEstimate = () => {
    const serviceQuestion = questions.find((q) => q.id === "service")
    const complexityQuestion = questions.find((q) => q.id === "complexity")
    const timelineQuestion = questions.find((q) => q.id === "timeline")

    if (!serviceQuestion?.selected || !complexityQuestion?.selected || !timelineQuestion?.selected) {
      return
    }

    const serviceOption = serviceQuestion.options.find((o) => o.id === serviceQuestion.selected)
    const complexityOption = complexityQuestion.options.find((o) => o.id === complexityQuestion.selected)
    const timelineOption = timelineQuestion.options.find((o) => o.id === timelineQuestion.selected)

    if (!serviceOption || !complexityOption || !timelineOption) {
      return
    }

    const basePrice = serviceOption.value
    const complexityMultiplier = complexityOption.value
    const timelineMultiplier = timelineOption.value

    const estimate = Math.round((basePrice * complexityMultiplier * timelineMultiplier) / 1000) * 1000
    setEstimatedCost(estimate)
  }

  const resetEstimator = () => {
    setQuestions(questions.map((q) => ({ ...q, selected: null })))
    setCurrentStep(0)
    setEstimatedCost(null)
  }

  const currentQuestion = questions[currentStep]
  const isCurrentQuestionAnswered = !!currentQuestion?.selected

  // Make the button more mobile-friendly
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 font-mono bg-brand text-white border-3 border-black dark:border-white rounded-none px-3 py-2 h-auto shadow-lg text-sm sm:text-base sm:bottom-8 sm:right-8 sm:px-4"
      >
        ESTIMATE PROJECT
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-black border-3 border-black dark:border-white p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-mono text-2xl font-bold tracking-tight">PROJECT ESTIMATOR</h3>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:text-brand" aria-label="Close estimator">
                  <X size={24} />
                </button>
              </div>

              {estimatedCost === null ? (
                <>
                  <div className="mb-8">
                    <h4 className="font-mono text-lg font-bold mb-4">{currentQuestion.question}</h4>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(currentQuestion.id, option.id)}
                          className={`w-full text-left font-mono p-4 border-3 transition-colors ${
                            currentQuestion.selected === option.id
                              ? "border-brand bg-brand text-white"
                              : "border-black dark:border-white hover:border-brand"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="font-mono border-3 border-black dark:border-white rounded-none bg-transparent text-black dark:text-white hover:bg-brand hover:text-white hover:border-brand disabled:opacity-50"
                    >
                      BACK
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!isCurrentQuestionAnswered}
                      className="font-mono bg-black text-white dark:bg-white dark:text-black hover:bg-brand hover:text-white border-3 border-black dark:border-white rounded-none disabled:opacity-50"
                    >
                      {currentStep === questions.length - 1 ? "CALCULATE" : "NEXT"}
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t-2 border-black dark:border-white">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">
                        Step {currentStep + 1} of {questions.length}
                      </span>
                      <div className="flex space-x-1">
                        {questions.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                              index === currentStep ? "bg-brand" : "bg-gray-300 dark:bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h4 className="font-mono text-lg font-bold mb-6">ESTIMATED PROJECT COST</h4>
                  {/* Update the estimate display to use Naira */}
                  <p className="font-mono text-5xl font-bold text-brand mb-6">₦{estimatedCost.toLocaleString()}</p>
                  <p className="font-mono mb-8">
                    This is a rough estimate based on your inputs. Contact us for a detailed quote.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <Button
                      onClick={() => {
                        setIsOpen(false)
                        const contactSection = document.getElementById("contact")
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="font-mono bg-black text-white dark:bg-white dark:text-black hover:bg-brand hover:text-white border-3 border-black dark:border-white rounded-none"
                    >
                      CONTACT US
                    </Button>
                    <Button
                      onClick={resetEstimator}
                      className="font-mono border-3 border-black dark:border-white rounded-none bg-transparent text-black dark:text-white hover:bg-brand hover:text-white hover:border-brand"
                    >
                      START OVER
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
