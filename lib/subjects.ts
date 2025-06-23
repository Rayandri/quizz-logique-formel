export interface Subject {
  id: string
  name: string
  icon: string
  color: string
  description?: string
}

export const subjects: Subject[] = [
  {
    id: "logique",
    name: "Logique Formelle",
    icon: "🧠",
    color: "from-blue-500 to-blue-700",
    description: "Logique propositionnelle et prédicats"
  },
  {
    id: "droit",
    name: "Droit",
    icon: "⚖️",
    color: "from-purple-500 to-purple-700",
    description: "Droit d'auteur et propriété intellectuelle"
  },
  {
    id: "risques",
    name: "Gestion des Risques",
    icon: "🛡️",
    color: "from-red-500 to-red-700",
    description: "Analyse et mitigation des risques"
  },
  {
    id: "probabilites",
    name: "Probabilités & Statistiques",
    icon: "📊",
    color: "from-green-500 to-green-700",
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
