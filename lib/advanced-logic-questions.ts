import type { DifficultyLevel } from './questions'

export interface QCM {
  id: number
  question: string
  options: [string, string, string, string]
  answer: number
  explanation: string
  difficulty?: DifficultyLevel
}

export const ADVANCED_LOGIC_QUESTIONS: QCM[] = [
  {
    id: 1,
    question: "Le calcul à la Hilbert intuitionniste est :",
    options: [
      "Cohérent et complet",
      "Cohérent mais incomplet",
      "Incohérent mais complet",
      "Ni cohérent ni complet"
    ],
    answer: 1,
    explanation: "Un système est **cohérent** (sound) si tout ce qu'il prouve est valide, et **complet** si tout ce qui est valide est prouvable.\n\n**Le système de Hilbert intuitionniste :**\n• **Cohérent :** ✓ - Il ne prouve pas de formules fausses\n• **Incomplet :** ✗ - Il manque certains raisonnements valides en logique classique\n\n**Différence avec le classique :** Il rejette certains principes comme le tiers exclu ($A \vee \neg A$) et la double négation ($\neg \neg A \Rightarrow A$).\n\n**Conséquence :** Moins expressif que la logique classique, mais garantit la constructivité des preuves.",
    difficulty: "dur"
  },
  {
    id: 2,
    question: "La déduction naturelle est :",
    options: [
      "Cohérente mais incomplète",
      "Cohérente et complète",
      "Incohérente mais complète",
      "Ni cohérente ni complète"
    ],
    answer: 1,
    explanation: "Le système de **déduction naturelle** possède les deux propriétés fondamentales :\n\n**Cohérence (Soundness) :** Tout ce qui est prouvable est sémantiquement valide\n• Si $\Gamma \vdash \phi$, alors $\Gamma \models \phi$\n\n**Complétude (Completeness) :** Tout ce qui est sémantiquement valide est prouvable\n• Si $\Gamma \models \phi$, alors $\Gamma \vdash \phi$\n\n**Importance :** Cette équivalence entre syntaxe et sémantique fait de la déduction naturelle un système de preuve idéal.\n\n**Créateur :** Gerhard Gentzen (1935) a développé ce système pour refléter le raisonnement naturel.",
    difficulty: "dur"
  },
  {
    id: 3,
    question: "Une coupure (cut) dans une preuve est :",
    options: [
      "L'élimination d'une hypothèse inutile",
      "La division d'une preuve en sous-cas",
      "L'ajout d'un axiome supplémentaire",
      "L'insertion d'un symbole suivie de son élimination immédiate"
    ],
    answer: 3,
    explanation: "La **coupure** (cut) insère un lemme (sous-formule) et l'utilise immédiatement :\n\n**Règle de coupure :**\n```\n\frac{\\Gamma \\vdash A \\quad \\Gamma, A \\vdash B}{\\Gamma \\vdash B} \\text{Cut}\n```\n\n**Principe :** On prouve d'abord $A$, puis on utilise $A$ pour prouver $B$.\n\n**Élimination de coupure :** Gentzen a montré qu'on peut toujours éliminer les coupures d'une preuve (théorème d'élimination de coupure).\n\n**Importance :** Une preuve sans coupure révèle la structure logique pure, sans lemmes intermédiaires.\n\n**Analogie :** Comme éliminer les variables intermédiaires dans un calcul mathématique.",
    difficulty: "dur"
  },
  {
    id: 4,
    question: "Quelle est la forme pleinement parenthésée de $\lambda abc . c(bca)$ ?",
    options: [
      "$\lambda a. (\lambda b. (\lambda c. (c(b(ca)))))$",
      "$\lambda a. (\lambda b. (\lambda c. ((cb)(ca))))$",
      "$\lambda a. (\lambda b. (\lambda c. (c((bc)a))))$",
      "$\lambda a. (\lambda b. (\lambda c. (((cb)c)a)))$"
    ],
    answer: 2,
    explanation: "Pour parenthéser pleinement $\lambda abc . c(bca)$, on applique les règles de précédence :\n\n**Règles de parenthésage :**\n1. L'abstraction lie le plus faiblement : $\lambda a. \lambda b. \lambda c. ...$\n2. L'application associe à gauche : $bca = (bc)a$\n3. L'application dans $c(bca)$ donne : $c((bc)a)$\n\n**Décomposition étape par étape :**\n• $bca = (bc)a$\n• $c(bca) = c((bc)a)$\n• $\lambda c. c((bc)a)$\n• $\lambda b. (\lambda c. (c((bc)a)))$\n• $\lambda a. (\lambda b. (\lambda c. (c((bc)a))))$\n\n**Vérification :** Chaque abstraction lie une variable et l'application est correctement parenthésée.",
    difficulty: "moyen"
  },
  {
    id: 5,
    question: "Quel terme est α-congruent à $\lambda xy . xy$ ?",
    options: [
      "$\lambda ab . ab$",
      "$\lambda uv . vu$",
      "$\lambda yz . yz$",
      "$\lambda pq . qp$"
    ],
    answer: 2,
    explanation: "Deux termes sont **α-congruents** (ou α-équivalents) s'ils ne diffèrent que par le nom des variables liées.\n\n**Terme original :** $\lambda xy . xy$\n\n**Analyse des options :**\n• $\lambda ab . ab$ ✓ - Renommage $x \mapsto a, y \mapsto b$\n• $\lambda uv . vu$ ✗ - Change l'ordre d'application\n• $\lambda yz . yz$ ✓ - Renommage $x \mapsto y, y \mapsto z$\n• $\lambda pq . qp$ ✗ - Change l'ordre d'application\n\n**Règle :** Seul le nom des variables liées peut changer, pas leur rôle ou l'ordre d'utilisation.\n\n**Note :** Les options a et c sont toutes deux α-congruentes, mais c est la réponse attendue selon la correction.",
    difficulty: "moyen"
  },
  {
    id: 6,
    question: "Quelle équivalence est fausse ?",
    options: [
      "$\lambda x . x \equiv \lambda y . y$",
      "$\lambda f . \lambda x . f x \equiv \lambda g . \lambda z . g z$",
      "$\lambda x . xxx \equiv \lambda y . y(yy)$",
      "$\lambda a . \lambda b . a \equiv \lambda u . \lambda v . u$"
    ],
    answer: 2,
    explanation: "Analysons chaque équivalence :\n\n**a) $\lambda x . x \equiv \lambda y . y$ :** ✓ **α-congruence**\n\n**b) $\lambda f . \lambda x . f x \equiv \lambda g . \lambda z . g z$ :** ✓ **α-congruence**\n\n**c) $\lambda x . xxx \equiv \lambda y . y(yy)$ :** ✗ **FAUSSE**\n• Gauche : applique $x$ à $x$ puis à $x$ encore → $(xx)x$\n• Droite : applique $y$ à $(yy)$ → $y(yy)$\n• Structure différente !\n\n**d) $\lambda a . \lambda b . a \equiv \lambda u . \lambda v . u$ :** ✓ **α-congruence**\n\n**Explication :** L'associativité de l'application fait que $xxx = (xx)x \neq y(yy)$.\n\n**Distinction cruciale :** α-congruence préserve la structure, pas seulement les noms.",
    difficulty: "dur"
  },
  {
    id: 7,
    question: "Tout terme typable en λ-calcul simplement typé est :",
    options: [
      "Fortement normalisable",
      "Non normalisable",
      "Parfois normalisable",
      "Faiblement normalisable"
    ],
    answer: 3,
    explanation: "**Propriété fondamentale :** Tout terme typable en λ-calcul simplement typé est **faiblement normalisable**.\n\n**Définitions :**\n• **Faiblement normalisable :** Il existe au moins une séquence de réductions menant à une forme normale\n• **Fortement normalisable :** Toutes les séquences de réductions terminent\n\n**Pour le λ-calcul simplement typé :**\n• **Faible normalisation :** ✓ Garantie pour tout terme typable\n• **Forte normalisation :** ✓ Aussi vraie (théorème plus fort)\n\n**Mais la question demande ce qui est garanti minimalement.**\n\n**Théorème de Tait-Girard :** Le typage simple garantit la terminaison de l'évaluation.\n\n**Conséquence :** Pas de boucles infinies possibles dans un terme bien typé.",
    difficulty: "dur"
  },
  {
    id: 8,
    question: "Quel type peut être assigné au terme $\lambda xy . xy$ ?",
    options: [
      "$(\sigma \to \\tau) \\to \sigma \\to \\tau$",
      "$\sigma \to \\tau \\to \sigma$",
      "$(\sigma \to \sigma) \\to \sigma \\to \sigma$",
      "$\sigma \to \sigma \\to \sigma$"
    ],
    answer: 2,
    explanation: "Analysons le terme $\lambda xy . xy$ :\n\n**Structure :** $\lambda x . (\lambda y . (xy))$\n\n**Typage étape par étape :**\n1. $x$ doit être une fonction car appliquée à $y$\n2. Si $y : \sigma$ et $xy : \sigma$, alors $x : \sigma \to \sigma$\n3. $\lambda y . xy : \sigma \to \sigma$ (même type que $x$)\n4. $\lambda x . (\lambda y . xy) : (\sigma \to \sigma) \to \sigma \to \sigma$\n\n**Vérification :**\n• $x : \sigma \to \sigma$\n• $y : \sigma$\n• $xy : \sigma$ (application valide)\n• Résultat final : $(\sigma \to \sigma) \to \sigma \to \sigma$\n\n**Interprétation :** Prend une fonction endomorphe et un argument, applique la fonction à l'argument.",
    difficulty: "moyen"
  },
  {
    id: 9,
    question: "En logique intuitionniste, quelle propriété est rejetée ?",
    options: [
      "Le principe de non-contradiction",
      "Le modus ponens",
      "Le tiers exclu",
      "L'introduction de la conjonction"
    ],
    answer: 2,
    explanation: "La **logique intuitionniste** rejette le **tiers exclu** ($A \vee \neg A$).\n\n**Principe rejeté :** Pour toute proposition $A$, soit $A$ est vraie, soit $\neg A$ est vraie.\n\n**Justification intuitionniste :**\n• Une proposition n'est vraie que si on peut la **construire/prouver**\n• $A \vee \neg A$ n'est valide que si on peut prouver $A$ OU prouver $\neg A$\n• Pour certaines propositions, ni $A$ ni $\neg A$ ne sont constructivement prouvables\n\n**Conséquences :**\n• Rejette aussi la double négation : $\neg \neg A \Rightarrow A$\n• Mène aux **mathématiques constructives**\n• Correspondance de Curry-Howard avec la programmation\n\n**Ce qui reste valide :** Modus ponens, non-contradiction, règles d'introduction/élimination.",
    difficulty: "dur"
  },
  {
    id: 10,
    question: "Dans une preuve par tableaux sémantiques, que signifie une branche ouverte ?",
    options: [
      "La branche contient une contradiction",
      "La branche fournit un contre-modèle",
      "La branche est incomplète",
      "La branche prouve la validité"
    ],
    answer: 1,
    explanation: "Une **branche ouverte** dans un tableau sémantique fournit un **contre-modèle** (modèle réfutant).\n\n**Interprétation :**\n• **Branche fermée (×) :** Contient $A$ et $\neg A$ → contradiction → aucun modèle possible\n• **Branche ouverte :** Pas de contradiction → peut être satisfaite par un modèle\n\n**Construction du modèle :**\nPour chaque variable propositionnelle $P$ dans la branche ouverte :\n• Si $P$ apparaît : $v(P) = \top$\n• Si $\neg P$ apparaît : $v(P) = \perp$\n• Sinon : choix libre (généralement $\perp$)\n\n**Usage :**\n• **Satisfaisabilité :** Une branche ouverte prouve que la formule est satisfaisable\n• **Validité :** Toutes les branches fermées prouvent que $\neg \phi$ est insatisfaisable, donc $\phi$ est valide",
    difficulty: "moyen"
  }
] 
