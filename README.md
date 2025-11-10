# Quiz Logique - Plateforme de Révision EPITA 🎓

Application web interactive de quiz multisujets pour la révision d'examens EPITA, avec support LaTeX avancé et interface moderne.

## 🚀 Fonctionnalités Principales

### 📚 **8 Sujets Disponibles** 
- **Logique Formelle** - Déduction naturelle, calcul propositionnel, logique du premier ordre
- **Lambda-Calcul** - Typage, réduction, combinateurs, programmation fonctionnelle  
- **Évaluation** - Analyse de programmes, complexité, algorithmes
- **Logique Avancée** - Systèmes de Hilbert, cohérence, complétude
- **Probabilités & Statistiques** - Variables aléatoires, distributions, tests d'hypothèses
- **Droit & Propriété Intellectuelle** - Copyright, licenses, droit d'auteur
- **Gestion des Risques** - ISO 27005, NIST CSF, cybersécurité
- **Questions Générales** - Concepts transversaux

### 🎯 **Système de Quiz Intelligent**
- Configuration flexible du nombre de questions (5-50)
- Trois modes de sélection : aléatoire, par difficulté, multi-difficultés
- Mélange automatique des questions et réponses
- Système de points avec pondération par difficulté
- Sauvegarde des résultats avec statistiques détaillées

### 🧮 **Rendu LaTeX Ultra-Avancé**
- **300+ macros LaTeX** prédéfinies pour tous les domaines mathématiques
- Support complet : ensembles, fonctions, opérateurs logiques, lettres grecques
- Gestion intelligente des erreurs avec affichage visuel
- Optimisé pour la logique formelle et le lambda-calcul
- Délimiteurs multiples : `$...$`, `\\(...\\)`, `\\[...\\]`, `$$...$$`

### 🎨 **Interface Utilisateur Moderne**
- Design sombre élégant avec fond bleu uniforme (`#1e293b`)
- Composants UI cohérents avec shadcn/ui
- Navigation intuitive et responsive
- Explications détaillées avec rendu LaTeX
- Aide contextuelle (règles de déduction, typage lambda)

### 📊 **Système d'Analyse Avancé**
- **447 questions** au total dans la base de données
- **84 questions avec LaTeX** (247 expressions mathématiques)
- Scripts d'analyse automatique de la syntaxe LaTeX
- Détection et correction des erreurs de rendu
- Statistiques détaillées par sujet et difficulté

## 🛠 Technologies

### **Frontend & Framework**
- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI avec hooks modernes
- **TypeScript 5** - Typage statique et sécurité du code

### **Styling & UI**
- **Tailwind CSS 3.4** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI réutilisables
- **Radix UI** - Primitives d'accessibilité
- **Lucide React** - Icônes modernes

### **LaTeX & Mathématiques**  
- **KaTeX 0.16** - Rendu rapide des formules mathématiques
- **Auto-render** - Conversion automatique du LaTeX
- **Macros personnalisées** - Support étendu pour tous les domaines

### **Outils de Développement**
- **ESLint** - Linting et qualité du code
- **PostCSS** - Traitement CSS avancé
- **Vercel Analytics** - Métriques d'utilisation

## 📦 Installation & Démarrage

### **🐳 Déploiement avec Docker (Recommandé)**
```bash
# Démarrage rapide avec Docker Compose
docker compose up -d

# L'application sera accessible sur http://localhost:3000
```

Voir [DOCKER.md](DOCKER.md) pour plus de détails sur le déploiement Docker.

### **Prérequis (Installation locale)**
- Node.js 18+ 
- pnpm (recommandé) ou npm

### **Installation Locale**
```bash
# Cloner le repository
git clone <repository-url>
cd quiz-logique

# Installer les dépendances
pnpm install

# Démarrer en mode développement
pnpm dev

# Build pour la production
pnpm build
pnpm start
```

### **Scripts Utiles**
```bash
# Analyser la syntaxe LaTeX
node scripts/test-latex.js

# Corriger automatiquement le LaTeX
node scripts/fix-latex.js

# Linting du code
pnpm lint
```

## 🎯 Usage

### **Démarrage Rapide**
1. Accédez à `http://localhost:3000`
2. Sélectionnez un sujet d'étude
3. Configurez votre quiz (nombre de questions, difficulté)
4. Commencez le quiz et répondez aux questions
5. Consultez vos résultats et explications détaillées

