import { type QCM } from './questions'

export const APPLIED_COPYRIGHT_QUESTIONS: QCM[] = [
  {
    id: 6001,
    question: "Dans l'arrêt du 29 mars 2023, que reprochait M. [E] à la société Pause B films et Karus productions ?",
    options: [
      "De ne pas lui avoir versé de rémunération",
      "D'avoir diffusé une version modifiée de l'œuvre avec une autre bande sonore sans autorisation",
      "D'avoir supprimé son nom du générique",
      "D'avoir détruit l'œuvre originale"
    ],
    answer: 1,
    explanation: "Il reprochait la diffusion sans son autorisation d'une version avec une autre bande sonore.",
    difficulty: "moyen"
  },
  {
    id: 6002,
    question: "Qu'est-ce qu'une œuvre de collaboration selon le Code de la propriété intellectuelle ?",
    options: [
      "Une œuvre réalisée par un seul auteur",
      "Une œuvre dont la paternité est discutée",
      "Une œuvre à laquelle plusieurs personnes ont concouru ensemble",
      "Une œuvre commandée par une entreprise"
    ],
    answer: 2,
    explanation: "Article L113-2 : la collaboration implique plusieurs personnes travaillant ensemble.",
    difficulty: "cours"
  },
  {
    id: 6003,
    question: "Qu'est-ce qu'une œuvre composite ?",
    options: [
      "Une œuvre publiée sans le consentement de l'auteur",
      "Une œuvre nouvelle intégrant une œuvre préexistante sans collaboration de son auteur",
      "Une œuvre réalisée collectivement en entreprise",
      "Une œuvre anonyme"
    ],
    answer: 1,
    explanation: "Article L113-2 : œuvre nouvelle à laquelle une œuvre préexistante est incorporée sans collaboration.",
    difficulty: "cours"
  },
  {
    id: 6004,
    question: "Dans l'arrêt, pourquoi la Cour d'appel a-t-elle refusé la qualité de coauteur à M. [E] ?",
    options: [
      "Car il n'avait pas signé le contrat",
      "Car il n'avait pas participé à la conception de l'œuvre non sonorisée",
      "Car il avait refusé la rémunération",
      "Car il n'était pas professionnel"
    ],
    answer: 1,
    explanation: "Il avait travaillé seul, après la réalisation du film non sonorisé.",
    difficulty: "dur"
  },
  {
    id: 6005,
    question: "Selon l'article L.113-7 CPI, qui est présumé coauteur d'une œuvre audiovisuelle ?",
    options: [
      "L'auteur de la musique spécialement composée",
      "Le producteur",
      "Le réalisateur",
      "Le scénariste"
    ],
    answer: 0,
    explanation: "L.113-7 : l'auteur de la composition musicale spécialement réalisée.",
    difficulty: "cours"
  },
  {
    id: 6006,
    question: "Une œuvre audiovisuelle peut-elle être non sonorisée ?",
    options: [
      "Oui",
      "Non",
      "Uniquement pour la publicité",
      "Uniquement pour les documentaires"
    ],
    answer: 0,
    explanation: "La loi vise aussi les séquences animées d'images non sonorisées.",
    difficulty: "facile"
  },
  {
    id: 6007,
    question: "La Cour de cassation, dans l'arrêt, considère-t-elle la version non sonorisée comme l'œuvre définitive ?",
    options: [
      "Oui",
      "Non",
      "Seulement si le producteur l'exige",
      "Cela dépend du contrat"
    ],
    answer: 0,
    explanation: "La version non sonorisée était considérée comme définitive pour la commande.",
    difficulty: "dur"
  },
  {
    id: 6008,
    question: "Dans le cas d'une œuvre composite, à qui appartient l'œuvre résultante ?",
    options: [
      "Au premier auteur",
      "À l'auteur de l'œuvre composite",
      "Aux deux auteurs en indivision",
      "Au producteur"
    ],
    answer: 1,
    explanation: "L'auteur de l'œuvre composite en est propriétaire, sous réserve des droits du premier auteur.",
    difficulty: "moyen"
  },
  {
    id: 6009,
    question: "Pour être reconnu comme coauteur d'une œuvre audiovisuelle, il faut :",
    options: [
      "Travailler de façon indépendante",
      "Travailler en collaboration sur l'œuvre entière",
      "Être payé par le producteur",
      "Avoir un diplôme d'artiste"
    ],
    answer: 1,
    explanation: "La collaboration et la communauté d'inspiration sont nécessaires.",
    difficulty: "moyen"
  },
  {
    id: 6010,
    question: "Que faut-il prouver pour écarter la présomption de coauteur prévue à l'article L.113-7 ?",
    options: [
      "Que la musique a été achetée sur Internet",
      "Qu'il n'y a pas eu de collaboration lors de la création",
      "Que l'œuvre n'a pas été diffusée",
      "Que le producteur n'est pas d'accord"
    ],
    answer: 1,
    explanation: "La preuve du travail indépendant permet d'écarter la présomption.",
    difficulty: "dur"
  },
  {
    id: 6011,
    question: "Quel droit a invoqué M. [E] pour attaquer les sociétés ?",
    options: [
      "Droit à la rémunération",
      "Droit d'auteur (contrefaçon)",
      "Droit à l'image",
      "Droit moral seulement"
    ],
    answer: 1,
    explanation: "Il a agi en contrefaçon de droit d'auteur.",
    difficulty: "facile"
  },
  {
    id: 6012,
    question: "Dans l'affaire, la Cour a-t-elle retenu la contrefaçon ?",
    options: [
      "Oui",
      "Non",
      "Oui mais partiellement",
      "Cela dépend des preuves"
    ],
    answer: 1,
    explanation: "Elle rejette la demande de M. [E] car il n'est pas reconnu coauteur.",
    difficulty: "moyen"
  },
  {
    id: 6013,
    question: "Qu'est-ce qu'une œuvre collective ?",
    options: [
      "Une œuvre réalisée par plusieurs personnes avec direction et publication sous le nom d'une seule",
      "Une œuvre sans auteur identifié",
      "Une œuvre dont personne ne veut la paternité",
      "Une œuvre réalisée par des salariés"
    ],
    answer: 0,
    explanation: "L113-2 : l'œuvre collective est dirigée et publiée sous un seul nom.",
    difficulty: "cours"
  },
  {
    id: 6014,
    question: "Le droit moral comprend :",
    options: [
      "Le droit à la rémunération",
      "Le droit à la paternité",
      "Le droit de reproduction",
      "Le droit d'adaptation"
    ],
    answer: 1,
    explanation: "Le droit moral = droit à la paternité, divulgation, respect, retrait/repentir.",
    difficulty: "cours"
  },
  {
    id: 6015,
    question: "Dans le cas d'une œuvre composite, l'auteur de l'œuvre préexistante peut-il interdire toute modification ?",
    options: [
      "Oui",
      "Non, sauf accord contraire",
      "Uniquement en cas de préjudice",
      "Non, il ne garde aucun droit"
    ],
    answer: 1,
    explanation: "Il garde ses droits sur son œuvre, mais pas sur la nouvelle, sauf clause contraire.",
    difficulty: "moyen"
  },
  {
    id: 6016,
    question: "Le producteur d'une œuvre audiovisuelle est-il toujours propriétaire de l'œuvre ?",
    options: [
      "Oui",
      "Non",
      "Oui, uniquement si c'est une œuvre collective",
      "Oui, s'il paie tous les auteurs"
    ],
    answer: 1,
    explanation: "La titularité dépend du type d'œuvre et du contrat.",
    difficulty: "moyen"
  },
  {
    id: 6017,
    question: "Pour agir en contrefaçon, il faut :",
    options: [
      "Être propriétaire de l'œuvre ou titulaire d'un droit",
      "Être seulement salarié de la société",
      "Avoir un intérêt moral",
      "Avoir contribué financièrement"
    ],
    answer: 0,
    explanation: "Seul le titulaire du droit peut agir en contrefaçon.",
    difficulty: "facile"
  },
  {
    id: 6018,
    question: "L'absence de preuve de collaboration dans la création de la musique exclut la qualité de :",
    options: [
      "Compositeur",
      "Coauteur",
      "Producteur",
      "Interprète"
    ],
    answer: 1,
    explanation: "Il n'est pas coauteur si pas de collaboration.",
    difficulty: "moyen"
  },
  {
    id: 6019,
    question: "Selon la Cour, l'ajout d'une musique à une œuvre préexistante constitue :",
    options: [
      "Une œuvre collective",
      "Une œuvre de collaboration",
      "Une œuvre composite",
      "Un plagiat"
    ],
    answer: 2,
    explanation: "Il s'agit d'une œuvre composite si pas de collaboration.",
    difficulty: "dur"
  },
  {
    id: 6020,
    question: "Que signifie la notion de « commun accord » pour achever une œuvre audiovisuelle ?",
    options: [
      "L'accord du seul producteur",
      "L'accord du réalisateur et du producteur (ou coauteurs)",
      "L'accord des techniciens",
      "L'accord du public"
    ],
    answer: 1,
    explanation: "L'œuvre est réputée achevée par l'accord réalisateur/co-auteurs/producteur.",
    difficulty: "moyen"
  },
  {
    id: 6021,
    question: "L'œuvre commandée à un tiers appartient-elle automatiquement au commanditaire ?",
    options: [
      "Oui",
      "Non, sauf cession expresse des droits",
      "Oui, s'il paye",
      "Uniquement si mentionné au générique"
    ],
    answer: 1,
    explanation: "Il faut une cession écrite des droits patrimoniaux.",
    difficulty: "cours"
  },
  {
    id: 6022,
    question: "Pour une œuvre audiovisuelle, qui détient par défaut les droits moraux ?",
    options: [
      "Le producteur",
      "Les ayants droit du producteur",
      "Les auteurs (réalisateur, compositeur…)",
      "La société de production"
    ],
    answer: 2,
    explanation: "Le droit moral reste aux auteurs.",
    difficulty: "cours"
  },
  {
    id: 6023,
    question: "Si un compositeur est sollicité après la création du film, il est en principe :",
    options: [
      "Coauteur",
      "Auteur indépendant d'une œuvre incorporée",
      "Producteur",
      "Titulaire de droits voisins"
    ],
    answer: 1,
    explanation: "Il n'y a pas eu collaboration, il est indépendant.",
    difficulty: "dur"
  },
  {
    id: 6024,
    question: "L'incorporation d'une nouvelle bande sonore à une vidéo sans autorisation du compositeur initial :",
    options: [
      "Constitue toujours une contrefaçon",
      "N'est une contrefaçon que si la bande originale était protégée",
      "N'est pas une contrefaçon si l'auteur n'est pas coauteur",
      "Est tolérée par la loi"
    ],
    answer: 2,
    explanation: "Sauf droit sur l'œuvre entière, l'auteur de la musique n'a pas qualité.",
    difficulty: "dur"
  },
  {
    id: 6025,
    question: "La qualification d'œuvre de collaboration impose :",
    options: [
      "Un travail concerté",
      "Un travail en silo",
      "Un financement public",
      "Un travail postérieur à la création"
    ],
    answer: 0,
    explanation: "Il faut une collaboration réelle et une inspiration commune.",
    difficulty: "moyen"
  },
  {
    id: 6026,
    question: "Le fait d'intégrer une musique préexistante à un film crée une œuvre :",
    options: [
      "Collective",
      "Composite",
      "Originale",
      "Orpheline"
    ],
    answer: 1,
    explanation: "Œuvre composite si la musique n'est pas créée en collaboration.",
    difficulty: "moyen"
  },
  {
    id: 6027,
    question: "La protection par le droit d'auteur est subordonnée à :",
    options: [
      "Un dépôt à l'INPI",
      "La création de l'œuvre et son originalité",
      "La nationalité de l'auteur",
      "L'utilisation commerciale de l'œuvre"
    ],
    answer: 1,
    explanation: "La création et l'originalité suffisent pour la protection.",
    difficulty: "cours"
  },
  {
    id: 6028,
    question: "Un compositeur peut-il être coauteur s'il a créé la musique pour le film mais sans contact avec le réalisateur ?",
    options: [
      "Oui automatiquement",
      "Non, sauf preuve de collaboration",
      "Oui, si le producteur le souhaite",
      "Non, sauf si mentionné au générique"
    ],
    answer: 1,
    explanation: "Il faut une collaboration effective, pas seulement une commande.",
    difficulty: "dur"
  },
  {
    id: 6029,
    question: "La Cour de cassation écarte la présomption de coauteur de l'article L.113-7 si :",
    options: [
      "L'œuvre audiovisuelle est collective",
      "La collaboration n'est pas démontrée",
      "Le compositeur a cédé ses droits",
      "Le film n'a pas été diffusé"
    ],
    answer: 1,
    explanation: "Elle est écartée si pas de collaboration.",
    difficulty: "dur"
  },
  {
    id: 6030,
    question: "L'auteur d'une œuvre préexistante incorporée dans une œuvre composite :",
    options: [
      "Perd tous ses droits",
      "Garde ses droits sur l'œuvre initiale",
      "Garde des droits sur la nouvelle œuvre",
      "N'a droit à aucune rémunération"
    ],
    answer: 1,
    explanation: "Il garde ses droits sur sa contribution initiale.",
    difficulty: "moyen"
  },
  {
    id: 6031,
    question: "En droit d'auteur, la notion de \"commun accord\" vise :",
    options: [
      "Un accord tacite",
      "Un accord exprès entre tous les coauteurs et le producteur",
      "L'accord du public",
      "Un simple échange de mails"
    ],
    answer: 1,
    explanation: "L'œuvre audiovisuelle est achevée d'un commun accord.",
    difficulty: "moyen"
  },
  {
    id: 6032,
    question: "La contrefaçon suppose :",
    options: [
      "Une copie servile",
      "La reproduction sans autorisation d'éléments protégés",
      "La mention d'un nom d'auteur erroné",
      "L'utilisation de l'œuvre à des fins non commerciales"
    ],
    answer: 1,
    explanation: "Toute utilisation sans autorisation est une contrefaçon.",
    difficulty: "cours"
  },
  {
    id: 6033,
    question: "En France, la protection du droit d'auteur dure :",
    options: [
      "20 ans après la création",
      "50 ans après la mort de l'auteur",
      "70 ans après la mort de l'auteur",
      "100 ans après la publication"
    ],
    answer: 2,
    explanation: "70 ans après la mort de l'auteur (hors cas particuliers).",
    difficulty: "cours"
  },
  {
    id: 6034,
    question: "Le droit moral de l'auteur est :",
    options: [
      "Cessible",
      "Inaliénable",
      "Provisoire",
      "Transmissible à titre onéreux"
    ],
    answer: 1,
    explanation: "Inaliénable, perpétuel, imprescriptible.",
    difficulty: "cours"
  },
  {
    id: 6035,
    question: "Dans l'arrêt, le fait pour M. [E] d'avoir été sollicité après la création de l'œuvre initiale implique :",
    options: [
      "Sa reconnaissance automatique comme coauteur",
      "Son exclusion de la qualité de coauteur",
      "Un partage des droits",
      "La nullité de la commande"
    ],
    answer: 1,
    explanation: "Il a travaillé sur une œuvre déjà achevée, donc pas coauteur.",
    difficulty: "dur"
  },
  {
    id: 6036,
    question: "La jurisprudence considère une œuvre composite comme :",
    options: [
      "Un simple arrangement",
      "Une œuvre nouvelle intégrant une œuvre antérieure",
      "Un plagiat",
      "Une œuvre collective"
    ],
    answer: 1,
    explanation: "C'est une œuvre nouvelle résultant de l'incorporation.",
    difficulty: "moyen"
  },
  {
    id: 6037,
    question: "Pour qu'il y ait contrefaçon, il faut :",
    options: [
      "Une intention frauduleuse",
      "Une reproduction ou représentation illicite",
      "L'accord du producteur",
      "L'absence de collaboration"
    ],
    answer: 1,
    explanation: "L'utilisation non autorisée suffit, même sans intention frauduleuse.",
    difficulty: "facile"
  },
  {
    id: 6038,
    question: "La collaboration suppose :",
    options: [
      "Un travail successif",
      "Un travail commun et concerté",
      "Un travail de correction",
      "Un simple échange d'e-mails"
    ],
    answer: 1,
    explanation: "Travail concerté, inspiration commune.",
    difficulty: "cours"
  },
  {
    id: 6039,
    question: "La présomption de coauteur pour le compositeur s'applique :",
    options: [
      "Systématiquement",
      "Sauf preuve de travail indépendant",
      "Uniquement pour les films musicaux",
      "Uniquement si le compositeur est salarié"
    ],
    answer: 1,
    explanation: "Sauf preuve du contraire, il est présumé coauteur.",
    difficulty: "moyen"
  },
  {
    id: 6040,
    question: "En droit, le \"plagiat\" est :",
    options: [
      "Un type de contrefaçon",
      "Une notion morale sans sanction",
      "Une simple inspiration",
      "Un acte licite"
    ],
    answer: 0,
    explanation: "Le plagiat est une forme de contrefaçon.",
    difficulty: "facile"
  },
  {
    id: 6041,
    question: "En cas de désaccord entre coauteurs, qui tranche ?",
    options: [
      "Le producteur",
      "La juridiction civile",
      "La SACEM",
      "L'INPI"
    ],
    answer: 1,
    explanation: "La loi prévoit la compétence du juge civil.",
    difficulty: "moyen"
  },
  {
    id: 6042,
    question: "Le fait de nommer un compositeur dans le générique :",
    options: [
      "Lui confère automatiquement la qualité de coauteur",
      "N'a pas de conséquence juridique sans collaboration",
      "Lui accorde tous les droits",
      "L'empêche d'agir en contrefaçon"
    ],
    answer: 1,
    explanation: "Le générique n'est pas déterminant sans travail commun.",
    difficulty: "moyen"
  },
  {
    id: 6043,
    question: "L'article L.121-1 CPI pose le principe :",
    options: [
      "D'une protection sous condition de dépôt",
      "D'un droit de propriété du seul fait de la création",
      "D'une protection limitée aux œuvres commerciales",
      "D'un droit de propriété pour 50 ans"
    ],
    answer: 1,
    explanation: "L'auteur jouit du droit de propriété du seul fait de la création.",
    difficulty: "cours"
  },
  {
    id: 6044,
    question: "L'absence de formalité pour la protection signifie que :",
    options: [
      "Le dépôt à l'INPI est obligatoire",
      "Il n'y a aucune preuve à apporter",
      "La protection naît automatiquement à la création",
      "La protection est limitée à la France"
    ],
    answer: 2,
    explanation: "Protection automatique dès la création.",
    difficulty: "facile"
  },
  {
    id: 6045,
    question: "Le juge, pour reconnaître une œuvre de collaboration, recherche :",
    options: [
      "Le nombre d'auteurs",
      "La communauté d'inspiration et le travail concerté",
      "Le montant du contrat",
      "L'ancienneté des auteurs"
    ],
    answer: 1,
    explanation: "Il faut une communauté d'inspiration et une concertation.",
    difficulty: "moyen"
  },
  {
    id: 6046,
    question: "Une œuvre audiovisuelle non sonorisée :",
    options: [
      "Ne peut jamais être protégée",
      "Peut être une œuvre de l'esprit",
      "Est toujours une œuvre collective",
      "Est dans le domaine public"
    ],
    answer: 1,
    explanation: "La loi ne limite pas la protection aux œuvres sonorisées.",
    difficulty: "facile"
  },
  {
    id: 6047,
    question: "L'incorporation d'une œuvre sans collaboration de l'auteur originel crée :",
    options: [
      "Une œuvre collective",
      "Une œuvre composite",
      "Une œuvre de collaboration",
      "Un simple arrangement"
    ],
    answer: 1,
    explanation: "C'est le principe de l'œuvre composite.",
    difficulty: "cours"
  },
  {
    id: 6048,
    question: "Pour exploiter une œuvre commandée à un tiers, il faut :",
    options: [
      "Obtenir une cession expresse des droits",
      "Payer une redevance",
      "Mentionner l'auteur",
      "Publier l'œuvre"
    ],
    answer: 0,
    explanation: "Une cession écrite est obligatoire.",
    difficulty: "cours"
  },
  {
    id: 6049,
    question: "En cas de commande d'un film non sonorisé, l'auteur de la musique créée après coup :",
    options: [
      "Est coauteur",
      "Est compositeur indépendant",
      "Perd tous ses droits",
      "Peut interdire toute diffusion"
    ],
    answer: 1,
    explanation: "Il est auteur indépendant de la musique, pas de l'œuvre entière.",
    difficulty: "dur"
  },
  {
    id: 6050,
    question: "L'arrêt de la Cour de cassation du 29 mars 2023 rappelle que :",
    options: [
      "La collaboration doit être réelle pour la qualité de coauteur",
      "Toute incorporation confère la qualité de coauteur",
      "Le compositeur est toujours coauteur",
      "Le producteur est prioritaire sur tous les droits"
    ],
    answer: 0,
    explanation: "Seule une collaboration effective permet d'être reconnu coauteur.",
    difficulty: "dur"
  }
] 
