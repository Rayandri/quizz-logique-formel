export interface Subject {
  id: string
  name: string
  icon: string
  color: string
  description?: string
  subcategories?: SubCategory[]
}

export interface SubCategory {
  id: string
  name: string
  description?: string
}

export const subjects: Subject[] = [
  {
    id: "logique",
    name: "Logique Formelle",
    icon: "🧠",
    color: "bg-blue-600",
    description: "Logique propositionnelle et prédicats"
  },
  {
    id: "droit",
    name: "Droit",
    icon: "⚖️",
    color: "bg-purple-600",
    description: "Droit d'auteur et propriété intellectuelle",
    subcategories: [
      {
        id: "droit-base",
        name: "Droit de base",
        description: "Notions fondamentales du droit d'auteur"
      },
      {
        id: "droit-applique",
        name: "Droit appliqué au texte",
        description: "Analyse d'arrêts et cas pratiques"
      }
    ]
  },
  {
    id: "risques",
    name: "Gestion des Risques",
    icon: "🛡️",
    color: "bg-red-600",
    description: "Analyse et mitigation des risques"
  },
  {
    id: "probabilites",
    name: "Probabilités & Statistiques",
    icon: "📊",
    color: "bg-green-600",
    description: "Théorie des probabilités et statistiques"
  }
]

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find(subject => subject.id === id)
}

export function getSubjectName(id: string): string {
  const subject = getSubjectById(id)
  return subject?.name || id
} 