### **Navigation**
- **Page d'accueil** - Sélection des sujets
- **Configuration** - Paramétrage du quiz
- **Session de Quiz** - Interface de réponse
- **Résultats** - Score et analyses détaillées
- **Aide** - Règles de déduction et guides de typage

### **Notation LaTeX Supportée**
```latex
# Formules inline
$\forall x \exists y P(x,y)$

# Formules en bloc  
$$\frac{\Gamma \vdash A \quad \Gamma \vdash B}{\Gamma \vdash A \land B}$$

# Lambda-calcul
$\lambda x. \lambda y. x$

# Types
$\sigma \to \tau$

# Logique
$A \Rightarrow B \equiv \neg A \vee B$
```

## 🏗 Architecture

### **Structure des Dossiers**
```
quiz-logique/
├── app/                    # Pages Next.js (App Router)
│   ├── [subject]/         # Pages dynamiques par sujet
│   ├── globals.css        # Styles globaux
│   └── layout.tsx         # Layout principal
├── components/            # Composants React
│   ├── common/           # Composants partagés
│   ├── ui/               # Composants UI shadcn
│   ├── KatexRenderer.tsx # Rendu LaTeX avancé
│   ├── QuizSession.tsx   # Logique principale du quiz
│   └── ...
├── lib/                  # Données et utilitaires
│   ├── questions.ts      # Questions générales
│   ├── *-questions.ts    # Questions spécialisées
│   ├── subjects.ts       # Configuration des sujets
│   └── utils.ts          # Fonctions utilitaires
├── hooks/               # Hooks React personnalisés
├── scripts/             # Scripts d'analyse et maintenance
│   ├── test-latex.js    # Vérification LaTeX
│   └── fix-latex.js     # Correction automatique
└── public/              # Assets statiques
```

### **Composants Clés**

#### **KatexRenderer** 
Composant ultra-avancé pour le rendu LaTeX avec :
- 300+ macros mathématiques prédéfinies
- Gestion d'erreurs intelligente
- Support des environnements d'équations
- Optimisations de performance

#### **QuizSession**
Gestionnaire principal du quiz avec :
- État global du quiz et navigation
- Gestion des réponses et scoring
- Sauvegarde automatique des progrès
- Interface adaptative

#### **SubjectSelection** 
Sélecteur de sujets avec :
- Cartes visuelles par matière
- Descriptions et métadonnées
- Navigation fluide

## 📊 Statistiques du Projet

### **Base de Données**
- **447 questions** au total
- **8 sujets** spécialisés  
- **84 questions avec LaTeX** (19% du total)
- **247 expressions mathématiques** uniques
- **3 niveaux de difficulté** : Cours, Moyen, Difficile

### **Distribution par Sujet**
| Sujet | Questions | Avec LaTeX | Expressions |
|-------|-----------|------------|-------------|
| Logique Avancée | 14 | 11 | 72 |
| Probabilités | 135 | 28 | 52 |
| Questions Générales | 69 | 22 | 50 |
| Évaluation | 19 | 12 | 46 |
| Lambda-Calcul | 74 | 5 | 21 |
| Déduction | 34 | 6 | 6 |
| Droit | 51 | 0 | 0 |
| Gestion Risques | 51 | 0 | 0 |

### **Code Source**
- **84 fichiers** TypeScript/React
- **Architecture modulaire** avec séparation des responsabilités
- **Couverture de tests** via scripts d'analyse automatique
- **Code documenté** avec commentaires JSDoc

## 🤝 Contribution

### **Standards de Code**
- TypeScript strict activé
- Conventions ESLint respectées  
- Composants fonctionnels avec hooks
- Props typées avec interfaces

### **Ajout de Questions**
1. Éditer le fichier approprié dans `lib/*-questions.ts`
2. Respecter l'interface `QCM` ou `LambdaQuestion`
3. Tester la syntaxe LaTeX avec `node scripts/test-latex.js`
4. Vérifier le rendu dans l'interface

### **Développement LaTeX**
- Utiliser les macros prédéfinies dans `KatexRenderer.tsx`
- Éviter les doubles backslashes (`\\\\`)
- Tester avec différents délimiteurs
- Ajouter de nouvelles macros si nécessaire

## 📝 Licence

Projet éducatif EPITA - Usage académique uniquement.

## 🔗 Liens Utiles

- [KaTeX Documentation](https://katex.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

*Développé avec ❤️ pour la communauté EPITA*
