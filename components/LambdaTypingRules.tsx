'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import KatexRenderer from "./KatexRenderer"

export function LambdaTypingRules() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-6 border-blue-600 bg-blue-900/20">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-blue-800/30 transition-colors">
            <CardTitle className="flex items-center gap-2 text-blue-300">
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
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1">
                  Variables et Abstraction
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Variable [Var]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{x : \\sigma \\in \\Gamma}{\\Gamma \\vdash x : \\sigma}$$"}
                    </KatexRenderer>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Abstraction [λ]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{\\Gamma, x : \\sigma \\vdash M : \\tau}{\\Gamma \\vdash \\lambda x \\cdot M : \\sigma \\to \\tau}$$"}
                    </KatexRenderer>
                  </div>
                </div>
              </div>

              {/* Application */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1">
                  Application
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Application [App]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{\\Gamma \\vdash M : \\sigma \\to \\tau \\quad \\Gamma \\vdash N : \\sigma}{\\Gamma \\vdash MN : \\tau}$$"}
                    </KatexRenderer>
                  </div>
                </div>
              </div>

              {/* Produit (Paires) */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1">
                  Produit (×)
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Introduction [×I]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{\\Gamma \\vdash M : \\sigma \\quad \\Gamma \\vdash N : \\tau}{\\Gamma \\vdash \\langle M, N \\rangle : \\sigma \\times \\tau}$$"}
                    </KatexRenderer>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Élimination [×E₁] et [×E₂]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{\\Gamma \\vdash M : \\sigma \\times \\tau}{\\Gamma \\vdash \\Pi_1(M) : \\sigma} \\quad \\frac{\\Gamma \\vdash M : \\sigma \\times \\tau}{\\Gamma \\vdash \\Pi_2(M) : \\tau}$$"}
                    </KatexRenderer>
                  </div>
                </div>
              </div>

              {/* Union (Somme) */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1">
                  Union (∪)
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Introduction [∪I₁] et [∪I₂]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{\\Gamma \\vdash M : \\sigma}{\\Gamma \\vdash K_1(M) : \\sigma \\cup \\tau} \\quad \\frac{\\Gamma \\vdash M : \\tau}{\\Gamma \\vdash K_2(M) : \\sigma \\cup \\tau}$$"}
                    </KatexRenderer>
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1">Élimination [∪E]</div>
                    <KatexRenderer className="text-gray-200">
                      {"$$\\frac{\\Gamma \\vdash M : \\sigma \\cup \\tau \\quad \\Gamma, u : \\sigma \\vdash U : \\mu \\quad \\Gamma, v : \\tau \\vdash V : \\mu}{\\Gamma \\vdash \\oplus(\\lambda u \\cdot U, \\lambda v \\cdot V, M) : \\mu}$$"}
                    </KatexRenderer>
                  </div>
                </div>
              </div>

            </div>

            {/* Type vide */}
            <div className="border-t border-blue-600 pt-4">
              <h3 className="font-semibold text-blue-300 mb-3">
                Type vide (∅)
              </h3>
              <div className="bg-gray-800 p-3 rounded border border-gray-600">
                <div className="font-medium text-sm text-gray-400 mb-1">Élimination [∅E]</div>
                <KatexRenderer className="text-gray-200">
                  {"$$\\frac{\\Gamma \\vdash M : \\emptyset}{\\Gamma \\vdash \\varepsilon(M) : \\sigma}$$"}
                </KatexRenderer>
                <div className="text-xs text-gray-500 mt-1">
                  Du type vide, on peut dériver n'importe quel type
                </div>
              </div>
            </div>

          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
} 
