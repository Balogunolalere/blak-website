"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // This would be where you'd typically initialize analytics
    // For example: window.gtag("config", "GA-MEASUREMENT-ID", { page_path: pathname })

    // For now, we'll just log page views to console
    console.log(`Page view: ${pathname}`)
  }, [pathname])

  return null
}
