import { Badge } from "@/components/ui/badge"
import type { DifficultyLevel } from "@/lib/questions"

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const getDifficultyConfig = (level: DifficultyLevel) => {
    switch (level) {
      case "cours":
        return {
          label: "Question de cours",
          className: "bg-blue-900/30 text-blue-300 hover:bg-blue-900/40 border-blue-600"
        }
      case "facile":
        return {
          label: "Facile",
          className: "bg-green-900/30 text-green-300 hover:bg-green-900/40 border-green-600"
        }
      case "moyen":
        return {
          label: "Moyen",
          className: "bg-orange-900/30 text-orange-300 hover:bg-orange-900/40 border-orange-600"
        }
      case "dur":
        return {
          label: "Difficile",
          className: "bg-red-900/30 text-red-300 hover:bg-red-900/40 border-red-600"
        }
      default:
        return {
          label: "Facile",
          className: "bg-green-900/30 text-green-300 hover:bg-green-900/40 border-green-600"
        }
    }
  }

  const config = getDifficultyConfig(difficulty)

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
} 
