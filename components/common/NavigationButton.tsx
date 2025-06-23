"use client"

import Link from "next/link"

interface NavigationButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function NavigationButton({ 
  href, 
  children, 
  variant = "primary", 
  size = "md",
  className = "" 
}: NavigationButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
  
  const variantStyles = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500",
    secondary: "bg-gray-600 hover:bg-gray-500 text-white focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-500 text-white focus:ring-red-500"
  }
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  )
} 
