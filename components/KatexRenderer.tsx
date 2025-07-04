"use client"

import { useEffect, useRef, useState } from "react"
import renderMathInElement from "katex/dist/contrib/auto-render"
import "katex/dist/katex.min.css"

interface KatexRendererProps {
  children?: string
  latex?: string
  className?: string
  displayMode?: boolean
}

export default function KatexRenderer({ 
  children, 
  latex, 
  className = "", 
  displayMode = false 
}: KatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [renderError, setRenderError] = useState<string | null>(null)
  
  const content = (() => {
    const rawContent = latex || children || ""
    
    // Si c'est du contenu passé via la prop latex et qu'il n'a pas déjà de délimiteurs
    if (latex && !latex.includes('$') && !latex.includes('\\(') && !latex.includes('\\[')) {
      // Ajouter les délimiteurs appropriés selon le mode
      return displayMode ? `$$${latex}$$` : `$${latex}$`
    }
    
    // Sinon retourner le contenu tel quel (pour la compatibilité)
    return rawContent
  })()

  useEffect(() => {
    if (!containerRef.current || !content) return

    try {
      setRenderError(null)
      containerRef.current.innerHTML = content
      
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false,
        errorColor: '#dc2626',
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        strict: false,
        trust: true
      })

    } catch (error) {
      console.warn("KaTeX rendering error:", error)
      setRenderError("Erreur de rendu LaTeX")
      
      if (containerRef.current) {
        containerRef.current.innerHTML = content.replace(
          /\$([^$]*)\$/g, 
          (match, mathContent) => {
            return `<span style="color: #dc2626; font-family: ui-monospace, monospace; background-color: rgba(239, 68, 68, 0.1); padding: 2px 4px; border-radius: 3px; font-size: 0.875em;">[LaTeX: ${mathContent}]</span>`
          }
        )
      }
    }
  }, [content])

  return (
    <div ref={containerRef} className={`${className} leading-relaxed`}>
      {renderError && (
        <div className="text-red-400 text-xs mb-2 flex items-center gap-1">
          <span>⚠️</span>
          <span>{renderError}</span>
        </div>
      )}
    </div>
  )
} 

