'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import KatexRenderer from "./KatexRenderer"

export function DeductionRules() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-6 border-blue-600 bg-blue-900/20">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-blue-800/30 transition-colors">
            <CardTitle className="flex items-center gap-2 text-blue-300">
              {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              Rappel des règles de déduction naturelle
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Implication */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1 flex items-center gap-2">
                  Implication (<KatexRenderer latex="\\Rightarrow" className="inline" />)
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Introduction [<KatexRenderer latex="\\Rightarrow" className="inline" />I]
                    </div>
                    <KatexRenderer 
                      latex="\\frac{[A]^1 \\quad \\vdots \\quad B}{A \\Rightarrow B}^1" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Élimination [<KatexRenderer latex="\\Rightarrow" className="inline" />E] (Modus Ponens)
                    </div>
                    <KatexRenderer 
                      latex="\\frac{A \\Rightarrow B \\quad A}{B}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Conjonction */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1 flex items-center gap-2">
                  Conjonction (<KatexRenderer latex="\\wedge" className="inline" />)
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Introduction [<KatexRenderer latex="\\wedge" className="inline" />I]
                    </div>
                    <KatexRenderer 
                      latex="\\frac{A \\quad B}{A \\wedge B}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Élimination [<KatexRenderer latex="\\wedge" className="inline" />E₁] et [<KatexRenderer latex="\\wedge" className="inline" />E₂]
                    </div>
                    <KatexRenderer 
                      latex="\\frac{A \\wedge B}{A} \\quad \\frac{A \\wedge B}{B}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Disjonction */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1 flex items-center gap-2">
                  Disjonction (<KatexRenderer latex="\\vee" className="inline" />)
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Introduction [<KatexRenderer latex="\\vee" className="inline" />I₁] et [<KatexRenderer latex="\\vee" className="inline" />I₂]
                    </div>
                    <KatexRenderer 
                      latex="\\frac{A}{A \\vee B} \\quad \\frac{B}{A \\vee B}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Élimination [<KatexRenderer latex="\\vee" className="inline" />E] (Raisonnement par cas)
                    </div>
                    <KatexRenderer 
                      latex="\\frac{A \\vee B \\quad [A]^1 \\vdots C \\quad [B]^2 \\vdots C}{C}^{1,2}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Négation */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-300 border-b border-blue-600 pb-1 flex items-center gap-2">
                  Négation (<KatexRenderer latex="\\neg" className="inline" />)
                </h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Introduction [<KatexRenderer latex="\\neg" className="inline" />I] (Raisonnement par l'absurde)
                    </div>
                    <KatexRenderer 
                      latex="\\frac{[A]^1 \\quad \\vdots \\quad \\perp}{\\neg A}^1" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Élimination [<KatexRenderer latex="\\neg" className="inline" />E]
                    </div>
                    <KatexRenderer 
                      latex="\\frac{A \\quad \\neg A}{\\perp}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                  <div className="bg-gray-800 p-3 rounded border border-gray-600">
                    <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                      Double négation [<KatexRenderer latex="\\neg\\neg" className="inline" />]
                    </div>
                    <KatexRenderer 
                      latex="\\frac{\\neg \\neg A}{A}" 
                      displayMode={true}
                      className="text-gray-200"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Règle spéciale */}
            <div className="border-t border-blue-600 pt-4">
              <h3 className="font-semibold text-blue-300 mb-3">
                Règle de l'absurdité
              </h3>
              <div className="bg-gray-800 p-3 rounded border border-gray-600">
                <div className="font-medium text-sm text-gray-400 mb-1 flex items-center gap-1">
                  Ex Falso Quodlibet [<KatexRenderer latex="\\perp" className="inline" />E]
                </div>
                <KatexRenderer 
                  latex="\\frac{\\perp}{A}" 
                  displayMode={true}
                  className="text-gray-200"
                />
                <div className="text-xs text-gray-500 mt-1">
                  De l'absurdité, on peut dériver n'importe quoi
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-400 bg-gray-800 p-3 rounded">
              <p><strong>Notation :</strong></p>
              <ul className="mt-1 space-y-1">
                <li>• <KatexRenderer latex="[A]^n" className="text-gray-300" /> : hypothèse A étiquetée n (sera déchargée)</li>
                <li>• <KatexRenderer latex="\\vdots" className="text-gray-300" /> : suite de déductions intermédiaires</li>
                <li>• <KatexRenderer latex="\\perp" className="text-gray-300" /> : contradiction (absurdité)</li>
                <li>• Les exposants indiquent les décharges d'hypothèses</li>
              </ul>
            </div>

          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
} 
