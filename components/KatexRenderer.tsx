"use client"

import { useEffect, useRef, useMemo } from "react"
import renderMathInElement from "katex/dist/contrib/auto-render"
import "katex/dist/katex.min.css"

interface KatexRendererProps {
  children: string
  className?: string
}

export default function KatexRenderer({ children, className = "" }: KatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastProcessedContent = useRef<string>("")

  const processedContent = useMemo(() => children, [children])

  useEffect(() => {
    if (containerRef.current && processedContent !== lastProcessedContent.current) {
      containerRef.current.innerHTML = processedContent
      
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      })
      
      lastProcessedContent.current = processedContent
    }
  }, [processedContent])

  return (
    <div 
      ref={containerRef} 
      className={className}
    />
  )
} 
