"use client"

import Header from "./Header"

interface PageContainerProps {
  title: string
  showBackButton?: boolean
  backHref?: string
  backText?: string
  children: React.ReactNode
  className?: string
}

export default function PageContainer({
  title,
  showBackButton,
  backHref,
  backText,
  children,
  className = ""
}: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header 
        title={title}
        showBackButton={showBackButton}
        backHref={backHref}
        backText={backText}
      />
      
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        {children}
      </div>
    </div>
  )
} 
