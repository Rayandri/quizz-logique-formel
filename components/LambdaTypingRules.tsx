'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { KatexRenderer } from "./KatexRenderer"

export function LambdaTypingRules() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-6 border-purple-200 bg-purple-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-purple-100 transition-colors">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              Rappel des règles de typage λ-calcul
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Variables et Abstraction */}
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-800 border-b border-purple-200 pb-1">
                  Variables et Abstraction
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Variable [Var]</div>
                    <KatexRenderer 
                      latex="\\frac{x : \\sigma \\in \\Gamma}{\\Gamma \\vdash x : \\sigma}" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Abstraction [λ]</div>
                    <KatexRenderer 
                      latex="\\frac{\\Gamma, x : \\sigma \\vdash M : \\tau}{\\Gamma \\vdash \\lambda x \\cdot M : \\sigma \\to \\tau}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

              {/* Application */}
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-800 border-b border-purple-200 pb-1">
                  Application
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Application [App]</div>
                    <KatexRenderer 
                      latex="\\frac{\\Gamma \\vdash M : \\sigma \\to \\tau \\quad \\Gamma \\vdash N : \\sigma}{\\Gamma \\vdash MN : \\tau}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

              {/* Produit (Paires) */}
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-800 border-b border-purple-200 pb-1">
                  Produit (×)
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Introduction [×I]</div>
                    <KatexRenderer 
                      latex="\\frac{\\Gamma \\vdash M : \\sigma \\quad \\Gamma \\vdash N : \\tau}{\\Gamma \\vdash \\langle M, N \\rangle : \\sigma \\times \\tau}" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Élimination [×E₁] et [×E₂]</div>
                    <KatexRenderer 
                      latex="\\frac{\\Gamma \\vdash M : \\sigma \\times \\tau}{\\Gamma \\vdash \\Pi_1(M) : \\sigma} \\quad \\frac{\\Gamma \\vdash M : \\sigma \\times \\tau}{\\Gamma \\vdash \\Pi_2(M) : \\tau}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

              {/* Union (Somme) */}
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-800 border-b border-purple-200 pb-1">
                  Union (∪)
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Introduction [∪I₁] et [∪I₂]</div>
                    <KatexRenderer 
                      latex="\\frac{\\Gamma \\vdash M : \\sigma}{\\Gamma \\vdash K_1(M) : \\sigma \\cup \\tau} \\quad \\frac{\\Gamma \\vdash M : \\tau}{\\Gamma \\vdash K_2(M) : \\sigma \\cup \\tau}" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Élimination [∪E]</div>
                    <KatexRenderer 
                      latex="\\frac{\\Gamma \\vdash M : \\sigma \\cup \\tau \\quad \\Gamma, u : \\sigma \\vdash U : \\mu \\quad \\Gamma, v : \\tau \\vdash V : \\mu}{\\Gamma \\vdash \\oplus(\\lambda u \\cdot U, \\lambda v \\cdot V, M) : \\mu}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Type vide */}
            <div className="border-t border-purple-200 pt-4">
              <h3 className="font-semibold text-purple-800 mb-3">
                Type vide (∅)
              </h3>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-sm text-gray-600 mb-1">Élimination [∅E]</div>
                <KatexRenderer 
                  latex="\\frac{\\Gamma \\vdash M : \\emptyset}{\\Gamma \\vdash \\varepsilon(M) : \\sigma}" 
                  displayMode={true}
                />
                <div className="text-xs text-gray-500 mt-1">
                  Du type vide, on peut dériver n'importe quel type
                </div>
              </div>
            </div>

            {/* Encodage de Church */}
            <div className="border-t border-purple-200 pt-4">
              <h3 className="font-semibold text-purple-800 mb-3">
                Encodage de Church (rappel)
              </h3>
              <div className="bg-white p-3 rounded border space-y-2">
                <div className="text-sm">
                  <KatexRenderer latex="\\overline{0} = \\lambda f x \\cdot x" />
                </div>
                <div className="text-sm">
                  <KatexRenderer latex="\\overline{1} = \\lambda f x \\cdot f(x)" />
                </div>
                <div className="text-sm">
                  <KatexRenderer latex="\\overline{n} = \\lambda f x \\cdot f^n(x)" />
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Type : <KatexRenderer latex="(\\alpha \\to \\alpha) \\to \\alpha \\to \\alpha" />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
              <p><strong>Notation :</strong></p>
              <ul className="mt-1 space-y-1">
                <li>• <KatexRenderer latex="\\Gamma" /> : contexte de typage (environnement)</li>
                <li>• <KatexRenderer latex="\\Gamma \\vdash M : \\tau" /> : "M a le type τ dans le contexte Γ"</li>
                <li>• <KatexRenderer latex="\\sigma \\to \\tau" /> : type fonction de σ vers τ</li>
                <li>• <KatexRenderer latex="\\sigma \\times \\tau" /> : type produit (paire)</li>
                <li>• <KatexRenderer latex="\\sigma \\cup \\tau" /> : type union (somme)</li>
              </ul>
            </div>

          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
} 
