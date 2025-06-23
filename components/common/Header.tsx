"use client"

import Link from "next/link"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  backHref?: string
  backText?: string
  showMainMenu?: boolean
}

export default function Header({ 
  title, 
  showBackButton = false, 
  backHref = "/",
  backText = "← Retour",
  showMainMenu = true
}: HeaderProps) {
  return (
    <div className="w-full bg-gray-800 shadow-lg p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-3 items-center gap-4">
        {/* Colonne gauche */}
        <div className="flex justify-start">
          {showBackButton && (
            <Link
              href={backHref}
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm"
            >
              {backText}
            </Link>
          )}
        </div>
        
        {/* Colonne centrale - titre parfaitement centré */}
        <div className="flex justify-center">
          <h1 className="text-xl font-bold text-gray-200 text-center truncate">
            {title}
          </h1>
        </div>
        
        {/* Colonne droite */}
        <div className="flex justify-end">
          {showMainMenu && (
            <Link
              href="/"
              className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Menu Principal
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 
