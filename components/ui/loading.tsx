import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Loading({ className, size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  }

  return (
    <div className={cn("relative", className)}>
      <div 
        className={cn(
          "animate-spin rounded-full border-4 border-primary/30 border-t-primary",
          sizeClasses[size]
        )}
      />
    </div>
  )
}