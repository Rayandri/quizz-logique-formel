export type DifficultyLevel = "cours" | "facile" | "moyen" | "dur"

export interface QCM {
  id: number
  question: string
  options: [string, string, string, string]
  answer: number
  explanation: string
  difficulty?: DifficultyLevel
}

export const DEDUCTION_QUESTIONS: QCM[] = [
  {
    id: 1,
    question: "En déduction naturelle, pour prouver $A \\Rightarrow B$, quelle règle utilise-t-on ?",
    options: [
      "$[\\Rightarrow\\text{I}]$ : supposer A et dériver B",
      "$[\\Rightarrow\\text{E}]$ : modus ponens",
      "$[\\wedge\\text{I}]$ : introduction de conjonction",
      "$[\\vee\\text{E}]$ : élimination de disjonction"
    ],
    answer: 0,
    explanation: "La règle $[\\Rightarrow\\text{I}]$ (**introduction de l'implication**) permet de prouver A ⇒ B en supposant A et en dérivant B.\n\n**Structure de la preuve :**\n```\n[A]¹\n ⋮\n B\n―――――― ⇒I,¹\nA ⇒ B\n```\n\n**Principe :** Pour établir \"si A alors B\", on suppose A et on montre que cela implique B.\n\n**Décharge d'hypothèse :** L'hypothèse A est déchargée (marquée par l'exposant) lors de l'application de la règle.",
    difficulty: "cours"
  },
  {
    id: 2,
    question: "Dans l'arbre de preuve suivant, quelle règle manque ?\n\n```\nA    A ⇒ B\n―――――――――\n    B\n```",
    options: [
      "$[\\Rightarrow\\text{E}]$ (Modus Ponens)",
      "$[\\Rightarrow\\text{I}]$",
      "$[\\wedge\\text{E}]$",
      "$[\\vee\\text{I}]$"
    ],
    answer: 0,
    explanation: "Cette structure correspond à la règle $[\\Rightarrow\\text{E}]$ (**élimination de l'implication**), aussi appelée **Modus Ponens**.\n\n**Règle formelle :**\n```\nA    A ⇒ B\n―――――――――― ⇒E\n    B\n```\n\n**Principe :** Si on a prouvé A et A ⇒ B, alors on peut conclure B.\n\n**Usage :** C'est l'une des règles les plus fondamentales pour \"utiliser\" une implication dans une preuve."
  },
  {
    id: 3,
    question: "Pour prouver $A \\wedge B$ en déduction naturelle, on doit :",
    options: [
      "Prouver A et prouver B séparément, puis appliquer $[\\wedge\\text{I}]$",
      "Prouver seulement A",
      "Prouver seulement B",
      "Supposer $A \\wedge B$ directement"
    ],
    answer: 0,
    explanation: "La règle $[\\wedge\\text{I}]$ (**introduction de la conjonction**) requiert les deux composants :\n\n**Règle formelle :**\n```\nA    B\n―――――― ∧I\nA ∧ B\n```\n\n**Principe :** Pour établir \"A et B\", il faut établir A d'une part et B d'autre part.\n\n**Preuves indépendantes :** A et B peuvent être prouvés dans des sous-arbres séparés avant d'être combinés."
  },
  {
    id: 4,
    question: "La règle $[\\vee\\text{E}]$ (élimination de disjonction) correspond à :",
    options: [
      "Un raisonnement par cas",
      "L'introduction d'une disjonction",
      "L'élimination d'une conjonction",
      "L'application du modus ponens"
    ],
    answer: 0,
    explanation: "La règle $[\\vee\\text{E}]$ formalise le **raisonnement par cas** :\n\n**Structure complète :**\n```\n      [A]¹  [B]²\n       ⋮     ⋮\nA ∨ B  C     C\n―――――――――――――――― ∨E,¹,²\n       C\n```\n\n**Principe :** Si on a A ∨ B, et qu'on peut dériver C en supposant A et dériver C en supposant B, alors C est vrai.\n\n**Intuition :** \"Dans tous les cas possibles, C est vrai, donc C est vrai.\"",
    difficulty: "moyen"
  },
  {
    id: 5,
    question: "En déduction naturelle, comment prouve-t-on $\\neg A$ ?",
    options: [
      "Supposer A et dériver une contradiction $\\perp$, puis appliquer $[\\neg\\text{I}]$",
      "Supposer $\\neg A$ directement",
      "Utiliser la règle $[\\neg\\text{E}]$",
      "Appliquer $[\\vee\\text{I}]$ sur A"
    ],
    answer: 0,
    explanation: "La règle $[\\neg\\text{I}]$ (**introduction de la négation**) utilise le **raisonnement par l'absurde** :\n\n**Structure :**\n```\n[A]¹\n ⋮\n ⊥\n―――― ¬I,¹\n¬A\n```\n\n**Principe :** Pour prouver ¬A, on suppose A et on montre que cela mène à une contradiction.\n\n**Absurdité :** ⊥ représente une contradiction (comme B $\wedge \neg$B).\n\n**Puissance :** Cette règle permet de prouver des négations de manière indirecte."
  },
  {
    id: 6,
    question: "Dans un arbre de tableaux sémantiques, une branche se ferme quand :",
    options: [
      "Elle contient A et $\\neg A$ pour une même formule A",
      "Elle contient seulement des formules vraies",
      "Elle est de longueur infinie",
      "Elle ne contient aucune formule"
    ],
    answer: 0,
    explanation: "Une **branche fermée** contient une **contradiction explicite** : A et ¬A pour la même formule A.\n\n**Notation :** On marque la fermeture par $\times$\n\n**Signification :** Cette branche ne peut correspondre à aucun modèle car elle viole le principe de non-contradiction.\n\n**Objectif :** Si toutes les branches se ferment, la formule initiale est insatisfiable.\n\n**Exemple :**\n```\nA $\wedge \neg$A\n   |\nA, ¬A  $\times$\n```"
  },
  {
    id: 7,
    question: "Pour appliquer la règle $[\\wedge\\text{E}]$ (élimination de conjonction), on peut :",
    options: [
      "De $A \\wedge B$, dériver A ou dériver B",
      "De A et B, dériver $A \\wedge B$",
      "De $A \\vee B$, dériver A",
      "De $A \\Rightarrow B$, dériver B"
    ],
    answer: 0,
    explanation: "La règle $[\\wedge\\text{E}]$ (**élimination de la conjonction**) a deux formes :\n\n$[\\wedge\\text{E}_1]$ :\n```\nA ∧ B\n―――――― ∧E₁\n  A\n```\n\n$[\\wedge\\text{E}_2]$ :\n```\nA ∧ B\n―――――― ∧E₂\n  B\n```\n\n**Principe :** Si on a prouvé \"A et B\", alors on peut conclure A (ou B) séparément.\n\n**Usage :** Permet d'extraire l'information nécessaire d'une conjonction."
  },
  {
    id: 8,
    question: "La règle $[\\vee\\text{I}]$ (introduction de disjonction) permet de :",
    options: [
      "De A, dériver $A \\vee B$ pour tout B",
      "De $A \\vee B$, dériver A",
      "De A et B, dériver $A \\vee B$",
      "De $A \\Rightarrow B$, dériver $A \\vee B$"
    ],
    answer: 0,
    explanation: "La règle $[\\vee\\text{I}]$ (**introduction de la disjonction**) a deux formes :\n\n$[\\vee\\text{I}_1]$ :\n```\n  A\n―――――― ∨I₁\nA ∨ B\n```\n\n$[\\vee\\text{I}_2]$ :\n```\n  B\n―――――― ∨I₂\nA ∨ B\n```\n\n**Principe :** Si on a prouvé A, alors \"A ou B\" est vrai, quel que soit B.\n\n**Affaiblissement :** Cette règle \"affaiblit\" l'information - on passe d'une certitude à une alternative."
  },
  {
    id: 9,
    question: "Dans la méthode des tableaux sémantiques, comment traite-t-on $A \\wedge B$ ?",
    options: [
      "On l'étend en ajoutant A et B sur la même branche",
      "On crée deux branches : une avec A, une avec B",
      "On la marque comme fermée",
      "On l'ignore"
    ],
    answer: 0,
    explanation: "Pour **A ∧ B** en tableaux sémantiques, on applique la **règle α** :\n\n**Extension linéaire :**\n```\nA ∧ B\n  |\n  A\n  B\n```\n\n**Principe :** Pour que A ∧ B soit vraie, il faut que A soit vraie ET B soit vraie simultanément.\n\n**Une seule branche :** Contrairement à la disjonction, la conjonction ne crée pas de branchement.\n\n**Règles α :** Les formules conjonctives (∧, $\neg∨, ¬\Rightarrow$) étendent linéairement."
  },
  {
    id: 10,
    question: "Pour prouver $(A \\Rightarrow B) \\Rightarrow ((B \\Rightarrow C) \\Rightarrow (A \\Rightarrow C))$, quelle stratégie adopter ?",
    options: [
      "Triple application de $[\\Rightarrow\\text{I}]$ puis $[\\Rightarrow\\text{E}]$",
      "Application directe de $[\\Rightarrow\\text{E}]$",
      "Raisonnement par l'absurde",
      "Élimination de disjonction"
    ],
    answer: 0,
    explanation: "Cette formule exprime la **transitivité de l'implication**. La preuve utilise :\n\n**Structure :**\n```\n[A ⇒ B]¹\n[B ⇒ C]²\n[A]³\n  |\n  B     (⇒E sur A ⇒ B et A)\n  |\n  C     (⇒E sur B ⇒ C et B)\n  |\nA ⇒ C   (⇒I,³)\n  |\n(B ⇒ C) ⇒ (A ⇒ C)   (⇒I,²)\n  |\n(A ⇒ B) ⇒ ((B ⇒ C) ⇒ (A ⇒ C))   (⇒I,¹)\n```\n\n**Stratégie :** Trois $[\\Rightarrow\\text{I}]$ imbriquées suivies de deux $[\\Rightarrow\\text{E}]$ pour la chaîne de déduction.",
    difficulty: "dur"
  }
] 
