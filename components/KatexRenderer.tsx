"use client"

import { useEffect, useRef, useMemo } from "react"
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
    if (containerRef.current && content) {
      try {
        // Set the raw HTML content first
        containerRef.current.innerHTML = content
        
        // Then process LaTeX
        renderMathInElement(containerRef.current, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true },
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
          trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
          strict: false,
          fleqn: false,
          macros: {
            "\\RR": "\\mathbb{R}",
            "\\NN": "\\mathbb{N}",
            "\\ZZ": "\\mathbb{Z}",
            "\\QQ": "\\mathbb{Q}",
            "\\CC": "\\mathbb{C}",
          }
        })
      } catch (error) {
        console.error("KaTeX rendering error:", error, "Content:", content)
        if (containerRef.current) {
          containerRef.current.textContent = content.replace(/<[^>]*>/g, '')
        }
      }
    }
  }, [content])

  if (displayMode && latex) {
    // For display mode, we directly render the LaTeX
    return (
      <div 
        ref={containerRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: `$$${content}$$` }}
      />
    )
  }

  return (
    <div 
      ref={containerRef} 
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
} 

