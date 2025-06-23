import { type QCM } from './questions'

export interface ProbabilityQCM extends Omit<QCM, 'answer'> {
  answer: number | string
  answerType: 'multiple' | 'numeric'
}

export const PROBABILITY_QUESTIONS: ProbabilityQCM[] = [
  {
    id: 7001,
    question: "La variance d'une variable aléatoire $X$ vaut :",
    options: [
      "$E(X^2) - [E(X)]^2$",
      "$E(X) - [E(X^2)]^2$",
      "$E(X)^2 - [E(X^2)]$",
      "$E([X-E(X)]^2)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "La variance peut se calculer de deux façons : $V(X) = E([X-E(X)]^2)$ (définition) ou $V(X) = E(X^2) - [E(X)]^2$ (formule de calcul rapide). Les deux réponses A et D sont correctes.",
    difficulty: "cours"
  },
  {
    id: 7002,
    question: "La somme de deux variables normales indépendantes suit :",
    options: [
      "Une loi exponentielle",
      "Une loi normale",
      "Une loi de Poisson",
      "Une loi uniforme"
    ],
    answer: 1,
    answerType: "multiple",
    explanation: "Si $X \\sim N(\\mu_1, \\sigma_1^2)$ et $Y \\sim N(\\mu_2, \\sigma_2^2)$ sont indépendantes, alors $X + Y \\sim N(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$. La somme de normales indépendantes est normale.",
    difficulty: "cours"
  },
  {
    id: 7003,
    question: "La fonction de répartition $F(x)$ est :",
    options: [
      "Toujours croissante",
      "Toujours constante",
      "Toujours décroissante",
      "Toujours négative"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "La fonction de répartition $F(x) = P(X \\leq x)$ est par définition croissante (non décroissante), car si $x_1 < x_2$, alors $P(X \\leq x_1) \\leq P(X \\leq x_2)$.",
    difficulty: "cours"
  },
  {
    id: 7004,
    question: "Espérance d'une variable géométrique de paramètre $p$ :",
    options: [
      "$\\frac{1}{p}$",
      "$p$",
      "$1-p$",
      "$\\frac{p}{1-p}$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi géométrique de paramètre $p$, l'espérance est $E(X) = \\frac{1}{p}$. C'est le nombre moyen d'essais nécessaires pour obtenir le premier succès.",
    difficulty: "cours"
  },
  {
    id: 7005,
    question: "Pour $X \\sim \\text{Poisson}(\\lambda)$, $E(X) =$",
    options: [
      "$\\lambda$",
      "$\\lambda^2$",
      "$\\frac{1}{\\lambda}$",
      "$0$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi de Poisson de paramètre $\\lambda$, l'espérance et la variance sont toutes deux égales à $\\lambda$ : $E(X) = V(X) = \\lambda$.",
    difficulty: "cours"
  },
  {
    id: 7006,
    question: "La variance d'une loi uniforme sur $[0,1]$ vaut :",
    options: [
      "$\\frac{1}{12}$",
      "$1$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{6}$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi uniforme sur $[a,b]$, la variance est $V(X) = \\frac{(b-a)^2}{12}$. Sur $[0,1]$, cela donne $V(X) = \\frac{1^2}{12} = \\frac{1}{12}$.",
    difficulty: "moyen"
  },
  {
    id: 7007,
    question: "La propriété 'sans mémoire' est satisfaite pour :",
    options: [
      "Loi exponentielle",
      "Loi normale",
      "Loi uniforme",
      "Loi binomiale"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "La propriété sans mémoire $P(X > s+t | X > s) = P(X > t)$ est caractéristique de la loi exponentielle (cas continu) et géométrique (cas discret).",
    difficulty: "moyen"
  },
  {
    id: 7008,
    question: "Fonction caractéristique d'une loi normale $N(0,1)$ :",
    options: [
      "$\\exp\\left(-\\frac{t^2}{2}\\right)$",
      "$\\exp\\left(it - \\frac{t^2}{2}\\right)$",
      "$\\exp\\left(-it - \\frac{t^2}{2}\\right)$",
      "$\\exp(it - t^2)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour $X \\sim N(0,1)$, la fonction caractéristique est $\\varphi_X(t) = E[e^{itX}] = \\exp\\left(-\\frac{t^2}{2}\\right)$. Pour $N(m,\\sigma^2)$, c'est $\\exp\\left(itm - \\frac{\\sigma^2 t^2}{2}\\right)$.",
    difficulty: "dur"
  },
  {
    id: 7009,
    question: "Estimateur MLE de $\\lambda$ pour l'exponentielle $(x_i > 0)$ :",
    options: [
      "$\\frac{n}{\\sum x_i}$",
      "$\\frac{\\sum x_i}{n}$",
      "$\\frac{n^2}{\\sum x_i}$",
      "$\\frac{n}{\\sum x_i^2}$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour la loi exponentielle de densité $f(x) = \\lambda e^{-\\lambda x}$, l'estimateur du maximum de vraisemblance de $\\lambda$ est $\\hat{\\lambda} = \\frac{n}{\\sum_{i=1}^n x_i} = \\frac{1}{\\bar{x}}$.",
    difficulty: "dur"
  },
  {
    id: 7010,
    question: "Si $X$ et $Y$ sont indépendantes, alors :",
    options: [
      "$E(XY) = E(X)E(Y)$",
      "$E(XY) = E(X+Y)$",
      "$V(X+Y) = V(X) + V(Y)$",
      "$\\text{Cov}(X,Y) = 0$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Si $X$ et $Y$ sont indépendantes : $E(XY) = E(X)E(Y)$, $V(X+Y) = V(X) + V(Y)$, et $\\text{Cov}(X,Y) = 0$. Seule la réponse B est fausse.",
    difficulty: "moyen"
  },
  {
    id: 7011,
    question: "Pour $X \\sim N(m, \\sigma^2)$, la densité $f(x)$ vaut :",
    options: [
      "$\\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left(-\\frac{(x-m)^2}{2\\sigma^2}\\right)$",
      "$\\frac{1}{\\sigma^2\\sqrt{\\pi}} \\exp\\left(-\\frac{(x-m)^2}{2\\sigma^2}\\right)$",
      "$\\frac{1}{\\sigma} \\exp\\left(-\\frac{|x-m|}{\\sigma}\\right)$",
      "$\\frac{1}{\\sqrt{2\\pi}} \\exp\\left(-\\frac{(x-m)^2}{2}\\right)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "La densité de la loi normale $N(m,\\sigma^2)$ est $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left(-\\frac{(x-m)^2}{2\\sigma^2}\\right)$. Attention à la constante de normalisation et à l'exposant.",
    difficulty: "cours"
  },
  {
    id: 7012,
    question: "Loi binomiale $(n,p)$, variance vaut :",
    options: [
      "$np(1-p)$",
      "$np$",
      "$n^2p$",
      "$np^2$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi binomiale $X \\sim B(n,p)$, l'espérance est $E(X) = np$ et la variance est $V(X) = np(1-p)$.",
    difficulty: "cours"
  },
  {
    id: 7013,
    question: "La loi de Poisson approxime la binomiale si :",
    options: [
      "$n$ grand, $p$ petit",
      "$n$ petit, $p$ grand",
      "$n = p$",
      "$p = 1$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "L'approximation de Poisson pour la binomiale s'applique quand $n$ est grand, $p$ est petit, et $np = \\lambda$ reste modéré. Alors $B(n,p) \\approx \\text{Poisson}(\\lambda)$.",
    difficulty: "moyen"
  },
  {
    id: 7014,
    question: "La somme de $k$ variables normales centrées réduites suit :",
    options: [
      "$N(0, k)$",
      "$N(0,1)$",
      "$\\chi^2(k)$",
      "$N(k,1)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Si $X_1, \\ldots, X_k \\sim N(0,1)$ indépendantes, alors $\\sum_{i=1}^k X_i \\sim N(0,k)$. Attention : la somme des carrés $\\sum_{i=1}^k X_i^2 \\sim \\chi^2(k)$.",
    difficulty: "moyen"
  },
  {
    id: 7015,
    question: "Loi exponentielle de paramètre $\\lambda$, $E(X) = ?$",
    options: [
      "$\\frac{1}{\\lambda}$",
      "$\\lambda$",
      "$\\lambda^2$",
      "$\\frac{1}{\\lambda^2}$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi exponentielle de paramètre $\\lambda$, l'espérance est $E(X) = \\frac{1}{\\lambda}$ et la variance est $V(X) = \\frac{1}{\\lambda^2}$.",
    difficulty: "cours"
  },
  {
    id: 7016,
    question: "Estimateur des moments pour $p$ dans une loi géométrique :",
    options: [
      "$\\frac{1}{\\text{moyenne}(X)}$",
      "$\\frac{1}{\\text{moyenne}(X) + 1}$",
      "$\\text{moyenne}(X)$",
      "$1 - \\text{moyenne}(X)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi géométrique, $E(X) = \\frac{1}{p}$, donc par la méthode des moments : $\\hat{p} = \\frac{1}{\\bar{X}}$ où $\\bar{X}$ est la moyenne empirique.",
    difficulty: "dur"
  },
  {
    id: 7017,
    question: "Loi uniforme sur $[a,b]$, espérance :",
    options: [
      "$\\frac{a + b}{2}$",
      "$a + b$",
      "$\\frac{b-a}{2}$",
      "$\\frac{b+a}{4}$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi uniforme sur $[a,b]$, l'espérance est $E(X) = \\frac{a+b}{2}$, c'est-à-dire le centre de l'intervalle.",
    difficulty: "cours"
  },
  {
    id: 7018,
    question: "$X \\sim \\text{Poisson}(\\lambda)$. Quelle est la variance ?",
    options: [
      "$\\lambda$",
      "$\\lambda^2$",
      "$\\frac{1}{\\lambda}$",
      "$0$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi de Poisson de paramètre $\\lambda$, la variance est égale à l'espérance : $V(X) = E(X) = \\lambda$.",
    difficulty: "cours"
  },
  {
    id: 7019,
    question: "Soit $Y = 3X + 2$, $X \\sim N(0,1)$, alors $Y$ suit :",
    options: [
      "$N(2,9)$",
      "$N(0,1)$",
      "$N(3,2)$",
      "$N(0,9)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Si $X \\sim N(\\mu, \\sigma^2)$ et $Y = aX + b$, alors $Y \\sim N(a\\mu + b, a^2\\sigma^2)$. Ici : $Y \\sim N(3 \\cdot 0 + 2, 3^2 \\cdot 1) = N(2,9)$.",
    difficulty: "moyen"
  },
  {
    id: 7020,
    question: "Si $\\text{Cov}(X,Y) = 0$ alors :",
    options: [
      "$X$ et $Y$ sont indépendantes",
      "$X$ et $Y$ peuvent être dépendantes",
      "$E(XY) = E(X)E(Y)$",
      "$V(X+Y) = V(X) + V(Y)$"
    ],
    answer: 1,
    answerType: "multiple",
    explanation: "Covariance nulle n'implique pas indépendance en général ! Cependant, $\\text{Cov}(X,Y) = 0$ implique $E(XY) = E(X)E(Y)$ et $V(X+Y) = V(X) + V(Y)$. L'indépendance n'est garantie que pour les vecteurs gaussiens.",
    difficulty: "dur"
  },
  {
    id: 7021,
    question: "Quel est le moment d'ordre 1 d'une variable $X$ ?",
    options: [
      "$E(X)$",
      "$E(X^2)$",
      "$V(X)$",
      "$E([X-E(X)]^2)$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Le moment d'ordre $k$ d'une variable $X$ est $E(X^k)$. Le moment d'ordre 1 est donc $E(X)$ (l'espérance).",
    difficulty: "cours"
  },
  {
    id: 7022,
    question: "$X \\sim \\text{Bernoulli}(p)$. $V(X) = ?$",
    options: [
      "$p(1-p)$",
      "$p$",
      "$1-p$",
      "$p^2$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi de Bernoulli de paramètre $p$, l'espérance est $E(X) = p$ et la variance est $V(X) = p(1-p)$.",
    difficulty: "cours"
  },
  {
    id: 7023,
    question: "Fonction de répartition $F(x)$ d'une exponentielle $\\lambda$ :",
    options: [
      "$1 - \\exp(-\\lambda x)$ pour $x \\geq 0$",
      "$\\exp(-\\lambda x)$ pour $x \\geq 0$",
      "$1 - \\exp(\\lambda x)$ pour $x \\geq 0$",
      "$\\exp(\\lambda x)$ pour $x \\geq 0$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi exponentielle de paramètre $\\lambda$, la fonction de répartition est $F(x) = 1 - e^{-\\lambda x}$ pour $x \\geq 0$ et $F(x) = 0$ pour $x < 0$. Ne pas confondre avec la fonction de survie $S(x) = e^{-\\lambda x}$.",
    difficulty: "cours"
  },
  {
    id: 7024,
    question: "Loi du Khi-Deux $\\chi^2(k)$, $E(X) = ?$",
    options: [
      "$k$",
      "$2k$",
      "$\\sqrt{k}$",
      "$k^2$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi du Khi-Deux à $k$ degrés de liberté, l'espérance est $E(X) = k$ et la variance est $V(X) = 2k$.",
    difficulty: "moyen"
  },
  {
    id: 7025,
    question: "Loi du Khi-Deux $\\chi^2(k)$, $V(X) = ?$",
    options: [
      "$2k$",
      "$k$",
      "$\\frac{k}{2}$",
      "$k^2$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour une loi du Khi-Deux à $k$ degrés de liberté, la variance est $V(X) = 2k$.",
    difficulty: "moyen"
  },
  {
    id: 7026,
    question: "Si $X$ suit une loi normale centrée réduite, alors $P(X \\leq 0)$ vaut :",
    options: [
      "$0.5$",
      "$1$",
      "$0$",
      "$0.25$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Par symétrie de la loi normale centrée réduite autour de 0, on a $P(X \\leq 0) = P(X \\geq 0) = 0.5$.",
    difficulty: "cours"
  },
  {
    id: 7027,
    question: "Loi géométrique, support :",
    options: [
      "$\\mathbb{N}^*$ (k ≥ 1)",
      "$\\mathbb{N}$ (k ≥ 0)",
      "$\\mathbb{Z}$",
      "$[0,1]$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "La loi géométrique modélise le nombre d'essais nécessaires pour obtenir le premier succès. Son support est donc $\\{1, 2, 3, \\ldots\\} = \\mathbb{N}^*$.",
    difficulty: "cours"
  },
  {
    id: 7028,
    question: "Vecteur gaussien $(X,Y)$, $\\text{Cov}(X,Y) = 0$. On peut conclure :",
    options: [
      "$X, Y$ indépendants",
      "$X, Y$ dépendants",
      "$X, Y$ indépendants seulement si gaussiens",
      "Aucune info"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "Pour un vecteur gaussien, covariance nulle implique indépendance. C'est une propriété spécifique aux lois gaussiennes multivariées.",
    difficulty: "dur"
  },
  {
    id: 7029,
    question: "Loi de Poisson, support :",
    options: [
      "$\\mathbb{N}$ (k ≥ 0)",
      "$\\mathbb{N}^*$",
      "$[0,\\infty[$",
      "$\\mathbb{Z}$"
    ],
    answer: 0,
    answerType: "multiple",
    explanation: "La loi de Poisson modélise le nombre d'événements dans un intervalle. Son support est $\\{0, 1, 2, \\ldots\\} = \\mathbb{N}$.",
    difficulty: "cours"
  },
  {
    id: 7030,
    question: "Combien vaut l'espérance d'une variable $X$ uniforme sur $[2, 6]$ ?",
    options: ["", "", "", ""],
    answer: "4",
    answerType: "numeric",
    explanation: "Pour une loi uniforme sur $[a,b]$, l'espérance est $E(X) = \\frac{a+b}{2}$. Ici : $E(X) = \\frac{2+6}{2} = 4$.",
    difficulty: "cours"
  }
]
