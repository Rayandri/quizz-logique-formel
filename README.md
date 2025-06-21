# Quiz Logique Formel

Quiz interactif de logique formelle avec support LaTeX pour les formules mathématiques.

## Fonctionnalités

- Questions de logique propositionnelle et du premier ordre
- Explications détaillées avec rendu LaTeX
- Interface sombre minimaliste
- Configuration personnalisable du nombre de questions
- Mélange aléatoire des questions et réponses

## Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles
- **KaTeX** - Rendu des formules mathématiques

## Installation

```bash
pnpm install
pnpm dev
```

## Usage

L'application démarre sur `http://localhost:3000`. Configurez le nombre de questions puis commencez le quiz.

### Notation LaTeX

Les explications supportent la notation LaTeX :
- `$formule$` - mathématiques inline
- `$$formule$$` - mathématiques en bloc

Exemple : `$\forall x \exists y P(x,y)$` devient ∀x ∃y P(x,y)

## Structure

```
components/
├── QuizConfig.tsx      # Configuration du quiz
├── QuestionCard.tsx    # Affichage des questions
├── ExplanationBox.tsx  # Explications avec LaTeX
├── ScoreScreen.tsx     # Résultats finaux
└── KatexRenderer.tsx   # Rendu LaTeX

lib/
└── questions.ts        # Base de données des questions
```
