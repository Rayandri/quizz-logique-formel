import type { QCM, DifficultyLevel } from './questions'

export const EVALUATION_QUESTIONS: QCM[] = [
  {
    id: 1,
    question: "Calculez la table de vérité de $(\\neg P \\wedge Q) \\Leftrightarrow (P \\Rightarrow Q)$. La formule est :",
    options: [
      "Une tautologie",
      "Une antilogie (contradiction)",
      "Strictement satisfiable",
      "Équivalente à $P \\vee Q$"
    ],
    answer: 2,
    explanation: "**Table de vérité :**\n\n| P | Q | $\\neg P$ | $\\neg P \\wedge Q$ | $P \\Rightarrow Q$ | $(\\neg P \\wedge Q) \\Leftrightarrow (P \\Rightarrow Q)$ |\n|---|---|----------|-------------------|-------------------|--------------------------------------------------|\n| T | T | F        | F                 | T                 | F                                                |\n| T | F | F        | F                 | F                 | T                                                |\n| F | T | T        | T                 | T                 | T                                                |\n| F | F | T        | F                 | T                 | F                                                |\n\n**Résultat :** La formule est vraie dans **2 cas sur 4** (lignes 2 et 3), donc **strictement satisfiable**.\n\n**Définitions :**\n• **Tautologie :** vraie dans tous les cas\n• **Contradiction :** fausse dans tous les cas  \n• **Strictement satisfiable :** vraie dans certains cas, fausse dans d'autres",
    difficulty: "moyen" as DifficultyLevel
  },
  {
    id: 2,
    question: "Combien de valuations rendent vraie la formule $(P \\wedge Q) \\vee (\\neg P \\wedge \\neg Q)$ ?",
    options: [
      "1 valuation",
      "2 valuations", 
      "3 valuations",
      "4 valuations"
    ],
    answer: 1,
    explanation: "**Table de vérité :**\n\n| P | Q | $P \\wedge Q$ | $\\neg P$ | $\\neg Q$ | $\\neg P \\wedge \\neg Q$ | $(P \\wedge Q) \\vee (\\neg P \\wedge \\neg Q)$ |\n|---|---|---------------|----------|----------|-------------------------|-------------------------------------------|\n| T | T | T             | F        | F        | F                       | **T**                                     |\n| T | F | F             | F        | T        | F                       | F                                         |\n| F | T | F             | T        | F        | F                       | F                                         |\n| F | F | F             | T        | T        | T                       | **T**                                     |\n\n**Résultat :** **2 valuations** rendent la formule vraie (lignes 1 et 4).\n\n**Interprétation :** Cette formule exprime \"P et Q ont la même valeur de vérité\" - équivalente à $P \\Leftrightarrow Q$.",
    difficulty: "moyen" as DifficultyLevel
  },
  {
    id: 3,
    question: "Évaluez $(P \\Rightarrow Q) \\wedge (Q \\Rightarrow R)$ avec $P=\\text{Vrai}$, $Q=\\text{Faux}$, $R=\\text{Vrai}$ :",
    options: [
      "Vrai",
      "Faux", 
      "Indéterminé",
      "Impossible à calculer"
    ],
    answer: 1,
    explanation: "**Calcul étape par étape :**\n\n**Avec $P = \\top$, $Q = \\perp$, $R = \\top$ :**\n\n1. $P \\Rightarrow Q = \\top \\Rightarrow \\perp = \\perp$\n2. $Q \\Rightarrow R = \\perp \\Rightarrow \\top = \\top$\n3. $(P \\Rightarrow Q) \\wedge (Q \\Rightarrow R) = \\perp \\wedge \\top = \\perp$\n\n**Résultat :** **Faux**\n\n**Explication :** Bien que $Q \\Rightarrow R$ soit vraie, $P \\Rightarrow Q$ est fausse car on a P vrai et Q faux, ce qui rend toute la conjonction fausse.",
    difficulty: "facile" as DifficultyLevel
  },
  {
    id: 4,
    question: "Dans combien de cas la formule $((P \\vee Q) \\wedge (\\neg P \\vee R)) \\Rightarrow (Q \\vee R)$ est-elle fausse ?",
    options: [
      "0 cas (tautologie)",
      "1 cas",
      "2 cas", 
      "4 cas"
    ],
    answer: 0,
    explanation: "**Analyse par résolution :**\n\nCette formule est une **tautologie**. Voici pourquoi :\n\n**Cas où l'antécédent $(P \\vee Q) \\wedge (\\neg P \\vee R)$ est vrai :**\n- Si $P = \\top$ : alors $\\neg P \\vee R$ impose $R = \\top$, donc $Q \\vee R = \\top$\n- Si $P = \\perp$ : alors $P \\vee Q$ impose $Q = \\top$, donc $Q \\vee R = \\top$\n\n**Dans tous les cas**, si l'antécédent est vrai, le conséquent l'est aussi.\n\n**Résultat :** **0 cas** - c'est une tautologie.\n\n**Principe :** Cette formule illustre le **syllogisme disjonctif** : de $(P \\vee Q)$ et $(\\neg P \\vee R)$, on peut dériver $(Q \\vee R)$.",
    difficulty: "dur" as DifficultyLevel
  },
  {
    id: 5,
    question: "Évaluez $\\neg(P \\wedge Q) \\Leftrightarrow (\\neg P \\vee \\neg Q)$ pour toutes les valuations :",
    options: [
      "Toujours vraie",
      "Toujours fausse",
      "Vraie dans 3 cas sur 4",
      "Vraie dans 1 cas sur 4"
    ],
    answer: 0,
    explanation: "**Loi de De Morgan :**\n\nCette formule exprime la **loi de De Morgan** : $\\neg(P \\wedge Q) \\equiv (\\neg P \\vee \\neg Q)$\n\n**Vérification complète :**\n\n| P | Q | $P \\wedge Q$ | $\\neg(P \\wedge Q)$ | $\\neg P$ | $\\neg Q$ | $\\neg P \\vee \\neg Q$ | Équivalence |\n|---|---|---------------|-------------------|----------|----------|-------------------|-------------|\n| T | T | T             | F                 | F        | F        | F                 | **T**       |\n| T | F | F             | T                 | F        | T        | T                 | **T**       |\n| F | T | F             | T                 | T        | F        | T                 | **T**       |\n| F | F | F             | T                 | T        | T        | T                 | **T**       |\n\n**Résultat :** **Toujours vraie** - c'est une tautologie fondamentale.",
    difficulty: "cours" as DifficultyLevel
  },
  {
    id: 6,
    question: "Avec $P = \\text{Faux}$, $Q = \\text{Vrai}$, $R = \\text{Faux}$, évaluez $(P \\Rightarrow Q) \\Rightarrow ((Q \\Rightarrow R) \\Rightarrow (P \\Rightarrow R))$ :",
    options: [
      "Vrai",
      "Faux",
      "Indéterminé", 
      "Dépend de l'ordre d'évaluation"
    ],
    answer: 0,
    explanation: "**Calcul de la transitivité de l'implication :**\n\n**Avec $P = \\perp$, $Q = \\top$, $R = \\perp$ :**\n\n1. $P \\Rightarrow Q = \\perp \\Rightarrow \\top = \\top$\n2. $Q \\Rightarrow R = \\top \\Rightarrow \\perp = \\perp$\n3. $P \\Rightarrow R = \\perp \\Rightarrow \\perp = \\top$\n4. $(Q \\Rightarrow R) \\Rightarrow (P \\Rightarrow R) = \\perp \\Rightarrow \\top = \\top$\n5. $(P \\Rightarrow Q) \\Rightarrow ((Q \\Rightarrow R) \\Rightarrow (P \\Rightarrow R)) = \\top \\Rightarrow \\top = \\top$\n\n**Résultat :** **Vrai**\n\n**Note :** Cette formule est en fait une tautologie (loi de transitivité de l'implication).",
    difficulty: "dur" as DifficultyLevel
  },
  {
    id: 7,
    question: "Combien de modèles (valuations rendant la formule vraie) a $(P \\vee Q) \\wedge (\\neg P \\vee \\neg Q)$ ?",
    options: [
      "1 modèle",
      "2 modèles",
      "3 modèles",
      "4 modèles"
    ],
    answer: 1,
    explanation: "**Table de vérité :**\n\n| P | Q | $P \\vee Q$ | $\\neg P$ | $\\neg Q$ | $\\neg P \\vee \\neg Q$ | $(P \\vee Q) \\wedge (\\neg P \\vee \\neg Q)$ |\n|---|---|-------------|----------|----------|---------------------|------------------------------------|\n| T | T | T           | F        | F        | F                   | F                                  |\n| T | F | T           | F        | T        | T                   | **T**                              |\n| F | T | T           | T        | F        | T                   | **T**                              |\n| F | F | F           | T        | T        | T                   | F                                  |\n\n**Résultat :** **2 modèles** (lignes 2 et 3)\n\n**Interprétation :** Cette formule est vraie quand exactement une des variables est vraie - c'est le **OU exclusif** : $P \\oplus Q$.\n\n**Formule équivalente :** $(P \\wedge \\neg Q) \\vee (\\neg P \\wedge Q)$",
    difficulty: "moyen" as DifficultyLevel
  },
  {
    id: 8,
    question: "Évaluez $(P \\Leftrightarrow Q) \\wedge (Q \\Leftrightarrow R)$ avec $P = \\text{Vrai}$, $Q = \\text{Vrai}$, $R = \\text{Faux}$ :",
    options: [
      "Vrai",
      "Faux",
      "Équivalent à $P \\Leftrightarrow R$",
      "Indéterminé"
    ],
    answer: 1,
    explanation: "**Calcul étape par étape :**\n\n**Avec $P = \\top$, $Q = \\top$, $R = \\perp$ :**\n\n1. $P \\Leftrightarrow Q = \\top \\Leftrightarrow \\top = \\top$ (même valeur)\n2. $Q \\Leftrightarrow R = \\top \\Leftrightarrow \\perp = \\perp$ (valeurs différentes)\n3. $(P \\Leftrightarrow Q) \\wedge (Q \\Leftrightarrow R) = \\top \\wedge \\perp = \\perp$\n\n**Résultat :** **Faux**\n\n**Explication :** Bien que P et Q aient la même valeur, Q et R ont des valeurs différentes, donc la seconde équivalence est fausse, rendant toute la conjonction fausse.",
    difficulty: "facile" as DifficultyLevel
  },
  {
    id: 9,
    question: "La formule $(P \\Rightarrow Q) \\Leftrightarrow (\\neg Q \\Rightarrow \\neg P)$ est :",
    options: [
      "Une tautologie",
      "Une contradiction",
      "Satisfiable dans 3 cas sur 4",
      "Équivalente à $P \\wedge Q$"
    ],
    answer: 0,
    explanation: "**Loi de la contraposée :**\n\nCette formule exprime l'équivalence entre une implication et sa **contraposée** : $P \\Rightarrow Q \\equiv \\neg Q \\Rightarrow \\neg P$\n\n**Vérification :**\n\n| P | Q | $P \\Rightarrow Q$ | $\\neg Q$ | $\\neg P$ | $\\neg Q \\Rightarrow \\neg P$ | Équivalence |\n|---|---|-------------------|----------|----------|---------------------------|-------------|\n| T | T | T                 | F        | F        | T                         | **T**       |\n| T | F | F                 | T        | F        | F                         | **T**       |\n| F | T | T                 | F        | T        | T                         | **T**       |\n| F | F | T                 | T        | T        | T                         | **T**       |\n\n**Résultat :** **Tautologie** - toujours vraie.\n\n**Principe :** La contraposée d'une implication lui est logiquement équivalente.",
    difficulty: "cours" as DifficultyLevel
  },
  {
    id: 10,
    question: "Avec $P = \\text{Faux}$, $Q = \\text{Faux}$, $R = \\text{Vrai}$, la formule $((P \\vee Q) \\Rightarrow R) \\wedge (R \\Rightarrow (P \\wedge Q))$ vaut :",
    options: [
      "Vrai",
      "Faux",
      "Équivalent à $\\neg R$",
      "Indéterminé"
    ],
    answer: 1,
    explanation: "**Calcul détaillé :**\n\n**Avec $P = \\perp$, $Q = \\perp$, $R = \\top$ :**\n\n1. $P \\vee Q = \\perp \\vee \\perp = \\perp$\n2. $(P \\vee Q) \\Rightarrow R = \\perp \\Rightarrow \\top = \\top$\n3. $P \\wedge Q = \\perp \\wedge \\perp = \\perp$\n4. $R \\Rightarrow (P \\wedge Q) = \\top \\Rightarrow \\perp = \\perp$\n5. $((P \\vee Q) \\Rightarrow R) \\wedge (R \\Rightarrow (P \\wedge Q)) = \\top \\wedge \\perp = \\perp$\n\n**Résultat :** **Faux**\n\n**Analyse :** Bien que la première implication soit vraie (antécédent faux), la seconde est fausse car R est vrai mais $P \\wedge Q$ est faux.",
    difficulty: "moyen" as DifficultyLevel
  }
] 
