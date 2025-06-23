import { Badge } from "@/components/ui/badge"
import type { DifficultyLevel } from "@/lib/questions"

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const getDifficultyConfig = (level: DifficultyLevel) => {
    switch (level) {
      case "cours":
        return {
          label: "Question de cours",
          className: "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200"
        }
      case "facile":
        return {
          label: "Facile",
          className: "bg-green-100 text-green-800 hover:bg-green-200 border-green-200"
        }
      case "moyen":
        return {
          label: "Moyen",
          className: "bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200"
        }
      case "dur":
        return {
          label: "Difficile",
          className: "bg-red-100 text-red-800 hover:bg-red-200 border-red-200"
        }
      default:
        return {
          label: "Facile",
          className: "bg-green-100 text-green-800 hover:bg-green-200 border-green-200"
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
