import { DEDUCTION_QUESTIONS } from './deduction-questions'
import { LAMBDA_CALCULUS_QUESTIONS } from './lambda-calculus-questions'

export type DifficultyLevel = "cours" | "facile" | "moyen" | "dur"

export interface QCM {
  id: number
  question: string
  options: [string, string, string, string]
  answer: number
  explanation: string
  difficulty?: DifficultyLevel
}

const EXISTING_QUESTIONS: QCM[] = [
  {
    id: 1,
    question: "Quelle est la forme CNF (Forme Normale Conjonctive) ?",
    options: [
      "$(A \\vee B) \\wedge (\\neg C \\vee D)$", 
      "$(A \\wedge B) \\vee (C \\wedge D)$", 
      "$A \\vee B \\vee C$", 
      "$(A \\wedge \\neg B) \\wedge C$"
    ],
    answer: 0,
    explanation:
      "La **Forme Normale Conjonctive (CNF)** est une conjonction ($\wedge$) de disjonctions ($\vee$) de littéraux.\n\nUn littéral est soit une variable propositionnelle, soit sa négation.\n\nLa formule (A $\vee$ B) $\wedge$ ($\neg$C $\vee$ D) respecte cette structure : c'est un ET de deux clauses, chaque clause étant un OU de littéraux.\n\n**Propriété importante :** Toute formule peut être transformée en CNF par les lois de De Morgan et la distributivité.",
    difficulty: "cours"
  },
  {
    id: 2,
    question: "La règle de De Morgan correcte est :",
    options: [
      "$\\neg(A \\wedge B) \\equiv (\\neg A \\vee \\neg B)$", 
      "$\\neg(A \\wedge B) \\equiv (\\neg A \\wedge \\neg B)$", 
      "$\\neg(A \\vee B) \\equiv (\\neg A \\vee \\neg B)$", 
      "$A \\vee B \\equiv A \\wedge B$"
    ],
    answer: 0,
    explanation:
      'Les **lois de De Morgan** sont fondamentales en logique booléenne.\n\nElles établissent la dualité entre conjonction et disjonction sous négation :\n• ¬(A ∧ B) ≡ ¬A ∨ ¬B\n• ¬(A ∨ B) ≡ ¬A ∧ ¬B\n\n**Intuition :** "Il n\'est pas vrai que A ET B" équivaut à "non-A OU non-B".\n\n**Application :** Ces lois permettent de pousser les négations vers l\'intérieur des formules lors de la transformation en formes normales.',
  },
  {
    id: 3,
    question: "La contraposée de $A \\Rightarrow B$ est :",
    options: [
      "$\\neg B \\Rightarrow \\neg A$", 
      "$\\neg A \\Rightarrow \\neg B$", 
      "$B \\Rightarrow A$", 
      "$A \\Rightarrow \\neg B$"
    ],
    answer: 0,
    explanation:
      "La **contraposée** d'une implication A $\Rightarrow$ B est $\neg$B $\Rightarrow \neg$A.\n\n**Équivalence fondamentale :** A $\Rightarrow$ B $\equiv \neg$B $\Rightarrow \neg$A\n\nLa preuve se fait par table de vérité ou en utilisant l'équivalence A $\Rightarrow$ B $\equiv \neg$A $\vee$ B.\n\n**Important :** La contraposée conserve la valeur de vérité de l'implication originale, contrairement à la réciproque B $\Rightarrow$ A qui n'est pas équivalente.",
  },
  {
    id: 4,
    question: "Quel connecteur logique est à la fois commutatif et associatif ?",
    options: [
      "$\\vee$ (disjonction)", 
      "$\\Rightarrow$ (implication)", 
      "$\\neg$ (négation)", 
      "$\\mapsto$ (fonction)"
    ],
    answer: 0,
    explanation:
      "La **disjonction** $\vee$ possède deux propriétés importantes :\n\n**Commutativité :** A $\vee$ B $\equiv$ B $\vee$ A\n**Associativité :** (A $\vee$ B) $\vee$ C $\equiv$ A $\vee$ (B $\vee$ C)\n\nCes propriétés permettent de réorganiser les termes d'une disjonction sans changer sa valeur de vérité.\n\n**Note :** La conjonction $\wedge$ possède également ces propriétés.\n\n**Contre-exemple :** L'implication $\Rightarrow$ n'est ni commutative (A $\Rightarrow$ B $\not\equiv$ B $\Rightarrow$ A) ni associative.",
  },
  {
    id: 5,
    question: "Dans le problème SAT, une formule est satisfiable si :",
    options: [
      "Il existe au moins une valuation qui la rend vraie",
      "Elle est vraie pour toutes les valuations possibles",
      "Elle est toujours fausse",
      "Elle est en forme normale disjonctive",
    ],
    answer: 0,
    explanation:
      "Une formule est **satisfiable** s'il existe au moins une **valuation** qui rend la formule vraie.\n\n**Définition formelle :** $\phi$ est satisfiable si $\exists$v : v($\phi$) = $\top$\n\n**Distinctions importantes :**\n• Si vraie pour toutes les valuations $\to$ **tautologie**\n• Si fausse pour toutes les valuations $\to$ **insatisfiable** (contradiction)\n\n**Le problème SAT :** Déterminer si une formule donnée est satisfiable.",
  },
  {
    id: 6,
    question: "Le problème SAT est classé dans la complexité comme :",
    options: ["Problème NP-complet", "Problème P (polynomial)", "Problème co-NP", "Problème EXPTIME"],
    answer: 0,
    explanation:
      "SAT est le **premier problème prouvé NP-complet** par Stephen Cook en 1971.\n\n**Théorème de Cook-Levin :** Un problème est NP-complet s'il est :\n• Dans NP (vérifiable en temps polynomial)\n• NP-difficile (tout problème NP se réduit polynomialement à lui)\n\n**Pourquoi SAT est NP-complet :**\n• Dans NP : on peut vérifier une solution en temps polynomial\n• NP-difficile : tout problème NP se réduit à SAT\n\n**Impact :** Cette découverte est fondamentale en théorie de la complexité.",
  },
  {
    id: 7,
    question: "L'implication matérialisée : $A \\Rightarrow B$ équivaut à :",
    options: [
      "$\\neg A \\vee B$", 
      "$A \\wedge B$", 
      "$\\neg B \\vee A$", 
      "$B \\wedge \\neg A$"
    ],
    answer: 0,
    explanation:
      "L'**implication matérialisée** définit : $A \\Rightarrow B \\equiv \\neg A \\vee B$\n\n**Vérification par table de vérité :**\nL'implication n'est fausse que quand l'antécédent est vrai et le conséquent faux.\n\nDans tous les autres cas (A faux ou B vrai), l'implication est vraie.\n\n**Utilité :** Cette définition permet d'éliminer le connecteur $\\Rightarrow$ lors de la transformation en formes normales, en utilisant uniquement $\\neg$, $\\wedge$ et $\\vee$.",
  },
  {
    id: 8,
    question: "Quelle est la forme DNF (Forme Normale Disjonctive) correcte ?",
    options: ["(A ∧ B) ∨ (C ∧ ¬D)", "(A ∨ B) ∧ (C ∨ D)", "A ∨ (B ∧ C)", "A ∧ (B ∨ C)"],
    answer: 0,
    explanation:
      "La **Forme Normale Disjonctive (DNF)** est une disjonction ($\vee$) de conjonctions ($\wedge$) de littéraux.\n\n**Structure :** C'est la forme duale de la CNF.\n\nLa formule (A $\wedge$ B) $\vee$ (C $\wedge \neg$D) est en DNF :\n• C'est un OU de deux termes\n• Chaque terme est un ET de littéraux\n\n**Interprétation :** La DNF représente directement les cas où la formule est vraie.\nElle est vraie si (A $\wedge$ B) est vrai OU si (C $\wedge \neg$D) est vrai.",
  },
  {
    id: 9,
    question: "Quelle formule est toujours insatisfiable (contradiction) ?",
    options: ["A ∧ ¬A", "A ∨ ¬A", "A ⇒ A", "A"],
    answer: 0,
    explanation:
      "La formule A $\wedge \neg$A est une **contradiction classique** (antilogie).\n\n**Principe violé :** Elle viole le **principe de non-contradiction** - une proposition ne peut être à la fois vraie et fausse.\n\n**Valeur de vérité :** Cette formule a pour valeur $\perp$ (faux) pour toute valuation, la rendant insatisfiable.\n\n**Opposé :** C'est l'opposé de la tautologie A $\vee \neg$A (principe du tiers exclu).",
  },
  {
    id: 10,
    question: "Comment exprimer en logique du premier ordre : « Tout entier a un successeur » ?",
    options: ["∀x ∃y S(x,y)", "∃x ∀y S(x,y)", "∀x S(x)", "∃y S(y)"],
    answer: 0,
    explanation:
      'La formule ∀x ∃y S(x,y) exprime correctement l\'énoncé.\n\n**Lecture :** "Pour tout entier x, il existe un entier y tel que S(x,y)" (y est le successeur de x).\n\n**Ordre crucial des quantificateurs :**\n• ∀x ∃y signifie "pour chaque x, il existe un y (qui peut dépendre de x)"\n• ∃y ∀x signifierait "il existe un y qui est le successeur de tous les x" (faux !)\n\n**Règle :** L\'ordre des quantificateurs change complètement le sens de la formule.',
  },
  {
    id: 11,
    question: "La formule (A ∨ ¬A) est :",
    options: ["Une tautologie", "Une contradiction", "Satisfiable mais pas tautologique", "Insatisfiable"],
    answer: 0,
    explanation:
      "(A $\vee \neg$A) est une **tautologie**, connue sous le nom de **loi du tiers exclu**.\n\n**Principe :** Pour toute proposition A, soit A est vraie, soit $\neg$A est vraie (il n'y a pas de troisième possibilité).\n\n**Vérification :**\n• Si v(A) = $\top$, alors v(A $\vee \neg$A) = $\top \vee \perp$ = $\top$\n• Si v(A) = $\perp$, alors v(A $\vee \neg$A) = $\perp \vee \top$ = $\top$\n\n**Statut :** Pilier de la logique classique (rejetée en logique intuitionniste).",
  },
  {
    id: 12,
    question: "La formule (A ∧ ¬A) est :",
    options: ["Une tautologie", "Une contradiction", "Satisfiable mais pas tautologique", "Une antilogie"],
    answer: 1,
    explanation:
      "(A $\wedge \neg$A) est une **contradiction** (aussi appelée **antilogie**).\n\n**Principe violé :** Le **principe de non-contradiction** - une proposition ne peut être simultanément vraie et fausse.\n\n**Vérification pour toute valuation v :**\n• Si v(A) = $\top$, alors v($\neg$A) = $\perp$, donc v(A $\wedge \neg$A) = $\top \wedge \perp$ = $\perp$\n• Si v(A) = $\perp$, alors v($\neg$A) = $\top$, donc v(A $\wedge \neg$A) = $\perp \wedge \top$ = $\perp$\n\n**Opposé :** C'est l'opposé logique de la tautologie A $\vee \neg$A.",
  },
  {
    id: 13,
    question: "P ⇒ Q est logiquement équivalent à :",
    options: ["¬P ∨ Q", "P ∨ Q", "¬Q ∨ P", "P ∧ Q"],
    answer: 0,
    explanation:
      "L'équivalence P $\Rightarrow$ Q $\equiv \neg$P $\vee$ Q est la **définition de l'implication matérialisée**.\n\n**Démonstration par table de vérité :**\nL'implication P $\Rightarrow$ Q n'est fausse que lorsque P est vrai et Q est faux.\n\nDans ce cas : $\neg$P $\vee$ Q = $\perp \vee \perp$ = $\perp$\n\nDans tous les autres cas, au moins l'un des termes $\neg$P ou Q est vrai, rendant la disjonction vraie.\n\n**Utilité :** Cette équivalence permet d'éliminer l'implication des formules logiques.",
  },
  {
    id: 14,
    question: "En logique propositionnelle, un modèle est :",
    options: [
      "Une valuation qui rend la formule vraie",
      "Une formule équivalente à une autre",
      "Un système d'axiomes",
      "Un arbre de preuve",
    ],
    answer: 0,
    explanation:
      "Un **modèle** d'une formule $\phi$ est une **valuation** v telle que v($\phi$) = $\top$.\n\n**Définition :** Une valuation assigne des valeurs booléennes aux variables propositionnelles.\n\n**Propriétés importantes :**\n• L'ensemble des modèles caractérise complètement la sémantique d'une formule\n• Si $\phi$ a au moins un modèle $\to$ elle est satisfiable\n• Si tous les modèles de $\phi$ sont aussi modèles de $\psi \to \phi$ ⊨ $\psi$\n\n**Fondement :** Cette notion est centrale pour la sémantique de la logique propositionnelle.",
  },
  {
    id: 15,
    question: "La loi de double négation : ¬(¬A) ≡ ?",
    options: ["A", "¬A", "A ∨ ¬A", "A ∧ ¬A"],
    answer: 0,
    explanation:
      "La **loi de double négation** établit que $\neg$($\neg$A) $\equiv$ A.\n\n**Principe :** En logique classique, nier deux fois une proposition revient à affirmer la proposition originale.\n\n**Vérification par table de vérité :**\n• Si v(A) = $\top$, alors v($\neg$A) = $\perp$ et v($\neg$($\neg$A)) = $\neg$\perp$ = $\top$ = v(A)\n• Si v(A) = $\perp$, alors v($\neg$A) = $\top$ et v($\neg$($\neg$A)) = $\neg$\top$ = $\perp$ = v(A)\n\n**Application :** Cette loi permet de simplifier les formules en éliminant les doubles négations.",
  },
  {
    id: 16,
    question: "Qu'est-ce qu'une valuation en logique propositionnelle ?",
    options: [
      "Une attribution de valeurs booléennes aux variables propositionnelles",
      "Une formule logique complexe",
      "Un connecteur logique",
      "Un modèle de système de preuve",
    ],
    answer: 0,
    explanation:
      "Une **valuation** (ou **interprétation**) est une fonction v : Var $\to$ {$\top$, $\perp$}.\n\n**Rôle :** Elle assigne une valeur booléenne (vrai ou faux) à chaque variable propositionnelle.\n\n**Extension compositionnelle :** Cette fonction s'étend aux formules complexes selon les tables de vérité des connecteurs.\n\n**Exemple :** v(A $\wedge$ B) = v(A) $\wedge$ v(B)\n\n**Espace des valuations :** Pour n variables, il existe 2ⁿ valuations possibles, formant la base de la sémantique propositionnelle.",
  },
  {
    id: 17,
    question: "Le système de Hilbert en logique sert à :",
    options: [
      "Formaliser la preuve logique avec des axiomes et règles d'inférence",
      "Construire des tables de vérité",
      "Calculer des formes normales conjonctives",
      "Mesurer la profondeur d'un arbre syntaxique",
    ],
    answer: 0,
    explanation:
      "Le **système de Hilbert** est un **système de preuve axiomatique** qui formalise le raisonnement logique.\n\n**Composants :**\n• Un ensemble fini d'**axiomes** (formules considérées comme vraies)\n• Des **règles d'inférence** (comme le modus ponens : de A et A $\Rightarrow$ B, dériver B)\n\n**Structure d'une preuve :** Une séquence finie de formules, chacune étant soit un axiome, soit dérivée des précédentes par une règle.\n\n**Objectif :** Caractériser syntaxiquement les tautologies comme théorèmes prouvables.",
  },
  {
    id: 18,
    question: "Une table de vérité pour A ⇒ B contient combien de lignes ?",
    options: ["4 lignes", "2 lignes", "8 lignes", "6 lignes"],
    answer: 0,
    explanation:
      "Pour une formule avec n variables propositionnelles distinctes, la table de vérité contient 2ⁿ lignes.\n\n**Calcul pour A $\Rightarrow$ B :**\nLa formule contient 2 variables (A et B), donc 2² = 4 lignes.\n\n**Les 4 valuations :**\n• (A=$\top$, B=$\top$)\n• (A=$\top$, B=$\perp$)\n• (A=$\perp$, B=$\top$)\n• (A=$\perp$, B=$\perp$)\n\n**Résultat :** La table de vérité de l'implication montre qu'elle n'est fausse que dans le cas (A=$\top$, B=$\perp$).",
  },
  {
    id: 19,
    question: "Quel est l'objectif principal d'un SAT-solver ?",
    options: [
      "Trouver une valuation qui satisfait la formule donnée",
      "Démontrer qu'une formule est une tautologie",
      "Prouver qu'une formule est une contradiction",
      "Calculer l'arbre syntaxique d'une formule",
    ],
    answer: 0,
    explanation:
      "Un **SAT-solver** résout le problème SAT : étant donnée une formule propositionnelle $\phi$, déterminer s'il existe une valuation v telle que v($\phi$) = $\top$.\n\n**Deux cas possibles :**\n• Si une telle valuation existe $\to$ le solver la retourne (formule **satisfiable**)\n• Sinon $\to$ il prouve que la formule est **insatisfiable**\n\n**Techniques modernes :**\n• DPLL (Davis-Putnam-Logemann-Loveland)\n• CDCL (Conflict-Driven Clause Learning)\n• Heuristiques de branchement sophistiquées\n\n**Performance :** Ces techniques explorent efficacement l'espace des valuations.",
  },
  {
    id: 20,
    question: "En logique du premier ordre, ∀x ∃y R(x, y) signifie :",
    options: [
      "Pour tout x, il existe un y tel que R(x, y) est vrai",
      "Il existe un x et un y tels que R(x, y) est vrai",
      "Pour tout y, il existe un x tel que R(x, y) est vrai",
      "R(x, y) est faux pour tout x et y",
    ],
    answer: 0,
    explanation:
      'La formule ∀x ∃y R(x, y) se lit : "**pour tout** x, **il existe** un y tel que R(x, y)".\n\n**Ordre crucial :** Le y peut dépendre du choix de x.\n\n**Formalisation :** Dans un domaine D, cela signifie : ∀x ∈ D, ∃y ∈ D : R(x, y)\n\n**Exemple concret :** Si R(x, y) signifie "y > x", alors la formule exprime que tout nombre a un successeur plus grand.\n\n**Attention :** ∃y ∀x R(x, y) aurait un sens complètement différent !',
  },
  {
    id: 21,
    question: "Une tautologie est nécessairement :",
    options: ["Valide", "Satisfiable", "Équivalente à ⊤ (vrai)", "Toutes les réponses précédentes"],
    answer: 3,
    explanation:
      "Une **tautologie** est une formule vraie sous toute valuation.\n\n**Elle possède donc toutes ces propriétés :**\n\n**(1) Valide :** vraie dans tout modèle\n\n**(2) Satisfiable :** possède au moins un modèle (en fait, tous les modèles)\n\n**(3) Équivalente à $\top$ :** sa valeur de vérité est constamment vraie\n\n**Notation formelle :** $\phi$ est une tautologie ssi ⊨ $\phi$ (conséquence logique de l'ensemble vide)\n\n**Statut :** Les tautologies représentent les vérités logiques universelles, indépendantes du contenu spécifique des propositions.",
  },
  {
    id: 22,
    question: "La formule ((A ⇒ B) ∧ (B ⇒ A)) équivaut à :",
    options: ["A ⇔ B (équivalence)", "A ∨ B", "A ∧ B", "A ⇒ B"],
    answer: 0,
    explanation:
      "La formule ((A $\Rightarrow$ B) $\wedge$ (B $\Rightarrow$ A)) définit l'**équivalence logique** A $\Leftrightarrow$ B.\n\n**Principe :** L'équivalence est vraie quand A et B ont la même valeur de vérité.\n\n**Vérification :**\n• Si A et B sont tous deux vrais ou tous deux faux $\to$ les deux implications sont vraies $\to$ leur conjonction aussi\n• Si A et B ont des valeurs différentes $\to$ au moins une des implications est fausse\n\n**Formalisation :** A $\Leftrightarrow$ B $\equiv$ (A $\Rightarrow$ B) $\wedge$ (B $\Rightarrow$ A) $\equiv$ ($\neg$A $\vee$ B) $\wedge$ ($\neg$B $\vee$ A)",
  },
  {
    id: 23,
    question: "Une formule en DNF (Forme Normale Disjonctive) est structurée comme :",
    options: [
      "OU de ET de littéraux",
      "ET de OU de littéraux",
      "OU de littéraux uniquement",
      "ET de littéraux uniquement",
    ],
    answer: 0,
    explanation:
      "La **Forme Normale Disjonctive (DNF)** a la structure : **disjonction** ($\vee$) de **conjonctions** ($\wedge$) de **littéraux**.\n\n**Définition d'un littéral :** Une variable ou sa négation.\n\n**Formalisation :** ⋁ᵢ₌₁ⁿ ⋀ⱼ₌₁ᵐⁱ ℓᵢ,ⱼ où chaque ℓᵢ,ⱼ est un littéral\n\n**Exemple :** (A $\wedge \neg$B) $\vee$ ($\neg$A $\wedge$ C) $\vee$ (B $\wedge$ C)\n\n**Interprétation :** La DNF représente explicitement tous les cas où la formule est vraie - chaque terme de la disjonction correspond à une combinaison de valeurs rendant la formule vraie.",
  },
  {
    id: 24,
    question: "En déduction naturelle, la règle $[\\wedge\\text{I}]$ permet de :",
    options: [
      "Introduire une conjonction",
      "Éliminer une conjonction",
      "Introduire une disjonction",
      "Éliminer une disjonction",
    ],
    answer: 0,
    explanation:
      "La règle $[\\wedge\\text{I}]$ (**introduction de la conjonction**) permet de former une conjonction à partir de ses deux composants.\n\n**Règle formelle :** De A et B, on peut dériver A $\wedge$ B\n\n**Principe :** Si on a prouvé A et prouvé B séparément, alors on peut conclure A $\wedge$ B.\n\n**Intuition :** Pour établir \"A et B\", il faut établir A d'une part et B d'autre part.\n\n**Statut :** C'est l'une des règles fondamentales de la déduction naturelle de Gentzen.",
  },
  {
    id: 25,
    question: "Quelle règle élimine une implication en déduction naturelle ?",
    options: ["$[\\Rightarrow\\text{E}]$ (Modus Ponens)", "$[\\Rightarrow\\text{I}]$", "$[\\vee\\text{I}]$", "$[\\neg\\text{I}]$"],
    answer: 0,
    explanation:
      "La règle $[\\Rightarrow\\text{E}]$ (**élimination de l'implication**), aussi appelée **Modus Ponens**, permet d'utiliser une implication.\n\n**Règle formelle :** De A $\Rightarrow$ B et A, on peut dériver B\n\n**Condition :** Si on a prouvé A $\Rightarrow$ B et prouvé A, alors on peut conclure B.\n\n**Principe fondamental :** \"Si A implique B et que A est vrai, alors B est vrai\"\n\n**Importance :** C'est l'une des règles d'inférence les plus utilisées en logique.",
  },
  {
    id: 26,
    question: "Un arbre de preuve est dit terminé quand :",
    options: [
      "Toutes ses branches sont fermées",
      "Il est de hauteur infinie",
      "Il contient exactement un nœud",
      "Il représente un arbre syntaxique",
    ],
    answer: 0,
    explanation:
      "En **méthode des tableaux sémantiques**, un arbre de preuve est **terminé** quand toutes ses branches sont **fermées**.\n\n**Définition d'une branche fermée :** Elle contient une contradiction (par exemple, A et $\neg$A).\n\n**Interprétation :**\n• Arbre terminé avec toutes les branches fermées $\to$ prouve que la formule initiale est insatisfiable\n• Au moins une branche reste ouverte $\to$ elle fournit un modèle de la formule\n\n**Origine :** Cette méthode, due à Beth et Hintikka, est une procédure de décision pour la logique propositionnelle.",
  },
  {
    id: 27,
    question: "La négation de ∀x P(x) est :",
    options: ["∃x ¬P(x)", "∀x ¬P(x)", "¬∃x P(x)", "∃x P(x)"],
    answer: 0,
    explanation:
      'La **négation des quantificateurs** suit les lois de De Morgan généralisées :\n\n**Règle principale :** ¬∀x P(x) ≡ ∃x ¬P(x)\n\n**Intuition :** "Il n\'est pas vrai que tous les x vérifient P" équivaut à "il existe au moins un x qui ne vérifie pas P".\n\n**Règle duale :** ¬∃x P(x) ≡ ∀x ¬P(x)\n\n**Application :** Ces équivalences permettent de pousser les négations vers l\'intérieur des formules du premier ordre, étape cruciale dans la transformation en formes normales prénexes.',
  },
  {
    id: 28,
    question: "Un séquent Γ ⊢ φ signifie :",
    options: [
      "Avec les hypothèses Γ, on peut prouver φ",
      "φ est un modèle de Γ",
      "φ implique logiquement Γ",
      "Γ et φ sont logiquement équivalents",
    ],
    answer: 0,
    explanation:
      "Un **séquent** $\Gamma$ ⊢ $\phi$ exprime que la formule $\phi$ est **dérivable** (prouvable) à partir de l'ensemble d'hypothèses $\Gamma$.\n\n**Symbole ⊢ :** Représente la **relation de dérivabilité syntaxique**\n\n**Signification :** Il existe une preuve formelle de $\phi$ utilisant les formules de $\Gamma$ comme prémisses et les règles du système de preuve.\n\n**Liens sémantique-syntaxe :**\n• **Correction :** $\Gamma$ ⊢ $\phi$ implique $\Gamma$ ⊨ $\phi$ (conséquence sémantique)\n• **Complétude :** $\Gamma$ ⊨ $\phi$ implique $\Gamma$ ⊢ $\phi$",
  },
  {
    id: 29,
    question: "Qu'est-ce qu'une clause en forme CNF ?",
    options: [
      "Une disjonction de littéraux",
      "Une conjonction de littéraux",
      "Une conjonction de clauses",
      "Un littéral isolé",
    ],
    answer: 0,
    explanation:
      "En **Forme Normale Conjonctive (CNF)**, une **clause** est une **disjonction de littéraux** :\n\n**Structure d'une clause :** ℓ₁ $\vee$ ℓ₂ $\vee$ ⋯ $\vee$ ℓₖ où chaque ℓᵢ est un littéral (variable ou sa négation)\n\n**Structure CNF complète :** Une **conjonction de clauses** : C₁ $\wedge$ C₂ $\wedge$ ⋯ $\wedge$ Cₙ\n\n**Exemple :** Dans (A $\vee \neg$B $\vee$ C) $\wedge$ ($\neg$A $\vee$ D), les clauses sont :\n• (A $\vee \neg$B $\vee$ C)\n• ($\neg$A $\vee$ D)\n\n**Avantage :** Cette structure est optimale pour les SAT-solvers basés sur la résolution.",
  },
  {
    id: 30,
    question: "Un système de preuve est dit complet si :",
    options: [
      "Tout séquent sémantiquement valide est syntaxiquement prouvable",
      "Tout séquent syntaxiquement prouvable est sémantiquement valide",
      "Toutes les formules sont des tautologies",
      "Aucune formule n'est insatisfiable",
    ],
    answer: 0,
    explanation:
      'La **complétude** d\'un système de preuve signifie que toute **conséquence sémantique** est **syntaxiquement dérivable** :\n\n**Définition formelle :** Si Γ ⊨ φ, alors Γ ⊢ φ\n\n**Interprétation :** Tout ce qui est "vrai" peut être "prouvé"\n\n**Théorème fondamental :** Le **théorème de complétude de Gödel** (1930) établit la complétude de la logique du premier ordre.\n\n**Conséquence :** Tout énoncé logiquement valide possède une preuve formelle.\n\n**Garantie :** Les systèmes de preuve capturent exactement les vérités logiques, sans "manquer" de théorèmes valides.',
  },
  {
    id: 31,
    question: "Un système de preuve est dit correct (ou sain) si :",
    options: [
      "Tout séquent syntaxiquement prouvable est sémantiquement valide",
      "Tout séquent sémantiquement valide est syntaxiquement prouvable",
      "Toutes les formules sont satisfiables",
      "Toutes les formules sont insatisfiables",
    ],
    answer: 0,
    explanation:
      'La **correction** (ou **solidité**) d\'un système de preuve signifie que toute **dérivation syntaxique** correspond à une **conséquence sémantique** :\n\n**Définition formelle :** Si Γ ⊢ φ, alors Γ ⊨ φ\n\n**Interprétation :** Tout ce qui est "prouvé" est "vrai"\n\n**Garantie :** Le système ne produit pas de "fausses preuves" - on ne peut pas dériver de conclusions invalides.\n\n**Méthode de preuve :** La correction se démontre généralement par induction sur la structure des preuves, en vérifiant que chaque règle d\'inférence préserve la validité sémantique.',
  },
  {
    id: 32,
    question: "En λ-calcul, le terme I = λx.x a pour type :",
    options: ["σ → σ (fonction identité)", "σ × τ (produit)", "σ ∨ τ (somme)", "σ → τ → σ (fonction constante)"],
    answer: 0,
    explanation:
      "Le **combinateur identité** I = $\lambda$x.x a pour type $\sigma \to \sigma$ pour tout type $\sigma$.\n\n**Polymorphisme :** C'est un **type polymorphe** - I peut être appliqué à un argument de n'importe quel type et retourne un résultat du même type.\n\n**Système de Hindley-Milner :** I : $\forall$\alpha$. $\alpha \to \alpha$\n\n**Sémantique :** I est la fonction identité : I(x) = x\n\n**Propriété algébrique :** C'est l'élément neutre de la composition de fonctions : f ∘ I = I ∘ f = f",
  },
  {
    id: 33,
    question: "Dans l'arbre syntaxique de (A ∧ B) ∨ (C ∧ D), la racine est :",
    options: ["∨ (disjonction)", "∧ (conjonction)", "A (variable)", "B (variable)"],
    answer: 0,
    explanation:
      "L'**arbre syntaxique** (ou **arbre de décomposition**) représente la structure hiérarchique d'une formule selon la priorité des connecteurs.\n\n**Pour (A $\wedge$ B) $\vee$ (C $\wedge$ D) :**\nLe **connecteur principal** est $\vee$ car il a la plus faible priorité et n'est pas parenthésé.\n\n**Structure de l'arbre :**\n• **Racine :** $\vee$\n• **Sous-arbre gauche :** (A $\wedge$ B) avec racine $\wedge$, feuilles A et B\n• **Sous-arbre droit :** (C $\wedge$ D) avec racine $\wedge$, feuilles C et D\n\n**Principe :** Le connecteur principal détermine la racine de l'arbre syntaxique.",
  },
  {
    id: 34,
    question: "Avec la valuation ν(A)=1, ν(B)=0, que vaut (A ∧ B) ?",
    options: ["0 (faux)", "1 (vrai)", "Indéterminé", "Impossible à calculer"],
    answer: 0,
    explanation:
      "Avec ν(A) = 1 (vrai) et ν(B) = 0 (faux), appliquons la **table de vérité de la conjonction** :\n\n**Calcul :** ν(A $\wedge$ B) = ν(A) $\wedge$ ν(B) = 1 $\wedge$ 0 = 0\n\n**Règle de la conjonction :** Elle n'est vraie que si **tous** ses opérandes sont vrais.\n\n**Ici :** Puisque B est faux, la conjonction A $\wedge$ B est fausse, indépendamment de la valeur de A.\n\n**Comportement \"court-circuit\" :** Dès qu'un opérande est faux, le résultat de l'opérateur ET est faux.",
  },
  {
    id: 35,
    question: "En λ-calcul, le combinateur K = λx.λy.x a pour type principal :",
    options: [
      "σ → τ → σ (fonction constante)",
      "σ → σ (fonction identité)",
      "σ × τ (produit cartésien)",
      "σ → τ (fonction simple)",
    ],
    answer: 0,
    explanation:
      "Le **combinateur K** (fonction constante) K = $\lambda$x.$\lambda$y.x a pour type $\sigma \to \tau \to \sigma$.\n\n**Comportement :** Il prend deux arguments de types possiblement différents et retourne le premier, ignorant le second.\n\n**Sémantique :** K(a)(b) = a pour tous a, b\n\n**Logique combinatoire :** K avec S = $\lambda$x.$\lambda$y.$\lambda$z.(xz)(yz) forme une base complète - toute fonction calculable peut s'exprimer avec K et S.\n\n**Type polymorphe complet :** $\forall$\alpha \beta$. $\alpha \to \beta \to \alpha$",
  },
  {
    id: 36,
    question: "La règle $[\\vee\\text{E}]$ (élimination de la disjonction) s'utilise pour :",
    options: [
      "Raisonner par cas sur une disjonction",
      "Introduire une disjonction",
      "Éliminer une conjonction",
      "Introduire une conjonction",
    ],
    answer: 0,
    explanation:
      "La règle $[\\vee\\text{E}]$ (**élimination de la disjonction**) formalise le **raisonnement par cas**.\n\n**Principe :** Si on a prouvé A $\vee$ B, et qu'on peut :\n• Dériver C en supposant A\n• Dériver C en supposant B\n\nAlors on peut conclure C.\n\n**Intuition :** \"Si A ou B est vrai, et que dans les deux cas on peut prouver C, alors C est vrai\"\n\n**Importance :** C'est essentiel pour exploiter les disjonctions en déduction naturelle.",
  },
  {
    id: 37,
    question: "Une antilogie est une formule qui est :",
    options: [
      "Jamais vraie (toujours fausse)",
      "Toujours vraie",
      "Parfois satisfiable",
      "En forme normale disjonctive",
    ],
    answer: 0,
    explanation:
      "Une **antilogie** (ou **contradiction**) est une formule qui est **fausse sous toute valuation**.\n\n**Définition formelle :** $\phi$ est une antilogie si $\forall$v : v($\phi$) = $\perp$, ou de manière équivalente, ⊨ $\neg$\phi$\n\n**Exemple classique :** A $\wedge \neg$A\n\n**Propriété :** Les antilogies sont **insatisfiables** - elles n'ont aucun modèle.\n\n**Principe sous-jacent :** En logique classique, le principe de non-contradiction garantit qu'aucune proposition ne peut être simultanément vraie et fausse.\n\n**Opposé :** C'est l'opposé d'une tautologie.",
  },
  {
    id: 38,
    question: "La loi de distributivité de ∨ sur ∧ s'écrit :",
    options: [
      "A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C)",
      "A ∨ (B ∨ C) ≡ (A ∨ B) ∧ (A ∨ C)",
      "A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C)",
      "(A ∧ B) ∨ C ≡ (A ∨ C) ∧ (B ∨ C)",
    ],
    answer: 0,
    explanation:
      'La **loi de distributivité** de ∨ sur ∧ s\'énonce :\n\n**Formule :** A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C)\n\n**Loi duale :** Distributivité de ∧ sur ∨ : A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C)\n\n**Principe :** Elle permet de "distribuer" une disjonction sur une conjonction.\n\n**Méthodes de preuve :** Table de vérité ou équivalences algébriques\n\n**Applications importantes :**\n• Conversion entre formes normales (CNF ↔ DNF)\n• Optimisation de circuits logiques',
  },
  {
    id: 39,
    question: "L'induction structurelle sert à :",
    options: [
      "Prouver une propriété sur tous les objets d'un ensemble défini inductivement",
      "Prouver une propriété pour une seule valuation",
      "Calculer une forme normale disjonctive",
      "Construire une table de vérité",
    ],
    answer: 0,
    explanation:
      "L'**induction structurelle** est une technique de preuve pour établir qu'une propriété P est vraie pour tous les éléments d'un **ensemble défini inductivement**.\n\n**Exemples d'ensembles inductifs :** Formules logiques, arbres, listes\n\n**Structure de la preuve :**\n\n**(1) Cas de base :** P est vraie pour les éléments atomiques\n\n**(2) Cas inductif :** Si P est vraie pour les composants, alors elle est vraie pour les objets construits à partir de ces composants\n\n**Exemple concret :** Pour prouver une propriété sur toutes les formules :\n• Traiter les variables (base)\n• Traiter les formules composées via les connecteurs (induction)",
  },
  {
    id: 40,
    question: "En déduction naturelle, la règle $[\\neg\\text{I}]$ sert à :",
    options: [
      "Introduire une négation par l'absurde",
      "Éliminer une négation",
      "Introduire une conjonction",
      "Éliminer une disjonction",
    ],
    answer: 0,
    explanation:
      "La règle $[\\neg\\text{I}]$ (**introduction de la négation**) formalise le **raisonnement par l'absurde**.\n\n**Principe :** Pour prouver $\neg$A, on suppose A et on dérive une contradiction ($\perp$)\n\n**Intuition :** \"Si supposer A mène à une contradiction, alors A doit être faux, donc ¬A est vrai\"\n\n**Puissance :** C'est l'une des règles les plus puissantes de la logique classique.\n\n**Avantage :** Elle permet de prouver des négations sans avoir à les établir directement.",
  },
  {
    id: 41,
    question: "La commutativité de ∧ (conjonction) signifie que :",
    options: ["A ∧ B ≡ B ∧ A", "A ∧ B ≡ A ∨ B", "A ∧ B ≡ (A ⇒ B)", "A ∧ B ≡ (B ⇒ A)"],
    answer: 0,
    explanation:
      "La **commutativité** de la conjonction établit que A $\wedge$ B $\equiv$ B $\wedge$ A.\n\n**Principe :** L'ordre des opérandes n'affecte pas le résultat.\n\n**Vérification :** Pour toute valuation v :\nv(A $\wedge$ B) = v(A) $\wedge$ v(B) = v(B) $\wedge$ v(A) = v(B $\wedge$ A)\n\nCar l'opération booléenne $\wedge$ est commutative.\n\n**Avec l'associativité :** (A $\wedge$ B) $\wedge$ C $\equiv$ A $\wedge$ (B $\wedge$ C)\n\n**Conséquence :** Ces propriétés permettent de réorganiser librement les termes d'une conjonction multiple.",
  },
  {
    id: 42,
    question: "L'ordre de priorité correct des connecteurs logiques est :",
    options: ["¬ > ∧ > ∨ > ⇒ > ⇔", "⇔ > ⇒ > ∧ > ∨ > ¬", "¬ > ∨ > ∧ > ⇒ > ⇔", "⇔ > ⇒ > ∨ > ∧ > ¬"],
    answer: 0,
    explanation:
      "L'**ordre de priorité** (ou **précédence**) des connecteurs logiques, du plus fort au plus faible :\n\n**1. $\neg$** (négation) - priorité maximale\n**2. $\wedge$** (conjonction)\n**3. $\vee$** (disjonction)\n**4. $\Rightarrow$** (implication)\n**5. $\Leftrightarrow$** (équivalence) - priorité minimale\n\n**Exemple de parsing :** $\neg$A $\wedge$ B $\vee$ C $\Rightarrow$ D se lit ((($\neg$A) $\wedge$ B) $\vee$ C) $\Rightarrow$ D\n\n**Utilité :** Cette convention permet d'économiser les parenthèses tout en évitant les ambiguïtés syntaxiques.",
  },
  {
    id: 43,
    question: "Le λ-calcul non typé permet de représenter :",
    options: [
      "Toute fonction calculable (Turing-complet)",
      "Seulement les fonctions primitives récursives",
      "Uniquement les opérations de typage",
      "Seulement les preuves logiques",
    ],
    answer: 0,
    explanation:
      "Le **$\lambda$-calcul non typé** est **Turing-complet** : il peut exprimer toute fonction calculable.\n\n**Équivalence fondamentale :** Cette équivalence avec les machines de Turing (thèse de Church-Turing) fait du $\lambda$-calcul un **modèle universel de calcul**.\n\n**Encodages possibles :**\n• Entiers (codage de Church)\n• Booléens\n• Listes\n• Récursion (combinateur de point fixe Y)\n\n**Paradoxe :** Cette expressivité totale rend le système **non fortement normalisant** - certains termes (comme $\Omega$ = ($\lambda$x.xx)($\lambda$x.xx)) ne terminent jamais leur évaluation.",
  },
  {
    id: 44,
    question: "Un terme fermé en λ-calcul est un terme :",
    options: [
      "Sans variables libres",
      "Avec des variables libres",
      "Constitué d'une seule variable",
      "Toujours insatisfiable",
    ],
    answer: 0,
    explanation:
      "Un **terme fermé** (ou **combinateur**) en $\lambda$-calcul est un terme **sans variables libres**.\n\n**Définition formelle :** FV(t) = $\emptyset$ où FV calcule les variables libres\n\n**Exemples :**\n• $\lambda$x.x (identité)\n• $\lambda$x.$\lambda$y.x (K)\n• $\lambda$x.$\lambda$y.$\lambda$z.(xz)(yz) (S)\n\n**Propriété :** Les termes fermés sont **auto-contenus** - leur signification ne dépend pas d'un environnement externe.\n\n**Correspondance :** Ils correspondent aux **programmes complets** en programmation fonctionnelle.",
  },
  {
    id: 45,
    question: "La transformation d'une formule en CNF utilise principalement :",
    options: [
      "Élimination des implications et lois de De Morgan",
      "Ajout d'implications supplémentaires",
      "Introduction de quantificateurs",
      "Conversion directe en DNF",
    ],
    answer: 0,
    explanation:
      "La **transformation en CNF** suit un algorithme systématique :\n\n**(1) Élimination des équivalences :**\nA $\Leftrightarrow$ B ↝ (A $\Rightarrow$ B) $\wedge$ (B $\Rightarrow$ A)\n\n**(2) Élimination des implications :**\nA $\Rightarrow$ B ↝ $\neg$A $\vee$ B\n\n**(3) Poussée des négations (De Morgan) :**\n• $\neg$(A $\wedge$ B) ↝ $\neg$A $\vee \neg$B\n• $\neg$(A $\vee$ B) ↝ $\neg$A $\wedge \neg$B\n\n**(4) Élimination des doubles négations :**\n$\neg$\neg$A ↝ A\n\n**(5) Distributivité :**\nPour obtenir la forme conjonctive finale",
  },
  {
    id: 46,
    question: "Le combinateur Θ (Theta) en λ-calcul est appelé :",
    options: [
      "Combinateur de point fixe",
      "Combinateur d'identité",
      "Combinateur de composition",
      "Fonction booléenne",
    ],
    answer: 0,
    explanation:
      "Le **combinateur Θ** (ou **combinateur de Turing**) est un **combinateur de point fixe**.\n\n**Propriété fondamentale :** Pour toute fonction f, Θf est un point fixe de f, c'est-à-dire f(Θf) = Θf\n\n**Rôle :** Il permet d'implémenter la **récursion** en $\lambda$-calcul\n\n**Définition possible :** Θ = ($\lambda$x.$\lambda$y.y(xxy))($\lambda$x.$\lambda$y.y(xxy))\n\n**Avec le combinateur Y :** Θ et le **combinateur Y** de Curry rendent le $\lambda$-calcul capable d'exprimer toutes les fonctions récursives.\n\n**Contribution :** Cela contribue à sa Turing-complétude.",
  },
  {
    id: 47,
    question: "Une substitution en λ-calcul consiste à :",
    options: [
      "Remplacer une variable par un terme",
      "Ajouter une variable libre",
      "Créer un arbre de preuve",
      "Calculer une forme normale conjonctive",
    ],
    answer: 0,
    explanation:
      "La **substitution** t[x := s] remplace toutes les occurrences libres de la variable x dans le terme t par le terme s.\n\n**Rôle fondamental :** C'est l'opération centrale de la **$\beta$-réduction** :\n($\lambda$x.t)s $\to$\beta$ t[x := s]\n\n**Précaution importante :** La substitution doit éviter la **capture de variables**\n\n**Capture de variables :** Si s contient des variables libres qui deviendraient liées après substitution, on doit renommer les variables liées de t ($\alpha$-conversion)\n\n**Exemple :** ($\lambda$x.x + y)[y := x] = $\lambda$z.z + x (renommage nécessaire)",
  },
  {
    id: 48,
    question: "La loi du tiers exclu (principe du milieu exclu) énonce que :",
    options: [
      "A ∨ ¬A est toujours vraie",
      "A ∧ ¬A est toujours vraie",
      "A ∨ A est toujours fausse",
      "A ∧ A est toujours fausse",
    ],
    answer: 0,
    explanation:
      "La **loi du tiers exclu** (latin : *tertium non datur*) affirme que A $\vee \neg$A est une **tautologie** pour toute proposition A.\n\n**Principe :** Il n'existe pas de \"troisième possibilité\" entre vrai et faux - toute proposition est soit vraie, soit fausse.\n\n**Statut en logique classique :** C'est un pilier de la **logique classique**\n\n**Rejet en logique intuitionniste :** Cette loi est rejetée en **logique intuitionniste**, où une proposition n'est vraie que si on peut la construire/prouver.\n\n**Conséquence :** Le rejet du tiers exclu mène à des mathématiques constructives différentes.",
  },
  {
    id: 49,
    question: "Le type du terme λx.λy.y en λ-calcul simplement typé est :",
    options: ["σ → τ → τ", "σ → τ → σ", "σ → σ", "τ → σ"],
    answer: 0,
    explanation:
      "Le terme $\lambda$x.$\lambda$y.y prend deux arguments et retourne le **second**.\n\n**Type :** $\sigma \to \tau \to \tau$\n\n**Comportement :** Il accepte un argument de type $\sigma$ (qu'il ignore), puis un argument de type $\tau$ (qu'il retourne)\n\n**Nom en logique combinatoire :** C'est le **combinateur KI** (\"faux\" en logique combinatoire)\n\n**Association à droite :** En notation currifiée, σ → τ → τ s'associe à droite : σ → (τ → τ)\n\n**Type polymorphe complet :** ∀α β. α → β → β",
  },
  {
    id: 50,
    question: "La propriété de réflexivité de l'équivalence logique (≡) s'énonce :",
    options: [
      "φ ≡ φ (toute formule est équivalente à elle-même)",
      "φ ≡ ψ (toute formule équivaut à une autre)",
      "φ ⇒ φ (toute formule s'implique)",
      "φ ⇔ ψ (équivalence matérielle)",
    ],
    answer: 0,
    explanation:
      "La **réflexivité** de l'équivalence logique établit que $\phi \equiv \phi$ : toute formule est **logiquement équivalente à elle-même**.\n\n**Avec les autres propriétés :**\n• **Symétrie :** $\phi \equiv \psi \Rightarrow \psi \equiv \phi$\n• **Transitivité :** $\phi \equiv \psi \wedge \psi \equiv \chi \Rightarrow \phi \equiv \chi$\n\n**Conséquence :** Ces trois propriétés font de $\equiv$ une **relation d'équivalence** sur l'ensemble des formules.\n\n**Évidence de la réflexivité :** $\phi$ et $\phi$ ont exactement les mêmes modèles, donc $\phi$ ⊨ $\psi$ et $\psi$ ⊨ $\phi$.",
  },
]

export const QUESTIONS: QCM[] = [
  ...EXISTING_QUESTIONS.map(q => ({ ...q, difficulty: (q as any).difficulty || "facile" as DifficultyLevel })),
  ...DEDUCTION_QUESTIONS.map(q => ({ ...q, id: q.id + 1000, difficulty: (q as any).difficulty || "moyen" as DifficultyLevel })),
  ...LAMBDA_CALCULUS_QUESTIONS.map(q => ({ id: q.id + 2000, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation, difficulty: q.points && q.points >= 3 ? "dur" : "moyen" as DifficultyLevel }))
]
