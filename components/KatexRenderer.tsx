"use client"

import { useEffect, useRef, useMemo, useCallback } from "react"
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
  const retryCountRef = useRef(0)
  const maxRetries = 3

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

  const renderMath = useCallback(() => {
    if (!containerRef.current || !processedContent) return

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

      // Reset retry count on successful render
      retryCountRef.current = 0
    } catch (error) {
      console.error("KaTeX rendering error:", error, "Content:", processedContent)
      
      if (containerRef.current) {
        containerRef.current.innerHTML = processedContent.replace(/\$[^$]*\$/g, (match) => {
          return `<span style="color: #cc0000; font-family: monospace;">[LaTeX Error: ${match}]</span>`
        })
      }
      
      // Retry logic for failed renders
      if (retryCountRef.current < maxRetries) {
        retryCountRef.current++
        console.log(`Retrying LaTeX render (attempt ${retryCountRef.current}/${maxRetries})`)
        setTimeout(() => renderMath(), 500 * retryCountRef.current) // Progressive delay
      }
    }
  }, [processedContent])

  // Check if LaTeX is properly rendered
  const checkRenderQuality = useCallback(() => {
    if (!containerRef.current) return

    // Look for unrendered LaTeX (contains $ symbols in text content)
    const textContent = containerRef.current.textContent || ""
    const hasUnrenderedMath = /\$[^$]*\$/.test(textContent)
    
    // Look for KaTeX elements to confirm successful rendering
    const hasKatexElements = containerRef.current.querySelector('.katex') !== null
    const shouldHaveMath = /\$[^$]*\$/.test(processedContent)

    if (hasUnrenderedMath || (shouldHaveMath && !hasKatexElements)) {
      console.log("Detected broken LaTeX rendering, attempting repair...")
      renderMath()
    }
  }, [processedContent, renderMath])

  useEffect(() => {
    renderMath()
  }, [renderMath])

  // Intelligent monitoring: check render quality after DOM updates
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new MutationObserver(() => {
      // Debounce the check to avoid excessive calls
      setTimeout(checkRenderQuality, 100)
    })

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      characterData: true
    })

    return () => observer.disconnect()
  }, [checkRenderQuality])

  // Also check on visibility change (when user switches tabs and comes back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(checkRenderQuality, 200)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [checkRenderQuality])

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

