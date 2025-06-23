"use client"

import Link from "next/link"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  backHref?: string
  backText?: string
}

export default function Header({ 
  title, 
  showBackButton = false, 
  backHref = "/",
  backText = "← Menu Principal" 
}: HeaderProps) {
  return (
    <div className="w-full bg-gray-800 shadow-lg p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {showBackButton ? (
          <Link
            href={backHref}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          >
            {backText}
          </Link>
        ) : (
          <div></div>
        )}
        
        <h1 className="text-xl font-bold text-gray-200 text-center">
          {title}
        </h1>
        
        <div className="w-24"></div>
      </div>
    </div>
  )
} 
