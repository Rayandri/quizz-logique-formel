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

  const processedContent = useMemo(() => {
    if (!content) return ""
    
    return content
      .replace(/,\s*(?=\$[^$]*\$|[A-Z])/g, ',<br/>')
      .replace(/\s+avec\s+/gi, '<br/>avec ')
      .replace(/\s+la formule\s+/gi, '<br/>la formule ')
      .replace(/\s*:\s*$/gm, ' :')
      .replace(/(\$[^$]*\$)\s*(?=est|vaut|signifie)/gi, '$1<br/>')
  }, [content])

  useEffect(() => {
    if (containerRef.current && processedContent) {
      try {
        // Clear previous content
        containerRef.current.innerHTML = ""
        
        // Set the content
        containerRef.current.innerHTML = processedContent
        
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
        console.error("KaTeX rendering error:", error, "Content:", processedContent)
        if (containerRef.current) {
          containerRef.current.innerHTML = processedContent.replace(/\$[^$]*\$/g, (match) => {
            return `<span style="color: #cc0000; font-family: monospace;">[LaTeX Error: ${match}]</span>`
          })
        }
      }
    }
  }, [processedContent])

  if (displayMode && latex) {
    return (
      <div 
        ref={containerRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: `$$${processedContent}$$` }}
      />
    )
  }

  return (
    <div 
      ref={containerRef} 
      className={`${className} leading-relaxed`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
} 

