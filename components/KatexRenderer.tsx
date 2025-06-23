"use client"

import { useEffect, useRef } from "react"
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
  const content = latex || children || ""

  useEffect(() => {
    if (!containerRef.current || !content) return

    try {
      containerRef.current.innerHTML = content
      
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        strict: false,
        errorColor: '#cc0000',
        macros: {
          "\\RR": "\\mathbb{R}",
          "\\NN": "\\mathbb{N}",
          "\\ZZ": "\\mathbb{Z}",
          "\\QQ": "\\mathbb{Q}",
          "\\CC": "\\mathbb{C}",
          "\\text": "\\text",
          "\\Cov": "\\text{Cov}",
        }
      })
    } catch (error) {
      console.error("KaTeX rendering error:", error)
      if (containerRef.current) {
        containerRef.current.innerHTML = content.replace(/\$[^$]*\$/g, (match) => {
          return `<span style="color: #cc0000; font-family: monospace;">[LaTeX Error: ${match}]</span>`
        })
      }
    }
  }, [content])

  if (displayMode && latex) {
    return (
      <div 
        ref={containerRef}
        className={className}
      />
    )
  }

  return (
    <div 
      ref={containerRef} 
      className={`${className} leading-relaxed`}
    />
  )
} 

