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
          "\\leq": "\\leq",
          "\\geq": "\\geq",
          "\\sim": "\\sim",
          "\\chi": "\\chi",
          "\\lambda": "\\lambda",
          "\\sigma": "\\sigma",
          "\\mu": "\\mu",
          "\\exp": "\\exp",
          "\\frac": "\\frac",
          "\\sqrt": "\\sqrt",
          "\\sum": "\\sum",
          "\\prod": "\\prod",
          "\\int": "\\int",
          "\\partial": "\\partial",
          "\\infty": "\\infty",
          "\\alpha": "\\alpha",
          "\\beta": "\\beta",
          "\\gamma": "\\gamma",
          "\\delta": "\\delta",
          "\\epsilon": "\\epsilon",
          "\\theta": "\\theta",
          "\\pi": "\\pi",
          "\\varphi": "\\varphi",
          "\\phi": "\\phi",
          "\\psi": "\\psi",
          "\\omega": "\\omega",
          "\\Gamma": "\\Gamma",
          "\\Delta": "\\Delta",
          "\\Theta": "\\Theta",
          "\\Lambda": "\\Lambda",
          "\\Xi": "\\Xi",
          "\\Pi": "\\Pi",
          "\\Sigma": "\\Sigma",
          "\\Phi": "\\Phi",
          "\\Psi": "\\Psi",
          "\\Omega": "\\Omega",
          "\\to": "\\to",
          "\\tau": "\\tau",
          "\\vee": "\\vee",
          "\\wedge": "\\wedge",
          "\\neg": "\\neg",
          "\\vdash": "\\vdash",
          "\\times": "\\times",
          "\\cup": "\\cup",
          "\\emptyset": "\\emptyset",
          "\\overline": "\\overline",
          "\\varepsilon": "\\varepsilon",
          "\\oplus": "\\oplus"
        }
      })

      // Vérifier si le rendu a réussi avec plus de tolérance
      setTimeout(() => {
        if (containerRef.current) {
          const hasKatex = containerRef.current.querySelector('.katex') !== null
          const hasUnrenderedMath = /\$[^$]+\$/.test(containerRef.current.textContent || "")
          const shouldHaveMath = /\$[^$]+\$/.test(content)
          
          // Seulement signaler une erreur si il devrait y avoir du math ET qu'il y a du math non rendu
          if (shouldHaveMath && hasUnrenderedMath && !hasKatex) {
            setRenderError("LaTeX non rendu correctement")
          }
        }
      }, 200)

    } catch (error) {
      console.error("KaTeX rendering error:", error)
      setRenderError("Erreur de rendu LaTeX")
      if (containerRef.current) {
        containerRef.current.innerHTML = content.replace(/\$([^$]*)\$/g, (match, mathContent) => {
          return `<span style="color: #cc0000; font-family: monospace; background-color: #330000; padding: 2px 4px; border-radius: 3px;">[LaTeX Error: ${mathContent}]</span>`
        })
      }
    }
  }, [content])

  if (displayMode && latex) {
    return (
      <div ref={containerRef} className={className}>
        {renderError && (
          <div className="text-red-400 text-xs mb-2">⚠️ {renderError}</div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`${className} leading-relaxed`}>
      {renderError && (
        <div className="text-red-400 text-xs mb-2">⚠️ {renderError}</div>
      )}
    </div>
  )
} 

