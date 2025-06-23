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
  const lastProcessedContent = useRef<string>("")

  const content = latex || children || ""
  const processedContent = useMemo(() => content, [content])

  useEffect(() => {
    if (containerRef.current && processedContent) {
      try {
        if (displayMode && latex) {
          containerRef.current.innerHTML = `$$${processedContent}$$`
        } else if (latex) {
          containerRef.current.innerHTML = `$${processedContent}$`
        } else {
          containerRef.current.innerHTML = processedContent
        }
        
        renderMathInElement(containerRef.current, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true },
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
          trust: true,
          strict: false,
        })
        
        lastProcessedContent.current = processedContent
      } catch (error) {
        console.error("KaTeX rendering error:", error, "Content:", processedContent)
        if (containerRef.current) {
          containerRef.current.innerHTML = processedContent
        }
      }
    }
  }, [processedContent, displayMode, latex])

  return (
    <div 
      ref={containerRef} 
      className={className}
    />
  )
} 
