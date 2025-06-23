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
      
      // Configuration KaTeX ultra-complète et tolérante
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\begin{equation}", right: "\\end{equation}", display: true },
          { left: "\\begin{align}", right: "\\end{align}", display: true },
          { left: "\\begin{aligned}", right: "\\end{aligned}", display: false },
          { left: "\\begin{gather}", right: "\\end{gather}", display: true },
          { left: "\\begin{multline}", right: "\\end{multline}", display: true },
        ],
        throwOnError: false,
        errorColor: '#dc2626',
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        strict: false,
        trust: true,
        fleqn: false,
        leqno: false,
        // Configuration ultra-exhaustive des macros
        macros: {
          // Variables CSS intégrées
          "\\background": "hsl(var(--background))",
          "\\foreground": "hsl(var(--foreground))",
          
          // Ensembles mathématiques
          "\\RR": "\\mathbb{R}",
          "\\NN": "\\mathbb{N}",
          "\\ZZ": "\\mathbb{Z}",
          "\\QQ": "\\mathbb{Q}",
          "\\CC": "\\mathbb{C}",
          "\\FF": "\\mathbb{F}",
          "\\PP": "\\mathbb{P}",
          "\\HH": "\\mathbb{H}",
          "\\BB": "\\mathbb{B}",
          "\\EE": "\\mathbb{E}",
          "\\Complex": "\\mathbb{C}",
          "\\cnums": "\\mathbb{C}",
          "\\R": "\\mathbb{R}",
          "\\C": "\\mathbb{C}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
          "\\Q": "\\mathbb{Q}",
          
          // Fonctions et opérateurs
          "\\text": "\\text",
          "\\mathrm": "\\mathrm",
          "\\mathbf": "\\mathbf",
          "\\mathit": "\\mathit",
          "\\mathcal": "\\mathcal",
          "\\mathfrak": "\\mathfrak",
          "\\mathsf": "\\mathsf",
          "\\mathtt": "\\mathtt",
          "\\rm": "\\mathrm",
          "\\bf": "\\mathbf",
          "\\it": "\\mathit",
          "\\cal": "\\mathcal",
          "\\sf": "\\mathsf",
          "\\tt": "\\mathtt",
          
          // Fonctions mathématiques
          "\\exp": "\\operatorname{exp}",
          "\\ln": "\\operatorname{ln}",
          "\\log": "\\operatorname{log}",
          "\\sin": "\\operatorname{sin}",
          "\\cos": "\\operatorname{cos}",
          "\\tan": "\\operatorname{tan}",
          "\\cot": "\\operatorname{cot}",
          "\\sec": "\\operatorname{sec}",
          "\\csc": "\\operatorname{csc}",
          "\\arcsin": "\\operatorname{arcsin}",
          "\\arccos": "\\operatorname{arccos}",
          "\\arctan": "\\operatorname{arctan}",
          "\\sinh": "\\operatorname{sinh}",
          "\\cosh": "\\operatorname{cosh}",
          "\\tanh": "\\operatorname{tanh}",
          "\\det": "\\operatorname{det}",
          "\\ker": "\\operatorname{ker}",
          "\\dim": "\\operatorname{dim}",
          "\\hom": "\\operatorname{hom}",
          "\\arg": "\\operatorname{arg}",
          "\\max": "\\operatorname{max}",
          "\\min": "\\operatorname{min}",
          "\\sup": "\\operatorname{sup}",
          "\\inf": "\\operatorname{inf}",
          "\\lim": "\\operatorname{lim}",
          "\\limsup": "\\operatorname{limsup}",
          "\\liminf": "\\operatorname{liminf}",
          "\\gcd": "\\operatorname{gcd}",
          "\\lcm": "\\operatorname{lcm}",
          "\\mod": "\\operatorname{mod}",
          "\\Pr": "\\operatorname{Pr}",
          
          // Probabilités et statistiques
          "\\Cov": "\\operatorname{Cov}",
          "\\Var": "\\operatorname{Var}",
          "\\Corr": "\\operatorname{Corr}",
          "\\E": "\\mathbb{E}",
          "\\var": "\\operatorname{var}",
          "\\cov": "\\operatorname{cov}",
          
          // Symboles et opérateurs logiques
          "\\land": "\\wedge",
          "\\lor": "\\vee",
          "\\lnot": "\\neg",
          "\\implies": "\\Rightarrow",
          "\\iff": "\\Leftrightarrow",
          "\\forall": "\\forall",
          "\\exists": "\\exists",
          "\\nexists": "\\nexists",
          "\\emptyset": "\\varnothing",
          "\\subset": "\\subset",
          "\\supset": "\\supset",
          "\\subseteq": "\\subseteq",
          "\\supseteq": "\\supseteq",
          "\\nsubseteq": "\\nsubseteq",
          "\\nsupseteq": "\\nsupseteq",
          "\\in": "\\in",
          "\\notin": "\\notin",
          "\\ni": "\\ni",
          "\\notni": "\\notni",
          
          // Relations et comparaisons
          "\\leq": "\\leq",
          "\\geq": "\\geq",
          "\\neq": "\\neq",
          "\\equiv": "\\equiv",
          "\\approx": "\\approx",
          "\\sim": "\\sim",
          "\\simeq": "\\simeq",
          "\\cong": "\\cong",
          "\\propto": "\\propto",
          "\\parallel": "\\parallel",
          "\\perp": "\\perp",
          "\\asymp": "\\asymp",
          "\\bowtie": "\\bowtie",
          "\\models": "\\models",
          "\\vdash": "\\vdash",
          "\\dashv": "\\dashv",
          
          // Flèches
          "\\to": "\\to",
          "\\gets": "\\gets",
          "\\mapsto": "\\mapsto",
          "\\leftrightarrow": "\\leftrightarrow",
          "\\Leftrightarrow": "\\Leftrightarrow",
          "\\Rightarrow": "\\Rightarrow",
          "\\Leftarrow": "\\Leftarrow",
          "\\rightarrow": "\\rightarrow",
          "\\leftarrow": "\\leftarrow",
          "\\uparrow": "\\uparrow",
          "\\downarrow": "\\downarrow",
          "\\updownarrow": "\\updownarrow",
          "\\nearrow": "\\nearrow",
          "\\searrow": "\\searrow",
          "\\swarrow": "\\swarrow",
          "\\nwarrow": "\\nwarrow",
          "\\hookleftarrow": "\\hookleftarrow",
          "\\hookrightarrow": "\\hookrightarrow",
          "\\leftharpoonup": "\\leftharpoonup",
          "\\rightharpoonup": "\\rightharpoonup",
          "\\leftharpoondown": "\\leftharpoondown",
          "\\rightharpoondown": "\\rightharpoondown",
          "\\rightleftharpoons": "\\rightleftharpoons",
          "\\leadsto": "\\leadsto",
          
          // Opérateurs
          "\\cdot": "\\cdot",
          "\\times": "\\times",
          "\\div": "\\div",
          "\\pm": "\\pm",
          "\\mp": "\\mp",
          "\\ast": "\\ast",
          "\\star": "\\star",
          "\\circ": "\\circ",
          "\\bullet": "\\bullet",
          "\\oplus": "\\oplus",
          "\\ominus": "\\ominus",
          "\\otimes": "\\otimes",
          "\\oslash": "\\oslash",
          "\\odot": "\\odot",
          "\\bigcirc": "\\bigcirc",
          "\\dagger": "\\dagger",
          "\\ddagger": "\\ddagger",
          "\\amalg": "\\amalg",
          "\\uplus": "\\uplus",
          "\\sqcap": "\\sqcap",
          "\\sqcup": "\\sqcup",
          "\\vee": "\\vee",
          "\\wedge": "\\wedge",
          "\\setminus": "\\setminus",
          "\\wr": "\\wr",
          "\\diamond": "\\diamond",
          "\\bigtriangleup": "\\bigtriangleup",
          "\\bigtriangledown": "\\bigtriangledown",
          "\\triangleleft": "\\triangleleft",
          "\\triangleright": "\\triangleright",
          "\\lhd": "\\triangleleft",
          "\\rhd": "\\triangleright",
          "\\unlhd": "\\trianglelefteq",
          "\\unrhd": "\\trianglerighteq",
          
          // Grands opérateurs
          "\\sum": "\\sum",
          "\\prod": "\\prod",
          "\\coprod": "\\coprod",
          "\\int": "\\int",
          "\\iint": "\\iint",
          "\\iiint": "\\iiint",
          "\\oint": "\\oint",
          "\\bigcup": "\\bigcup",
          "\\bigcap": "\\bigcap",
          "\\bigsqcup": "\\bigsqcup",
          "\\bigvee": "\\bigvee",
          "\\bigwedge": "\\bigwedge",
          "\\bigoplus": "\\bigoplus",
          "\\bigotimes": "\\bigotimes",
          "\\bigodot": "\\bigodot",
          "\\biguplus": "\\biguplus",
          
          // Dérivées et intégrales
          "\\partial": "\\partial",
          "\\nabla": "\\nabla",
          "\\Box": "\\Box",
          "\\square": "\\square",
          "\\triangle": "\\triangle",
          
          // Infini et limites
          "\\infty": "\\infty",
          "\\aleph": "\\aleph",
          "\\beth": "\\beth",
          "\\gimel": "\\gimel",
          "\\daleth": "\\daleth",
          
          // Lettres grecques
          "\\alpha": "\\alpha",
          "\\beta": "\\beta",
          "\\gamma": "\\gamma",
          "\\delta": "\\delta",
          "\\epsilon": "\\epsilon",
          "\\varepsilon": "\\varepsilon",
          "\\zeta": "\\zeta",
          "\\eta": "\\eta",
          "\\theta": "\\theta",
          "\\vartheta": "\\vartheta",
          "\\iota": "\\iota",
          "\\kappa": "\\kappa",
          "\\lambda": "\\lambda",
          "\\mu": "\\mu",
          "\\nu": "\\nu",
          "\\xi": "\\xi",
          "\\pi": "\\pi",
          "\\varpi": "\\varpi",
          "\\rho": "\\rho",
          "\\varrho": "\\varrho",
          "\\sigma": "\\sigma",
          "\\varsigma": "\\varsigma",
          "\\tau": "\\tau",
          "\\upsilon": "\\upsilon",
          "\\phi": "\\phi",
          "\\varphi": "\\varphi",
          "\\chi": "\\chi",
          "\\psi": "\\psi",
          "\\omega": "\\omega",
          "\\Gamma": "\\Gamma",
          "\\Delta": "\\Delta",
          "\\Theta": "\\Theta",
          "\\Lambda": "\\Lambda",
          "\\Xi": "\\Xi",
          "\\Pi": "\\Pi",
          "\\Sigma": "\\Sigma",
          "\\Upsilon": "\\Upsilon",
          "\\Phi": "\\Phi",
          "\\Chi": "\\Chi",
          "\\Psi": "\\Psi",
          "\\Omega": "\\Omega",
          
          // Symboles spéciaux
          "\\ell": "\\ell",
          "\\wp": "\\wp",
          "\\Re": "\\Re",
          "\\Im": "\\Im",
          "\\mho": "\\mho",
          "\\prime": "\\prime",
          "\\backprime": "\\backprime",
          "\\emptyset": "\\emptyset",
          "\\varnothing": "\\varnothing",
          "\\top": "\\top",
          "\\bot": "\\bot",
          "\\angle": "\\angle",
          "\\sphericalangle": "\\sphericalangle",
          "\\measuredangle": "\\measuredangle",
          "\\diagup": "\\diagup",
          "\\diagdown": "\\diagdown",
          "\\backslash": "\\backslash",
          "\\neg": "\\neg",
          "\\flat": "\\flat",
          "\\natural": "\\natural",
          "\\sharp": "\\sharp",
          "\\clubsuit": "\\clubsuit",
          "\\diamondsuit": "\\diamondsuit",
          "\\heartsuit": "\\heartsuit",
          "\\spadesuit": "\\spadesuit",
          
          // Accents et décorations
          "\\hat": "\\hat",
          "\\check": "\\check",
          "\\breve": "\\breve",
          "\\acute": "\\acute",
          "\\grave": "\\grave",
          "\\tilde": "\\tilde",
          "\\bar": "\\bar",
          "\\vec": "\\vec",
          "\\dot": "\\dot",
          "\\ddot": "\\ddot",
          "\\dddot": "\\dddot",
          "\\ddddot": "\\ddddot",
          "\\widehat": "\\widehat",
          "\\widetilde": "\\widetilde",
          "\\overline": "\\overline",
          "\\underline": "\\underline",
          "\\overbrace": "\\overbrace",
          "\\underbrace": "\\underbrace",
          "\\overrightarrow": "\\overrightarrow",
          "\\overleftarrow": "\\overleftarrow",
          "\\overleftrightarrow": "\\overleftrightarrow",
          "\\underrightarrow": "\\underrightarrow",
          "\\underleftarrow": "\\underleftarrow",
          "\\underleftrightarrow": "\\underleftrightarrow",
          
          // Espaces
          "\\,": "\\,",
          "\\:": "\\:",
          "\\;": "\\;",
          "\\!": "\\!",
          "\\quad": "\\quad",
          "\\qquad": "\\qquad",
          "\\enspace": "\\enspace",
          "\\thinspace": "\\thinspace",
          "\\medspace": "\\medspace",
          "\\thickspace": "\\thickspace",
          "\\negthinspace": "\\negthinspace",
          "\\negmedspace": "\\negmedspace",
          "\\negthickspace": "\\negthickspace",
          
          // Délimiteurs
          "\\langle": "\\langle",
          "\\rangle": "\\rangle",
          "\\lceil": "\\lceil",
          "\\rceil": "\\rceil",
          "\\lfloor": "\\lfloor",
          "\\rfloor": "\\rfloor",
          "\\ulcorner": "\\ulcorner",
          "\\urcorner": "\\urcorner",
          "\\llcorner": "\\llcorner",
          "\\lrcorner": "\\lrcorner",
          "\\lvert": "\\lvert",
          "\\rvert": "\\rvert",
          "\\lVert": "\\lVert",
          "\\rVert": "\\rVert",
          
          // Fractions et binômes
          "\\frac": "\\frac",
          "\\dfrac": "\\dfrac",
          "\\tfrac": "\\tfrac",
          "\\cfrac": "\\cfrac",
          "\\binom": "\\binom",
          "\\dbinom": "\\dbinom",
          "\\tbinom": "\\tbinom",
          
          // Racines
          "\\sqrt": "\\sqrt",
          "\\surd": "\\surd",
          
          // Symboles de physique
          "\\hbar": "\\hbar",
          "\\ell": "\\ell",
          "\\celsius": "\\celsius",
          "\\degree": "\\degree",
          
          // Unités
          "\\AA": "\\text{Å}",
          "\\micro": "\\mu",
          
          // Macros pour déduction naturelle et lambda-calcul
          "\\vdash": "\\vdash",
          "\\models": "\\models",
          "\\proves": "\\vdash",
          "\\entails": "\\models",
          "\\turnstile": "\\vdash",
          "\\Turnstile": "\\models",
          
          // Types et lambda-calcul
          "\\Type": "\\mathsf{Type}",
          "\\Prop": "\\mathsf{Prop}",
          "\\Set": "\\mathsf{Set}",
          "\\Nat": "\\mathbb{N}",
          "\\Bool": "\\mathbb{B}",
          
          // Logique propositionnelle et prédicats
          "\\true": "\\top",
          "\\false": "\\bot",
          "\\TRUE": "\\top",
          "\\FALSE": "\\bot",
          
          // Macros spéciales pour l'application
          "\\ds": "\\displaystyle",
          "\\ul": "\\underline",
          "\\ol": "\\overline",
          "\\wt": "\\widetilde",
          "\\wh": "\\widehat",
          "\\eps": "\\varepsilon",
          "\\phi": "\\varphi",
          "\\Phi": "\\Phi",
          "\\eps": "\\epsilon",
          "\\vphi": "\\varphi",
          "\\veps": "\\varepsilon",
          "\\vrho": "\\varrho",
          "\\vtheta": "\\vartheta",
          "\\vsigma": "\\varsigma",
          "\\vpi": "\\varpi",
          
          // Autres macros utiles
          "\\st": "\\text{ s.t. }",
          "\\tc": "\\text{ t.c. }",
          "\\wrt": "\\text{ w.r.t. }",
          "\\ie": "\\text{i.e. }",
          "\\eg": "\\text{e.g. }",
          "\\cf": "\\text{cf. }",
          "\\vs": "\\text{ vs. }",
          "\\etc": "\\text{etc.}",
          "\\resp": "\\text{resp.}",
          "\\wlog": "\\text{w.l.o.g.}",
          "\\aka": "\\text{a.k.a.}",
          "\\nb": "\\text{N.B.}",
          "\\ps": "\\text{P.S.}",
          "\\qed": "\\blacksquare",
          "\\QED": "\\blacksquare",
          "\\blackqed": "\\blacksquare",
          "\\whiteqed": "\\square",
          
          // Support pour chemins et autres notations avancées
          "\\path": "\\text{path}",
          "\\id": "\\text{id}",
          "\\Id": "\\text{Id}",
          "\\op": "\\text{op}",
          "\\co": "\\text{co}",
          "\\ob": "\\text{ob}",
          "\\mor": "\\text{mor}",
          "\\Hom": "\\text{Hom}",
          "\\End": "\\text{End}",
          "\\Aut": "\\text{Aut}",
          "\\Iso": "\\text{Iso}",
          "\\Fun": "\\text{Fun}",
          "\\Cat": "\\text{Cat}",
          "\\Set": "\\text{Set}",
          "\\Grp": "\\text{Grp}",
          "\\Top": "\\text{Top}",
          "\\Vect": "\\text{Vect}",
          "\\Mod": "\\text{Mod}",
          "\\Ring": "\\text{Ring}",
          "\\Field": "\\text{Field}",
          
          // Extensions pour la physique
          "\\lagr": "\\mathcal{L}",
          "\\haml": "\\mathcal{H}",
          "\\hilb": "\\mathcal{H}",
          "\\fourier": "\\mathcal{F}",
          "\\laplace": "\\mathcal{L}",
          "\\mellin": "\\mathcal{M}",
          "\\borel": "\\mathcal{B}",
          "\\lebesgue": "\\mathcal{L}",
          
          // Corrections pour syntaxes communes
          "\\And": "\\land",
          "\\Or": "\\lor",
          "\\Not": "\\lnot",
          "\\Implies": "\\Rightarrow",
          "\\Iff": "\\Leftrightarrow",
          "\\Forall": "\\forall",
          "\\Exists": "\\exists",
          "\\Nexists": "\\nexists",
          
          // Support minimal pour mhchem si utilisé
          "\\ce": "\\text",
          "\\pu": "\\text"
        }
      })

      // Vérification de rendu plus tolérante
      setTimeout(() => {
        if (containerRef.current) {
          const hasKatex = containerRef.current.querySelector('.katex') !== null
          const hasUnrenderedMath = /\$[^$]+\$|\\\([^)]+\\\)|\\\[[^\]]+\\\]/.test(containerRef.current.textContent || "")
          const shouldHaveMath = /\$[^$]+\$|\\\([^)]+\\\)|\\\[[^\]]+\\\]|\\[a-zA-Z]+/.test(content)
          
          // Ne signaler une erreur que si c'est vraiment problématique
          if (shouldHaveMath && hasUnrenderedMath && !hasKatex) {
            // Essayer de détecter le type d'erreur
            const errorType = content.includes('\\') ? 'Commande LaTeX non reconnue' : 'Syntaxe LaTeX invalide'
            setRenderError(`${errorType} - Vérifiez la syntaxe`)
          }
        }
      }, 300)

    } catch (error) {
      console.warn("KaTeX rendering error:", error)
      setRenderError("Erreur de rendu LaTeX")
      
      if (containerRef.current) {
        // Affichage d'erreur plus informatif
        containerRef.current.innerHTML = content.replace(
          /\$([^$]*)\$|\\\(([^)]*)\\\)|\\\[([^\]]*)\\\]/g, 
          (match, inline1, inline2, display) => {
            const mathContent = inline1 || inline2 || display || match
            return `<span style="color: #dc2626; font-family: ui-monospace, monospace; background-color: rgba(239, 68, 68, 0.1); padding: 2px 4px; border-radius: 3px; font-size: 0.875em;">[LaTeX: ${mathContent}]</span>`
          }
        )
      }
    }
  }, [content])

  if (displayMode && latex) {
    return (
      <div ref={containerRef} className={`${className} katex-display-container`}>
        {renderError && (
          <div className="text-red-400 text-xs mb-2 flex items-center gap-1">
            <span>⚠️</span>
            <span>{renderError}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`${className} leading-relaxed katex-inline-container`}>
      {renderError && (
        <div className="text-red-400 text-xs mb-2 flex items-center gap-1">
          <span>⚠️</span>
          <span>{renderError}</span>
        </div>
      )}
    </div>
  )
} 

