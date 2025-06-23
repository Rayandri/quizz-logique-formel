'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { KatexRenderer } from "./KatexRenderer"

export function DeductionRules() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-blue-100 transition-colors">
            <CardTitle className="flex items-center gap-2 text-blue-800">
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
                <h3 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                  Implication (⇒)
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Introduction [⇒I]</div>
                    <KatexRenderer 
                      latex="\\frac{[A]^1 \\quad \\vdots \\quad B}{A \\Rightarrow B}^1" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Élimination [⇒E] (Modus Ponens)</div>
                    <KatexRenderer 
                      latex="\\frac{A \\Rightarrow B \\quad A}{B}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

              {/* Conjonction */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                  Conjonction (∧)
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Introduction [∧I]</div>
                    <KatexRenderer 
                      latex="\\frac{A \\quad B}{A \\wedge B}" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Élimination [∧E₁] et [∧E₂]</div>
                    <KatexRenderer 
                      latex="\\frac{A \\wedge B}{A} \\quad \\frac{A \\wedge B}{B}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

              {/* Disjonction */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                  Disjonction (∨)
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Introduction [∨I₁] et [∨I₂]</div>
                    <KatexRenderer 
                      latex="\\frac{A}{A \\vee B} \\quad \\frac{B}{A \\vee B}" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Élimination [∨E] (Raisonnement par cas)</div>
                    <KatexRenderer 
                      latex="\\frac{A \\vee B \\quad [A]^1 \\vdots C \\quad [B]^2 \\vdots C}{C}^{1,2}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

              {/* Négation */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                  Négation (¬)
                </h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Introduction [¬I] (Raisonnement par l'absurde)</div>
                    <KatexRenderer 
                      latex="\\frac{[A]^1 \\quad \\vdots \\quad \\perp}{\\neg A}^1" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Élimination [¬E]</div>
                    <KatexRenderer 
                      latex="\\frac{A \\quad \\neg A}{\\perp}" 
                      displayMode={true}
                    />
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-600 mb-1">Double négation [¬¬]</div>
                    <KatexRenderer 
                      latex="\\frac{\\neg \\neg A}{A}" 
                      displayMode={true}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Règle spéciale */}
            <div className="border-t border-blue-200 pt-4">
              <h3 className="font-semibold text-blue-800 mb-3">
                Règle de l'absurdité
              </h3>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-sm text-gray-600 mb-1">Ex Falso Quodlibet [⊥E]</div>
                <KatexRenderer 
                  latex="\\frac{\\perp}{A}" 
                  displayMode={true}
                />
                <div className="text-xs text-gray-500 mt-1">
                  De l'absurdité, on peut dériver n'importe quoi
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
              <p><strong>Notation :</strong></p>
              <ul className="mt-1 space-y-1">
                <li>• <KatexRenderer latex="[A]^n" /> : hypothèse A étiquetée n (sera déchargée)</li>
                <li>• <KatexRenderer latex="\\vdots" /> : suite de déductions intermédiaires</li>
                <li>• <KatexRenderer latex="\\perp" /> : contradiction (absurdité)</li>
                <li>• Les exposants indiquent les décharges d'hypothèses</li>
              </ul>
            </div>

          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
} 
