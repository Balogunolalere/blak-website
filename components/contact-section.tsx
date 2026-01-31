"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

interface FormState {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus("submitting")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      })
    } catch (error) {
      setFormStatus("error")
      console.error("Error submitting form:", error)
    }
  }

  const budgetOptions = [
    { value: "", label: "Select a budget range" },
    { value: "400k-2m", label: "₦400,000 - ₦2,000,000" },
    { value: "2m-5m", label: "₦2,000,000 - ₦5,000,000" },
    { value: "5m+", label: "₦5,000,000+" },
  ]

  return (
    <section id="contact" className="py-24 px-4 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
      >
        CONTACT
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-mono text-2xl font-bold mb-6 tracking-tight">START A PROJECT</h3>
          <p className="font-mono mb-8">Tell us about your challenge. We'll build the solution.</p>

          <div className="space-y-6 font-mono">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 border-3 border-black dark:border-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">EMAIL</p>
                <p>hello@blakstudio.dev</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 border-3 border-black dark:border-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">PHONE</p>
                <p>+2349077406839</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="border-3 border-black dark:border-white p-5 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-sm block mb-2">
                  NAME <span className="text-brand">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`font-mono border-3 ${errors.name ? "border-red-500" : "border-black dark:border-white"} rounded-none h-12 focus-visible:ring-brand`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 font-mono">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-sm block mb-2">
                  EMAIL <span className="text-brand">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`font-mono border-3 ${errors.email ? "border-red-500" : "border-black dark:border-white"} rounded-none h-12 focus-visible:ring-brand`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 font-mono">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label htmlFor="company" className="font-mono text-sm block mb-2">
                    COMPANY
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-mono border-3 border-black dark:border-white rounded-none h-10 sm:h-12 focus-visible:ring-brand"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="font-mono text-sm block mb-2">
                    BUDGET
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full font-mono border-3 border-black dark:border-white rounded-none h-10 sm:h-12 focus-visible:ring-brand bg-transparent"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-sm block mb-2">
                  PROJECT DETAILS <span className="text-brand">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`font-mono border-3 ${errors.message ? "border-red-500" : "border-black dark:border-white"} rounded-none resize-none focus-visible:ring-brand`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1 font-mono">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className="font-mono bg-black text-white dark:bg-white dark:text-black hover:bg-brand hover:text-white border-3 border-black dark:border-white rounded-none w-full h-12 relative"
              >
                {formStatus === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    SENDING...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    SENT SUCCESSFULLY
                  </>
                ) : (
                  "SEND"
                )}
              </Button>

              {formStatus === "error" && (
                <p className="text-red-500 text-sm font-mono text-center">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
