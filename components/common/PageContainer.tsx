"use client"

import Header from "./Header"

interface PageContainerProps {
  title: string
  showBackButton?: boolean
  backHref?: string
  backText?: string
  showMainMenu?: boolean
  children: React.ReactNode
  className?: string
}

export default function PageContainer({
  title,
  showBackButton,
  backHref,
  backText,
  showMainMenu,
  children,
  className = ""
}: PageContainerProps) {
  return (
    <div className="min-h-screen bg-[#1e293b]">
      <Header 
        title={title}
        showBackButton={showBackButton}
        backHref={backHref}
        backText={backText}
        showMainMenu={showMainMenu}
      />
      
      <div className={`container mx-auto px-4 py-8 flex flex-col items-center ${className}`}>
        {children}
      </div>
    </div>
  )
} 
