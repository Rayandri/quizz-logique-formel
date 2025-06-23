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
  const content = latex || children || ""

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
        trust: true,
        macros: {
          "\\RR": "\\mathbb{R}",
          "\\NN": "\\mathbb{N}",
          "\\ZZ": "\\mathbb{Z}",
          "\\QQ": "\\mathbb{Q}",
          "\\CC": "\\mathbb{C}",
          "\\R": "\\mathbb{R}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
          "\\Q": "\\mathbb{Q}",
          "\\C": "\\mathbb{C}",
          "\\text": "\\text",
          "\\neg": "\\neg",
          "\\wedge": "\\wedge",
          "\\vee": "\\vee",
          "\\Rightarrow": "\\Rightarrow",
          "\\Leftarrow": "\\Leftarrow",
          "\\Leftrightarrow": "\\Leftrightarrow",
          "\\equiv": "\\equiv",
          "\\forall": "\\forall",
          "\\exists": "\\exists",
          "\\mapsto": "\\mapsto",
          "\\to": "\\to",
          "\\top": "\\top",
          "\\bot": "\\bot",
          "\\perp": "\\perp",
          "\\vdash": "\\vdash",
          "\\models": "\\models",
          "\\sigma": "\\sigma",
          "\\tau": "\\tau",
          "\\alpha": "\\alpha",
          "\\beta": "\\beta",
          "\\gamma": "\\gamma",
          "\\delta": "\\delta",
          "\\lambda": "\\lambda",
          "\\emptyset": "\\emptyset",
          "\\varnothing": "\\varnothing"
        }
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

