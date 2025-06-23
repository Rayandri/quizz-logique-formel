import { type QCM } from './questions'

export const COPYRIGHT_QUESTIONS: QCM[] = [
 {
 id: 5001,
 question: "Quelle est la condition essentielle pour la protection par le droit d'auteur ?",
 options: [
 "L'originalité",
 "La nouveauté",
 "L'enregistrement à l'INPI",
 "L'autorisation d'un éditeur"
 ],
 answer: 0,
 explanation: "La condition essentielle pour la protection par le droit d'auteur est l'originalité. L'œuvre doit porter l'empreinte de la personnalité de son auteur. Contrairement aux brevets, le droit d'auteur ne nécessite ni nouveauté absolue, ni enregistrement, ni autorisation d'un tiers.",
 difficulty: "cours"
 },
 {
 id: 5002,
 question: "Le code source d'un logiciel est-il protégé par le droit d'auteur ?",
 options: [
 "Oui",
 "Non",
 "Uniquement s'il est déposé",
 "Uniquement s'il est publié"
 ],
 answer: 0,
 explanation: "Le code source d'un logiciel est protégé par le droit d'auteur dès lors qu'il présente une originalité. Cette protection est automatique et ne nécessite ni dépôt ni publication.",
 difficulty: "cours"
 },
 {
 id: 5003,
 question: "L'algorithme d'un logiciel est-il protégé par le droit d'auteur ?",
 options: [
 "Oui",
 "Non",
 "Oui, s'il est innovant",
 "Oui, s'il est complexe"
 ],
 answer: 1,
 explanation: "L'algorithme en tant qu'idée abstraite n'est pas protégé par le droit d'auteur. Seule l'expression concrète de l'algorithme (le code source) peut l'être, pas l'idée ou le principe sous-jacent.",
 difficulty: "cours"
 },
 {
 id: 5004,
 question: "Qui est titulaire des droits sur un logiciel développé par un salarié dans l'exercice de ses fonctions ?",
 options: [
 "L'employeur",
 "Le salarié",
 "Le chef de projet",
 "Le client de l'entreprise"
 ],
 answer: 0,
 explanation: "L'employeur est titulaire des droits patrimoniaux sur un logiciel développé par un salarié dans l'exercice de ses fonctions ou d'après les instructions de l'employeur. Cette dévolution est automatique (article L113-9 CPI).",
 difficulty: "cours"
 },
 {
 id: 5005,
 question: "Un stagiaire développe un logiciel pendant son stage : à qui appartiennent les droits ?",
 options: [
 "Au stagiaire",
 "À l'entreprise",
 "Partagés",
 "À l'école"
 ],
 answer: 0,
 explanation: "Le stagiaire conserve les droits sur le logiciel qu'il développe car il n'existe pas de lien de subordination équivalent à celui du salarié. Une cession de droits expresse serait nécessaire pour transférer les droits à l'entreprise.",
 difficulty: "moyen"
 },
 {
 id: 5006,
 question: "Parmi les suivants, qu'est-ce qu'une œuvre de collaboration ?",
 options: [
 "Une œuvre créée par plusieurs auteurs en concertation",
 "Une œuvre nouvelle intégrant une œuvre préexistante",
 "Une œuvre éditée sous la direction d'une personne morale",
 "Un livre écrit par un seul auteur"
 ],
 answer: 0,
 explanation: "Une œuvre de collaboration est créée par plusieurs personnes physiques qui travaillent ensemble, en concertation, sans qu'il soit possible de distinguer la contribution de chacun (article L113-2 CPI).",
 difficulty: "cours"
 },
 {
 id: 5007,
 question: "Une œuvre composite est :",
 options: [
 "Une œuvre nouvelle intégrant une œuvre préexistante sans concertation",
 "Une œuvre coécrite par deux auteurs",
 "Un logiciel libre",
 "Un roman publié sous pseudonyme"
 ],
 answer: 0,
 explanation: "Une œuvre composite incorpore une œuvre préexistante sans la collaboration de l'auteur de cette dernière. L'auteur de l'œuvre composite est propriétaire du copyright sur l'œuvre nouvelle, sous réserve des droits de l'auteur de l'œuvre préexistante.",
 difficulty: "cours"
 },
 {
 id: 5008,
 question: "Pour qu'un contrat de cession de droits d'auteur soit valable, il doit :",
 options: [
 "Être écrit",
 "Être oral",
 "Être signé devant notaire",
 "Être publié au JO"
 ],
 answer: 0,
 explanation: "Un contrat de cession de droits d'auteur doit obligatoirement être écrit et préciser le domaine d'exploitation, l'étendue, la destination, le lieu et la durée de la cession (article L131-3 CPI).",
 difficulty: "cours"
 },
 {
 id: 5009,
 question: "Le droit moral est caractérisé par :",
 options: [
 "L'inaliénabilité et l'imprescriptibilité",
 "Sa cessibilité",
 "Sa durée limitée",
 "Sa transmissibilité par contrat"
 ],
 answer: 0,
 explanation: "Le droit moral est inaliénable (ne peut être cédé), imprescriptible (ne s'éteint pas avec le temps) et perpétuel. Il comprend le droit de divulgation, de paternité, de respect et de retrait.",
 difficulty: "cours"
 },
 {
 id: 5010,
 question: "La durée des droits patrimoniaux sur une œuvre classique est de :",
 options: [
 "Vie de l'auteur + 70 ans",
 "15 ans",
 "50 ans",
 "99 ans"
 ],
 answer: 0,
 explanation: "Les droits patrimoniaux durent pendant toute la vie de l'auteur et s'éteignent 70 ans après sa mort (article L123-1 CPI). Cette durée a été harmonisée au niveau européen.",
 difficulty: "cours"
 },
 {
 id: 5011,
 question: "Le droit de citation permet :",
 options: [
 "Une reprise brève et justifiée d'une œuvre",
 "La reproduction complète d'un livre",
 "La publication d'une œuvre anonyme",
 "L'adaptation d'une œuvre étrangère"
 ],
 answer: 0,
 explanation: "L'exception de citation permet de reproduire de courts extraits d'une œuvre, à condition que cette citation soit justifiée par le caractère critique, polémique, pédagogique, scientifique ou d'information de l'œuvre citante.",
 difficulty: "cours"
 },
 {
 id: 5012,
 question: "La parodie est :",
 options: [
 "Une exception au droit d'auteur",
 "Une forme de plagiat",
 "Une infraction",
 "Une cession de droits"
 ],
 answer: 0,
 explanation: "La parodie constitue une exception au droit d'auteur. Elle est libre à condition de ne pas créer de confusion avec l'œuvre originale et de respecter les lois du genre parodique.",
 difficulty: "moyen"
 },
 {
 id: 5013,
 question: "Peut-on protéger une idée par le droit d'auteur ?",
 options: [
 "Non",
 "Oui",
 "Oui, sous conditions",
 "Oui, si déposée"
 ],
 answer: 0,
 explanation: "Les idées ne sont pas protégées par le droit d'auteur. Seule la forme d'expression de l'idée peut l'être. C'est le principe fondamental de la distinction entre l'idée (libre) et la forme (protégeable).",
 difficulty: "cours"
 },
 {
 id: 5014,
 question: "Le droit sui generis sur une base de données protège :",
 options: [
 "L'investissement du producteur",
 "Les idées contenues",
 "La forme du code source",
 "Les utilisateurs"
 ],
 answer: 0,
 explanation: "Le droit sui generis protège l'investissement substantiel (financier, humain ou matériel) consenti par le producteur de la base de données pour obtenir, vérifier ou présenter le contenu.",
 difficulty: "moyen"
 },
 {
 id: 5015,
 question: "En cas de pluralité d'auteurs ayant travaillé ensemble, on parle d' :",
 options: [
 "Œuvre de collaboration",
 "Œuvre composite",
 "Œuvre collective",
 "Coproduction"
 ],
 answer: 0,
 explanation: "Lorsque plusieurs auteurs travaillent ensemble en concertation pour créer une œuvre indivisible, il s'agit d'une œuvre de collaboration. Les coauteurs sont copropriétaires de l'œuvre.",
 difficulty: "cours"
 },
 {
 id: 5016,
 question: "Le droit de divulgation appartient :",
 options: [
 "À l'auteur",
 "À l'éditeur",
 "Au producteur",
 "Au public"
 ],
 answer: 0,
 explanation: "Le droit de divulgation fait partie du droit moral et appartient exclusivement à l'auteur. Il s'agit du droit de décider si, quand et comment l'œuvre sera portée à la connaissance du public.",
 difficulty: "cours"
 },
 {
 id: 5017,
 question: "La licence GPL est caractérisée par :",
 options: [
 "Le copyleft fort",
 "Le copyleft faible",
 "L'absence de copyleft",
 "L'interdiction de modification"
 ],
 answer: 0,
 explanation: "La licence GPL (GNU General Public License) est une licence à copyleft fort : toute œuvre dérivée doit être distribuée sous la même licence GPL.",
 difficulty: "moyen"
 },
 {
 id: 5018,
 question: "La protection d'un logiciel par le droit d'auteur nécessite :",
 options: [
 "Sa création originale",
 "Son dépôt à la SACEM",
 "Un brevet",
 "Un enregistrement international"
 ],
 answer: 0,
 explanation: "Un logiciel est automatiquement protégé par le droit d'auteur dès lors qu'il est original. Aucun dépôt ni formalité n'est nécessaire.",
 difficulty: "cours"
 },
 {
 id: 5019,
 question: "L'auteur d'une œuvre collective est :",
 options: [
 "La personne morale ou physique sous le nom de laquelle l'œuvre est publiée",
 "Tous les contributeurs",
 "Le rédacteur en chef",
 "Le premier auteur chronologique"
 ],
 answer: 0,
 explanation: "Dans une œuvre collective, l'auteur est la personne physique ou morale sous le nom de laquelle l'œuvre est divulguée. Les contributeurs individuels conservent leurs droits sur leurs contributions identifiables.",
 difficulty: "moyen"
 },
 {
 id: 5020,
 question: "Une œuvre audiovisuelle créée sans concertation entre réalisateur et compositeur est :",
 options: [
 "Une œuvre composite",
 "Une œuvre de collaboration",
 "Une œuvre collective",
 "Une œuvre anonyme"
 ],
 answer: 0,
 explanation: "Si l'œuvre audiovisuelle incorpore une musique préexistante sans collaboration entre réalisateur et compositeur, il s'agit d'une œuvre composite.",
 difficulty: "dur"
 },
 {
 id: 5021,
 question: "La contrefaçon d'une œuvre peut entraîner :",
 options: [
 "Une condamnation civile et pénale",
 "La nullité de l'œuvre",
 "La perte des droits moraux",
 "L'absence de sanction"
 ],
 answer: 0,
 explanation: "La contrefaçon est sanctionnée à la fois civilement (dommages-intérêts) et pénalement (amende et emprisonnement). C'est un délit prévu par les articles L335-2 et suivants du CPI.",
 difficulty: "cours"
 },
 {
 id: 5022,
 question: "Une clause de cession de droits sans mention de durée est :",
 options: [
 "Valable seulement pour la durée légale",
 "Nulle",
 "Valable sans limite",
 "Limitée à 5 ans"
 ],
 answer: 0,
 explanation: "Une clause de cession sans mention de durée reste valable mais s'applique pour la durée légale maximale. Le contrat de cession doit obligatoirement mentionner la durée de la cession (article L131-3 CPI).",
 difficulty: "moyen"
 },
 {
 id: 5023,
 question: "Une œuvre créée par plusieurs personnes, sous la direction d'une société, et publiée sous son nom, est :",
 options: [
 "Une œuvre collective",
 "Une œuvre de collaboration",
 "Une œuvre composite",
 "Une œuvre dérivée"
 ],
 answer: 0,
 explanation: "Il s'agit d'une œuvre collective : créée à l'initiative d'une personne physique ou morale qui l'édite, la publie et la divulgue sous sa direction et son nom.",
 difficulty: "cours"
 },
 {
 id: 5024,
 question: "Les droits moraux sur un logiciel comprennent :",
 options: [
 "Le droit au nom et au respect",
 "Le droit de retrait complet",
 "Le droit de publication illimitée",
 "Le droit de modification par l'utilisateur"
 ],
 answer: 0,
 explanation: "Pour les logiciels, le droit moral est limité au droit de paternité (droit au nom) et au droit au respect de l'œuvre. Le droit de retrait ne peut compromettre l'exploitation du logiciel.",
 difficulty: "moyen"
 },
 {
 id: 5025,
 question: "Pour une base de données, le droit d'auteur protège :",
 options: [
 "L'originalité de la structure",
 "Le simple contenu brut",
 "Les idées",
 "L'inventeur du serveur"
 ],
 answer: 0,
 explanation: "Le droit d'auteur protège la structure de la base de données si elle est originale (choix, disposition ou expression). Le contenu en lui-même peut bénéficier de protections séparées.",
 difficulty: "moyen"
 },
 {
 id: 5026,
 question: "La protection par droit d'auteur naît :",
 options: [
 "Dès la création de l'œuvre",
 "Après dépôt",
 "Après publication",
 "Après paiement d'une taxe"
 ],
 answer: 0,
 explanation: "La protection par le droit d'auteur naît automatiquement dès la création de l'œuvre, sans formalité. Il suffit que l'œuvre soit fixée sur un support et soit originale.",
 difficulty: "cours"
 },
 {
 id: 5027,
 question: "Le droit de représentation permet :",
 options: [
 "La communication de l'œuvre au public",
 "La publication du nom de l'auteur",
 "La modification du code source",
 "L'effacement de l'œuvre"
 ],
 answer: 0,
 explanation: "Le droit de représentation est le droit exclusif de communiquer l'œuvre au public par tout procédé (représentation, diffusion publique, mise à disposition, etc.).",
 difficulty: "cours"
 },
 {
 id: 5028,
 question: "L'auteur d'une adaptation sans autorisation est :",
 options: [
 "Contrefacteur",
 "Cessionnaire",
 "Producteur",
 "Éditeur"
 ],
 answer: 0,
 explanation: "Adapter une œuvre sans l'autorisation de l'auteur constitue une contrefaçon, même si l'adaptation présente elle-même un caractère original.",
 difficulty: "cours"
 },
 {
 id: 5029,
 question: "Un apport postérieur sur une œuvre sans collaboration :",
 options: [
 "Crée une œuvre composite",
 "Crée une œuvre de collaboration",
 "Transfère les droits à l'éditeur",
 "Annule les droits antérieurs"
 ],
 answer: 0,
 explanation: "Lorsqu'un auteur incorpore une œuvre préexistante dans une œuvre nouvelle sans collaboration avec l'auteur original, il crée une œuvre composite.",
 difficulty: "moyen"
 },
 {
 id: 5030,
 question: "L'employeur d'un salarié développeur détient les droits patrimoniaux sur le logiciel si :",
 options: [
 "Le logiciel est créé dans l'exécution du contrat de travail",
 "Le salarié travaille chez lui",
 "Le logiciel est créé en dehors du temps de travail",
 "Le logiciel est acheté à un tiers"
 ],
 answer: 0,
 explanation: "L'article L113-9 du CPI prévoit que les droits patrimoniaux sur un logiciel appartiennent à l'employeur si le logiciel est créé par un salarié dans l'exercice de ses fonctions ou d'après les instructions de son employeur.",
 difficulty: "cours"
 },
 {
 id: 5031,
 question: "L'œuvre anonyme est protégée pour :",
 options: [
 "70 ans après publication",
 "70 ans après création",
 "50 ans après création",
 "99 ans après mort de l'auteur"
 ],
 answer: 0,
 explanation: "Pour les œuvres anonymes ou pseudonymes, la protection dure 70 ans à compter de la publication. Si l'identité de l'auteur est révélée, la protection redevient vie + 70 ans.",
 difficulty: "moyen"
 },
 {
 id: 5032,
 question: "L'auteur d'un logiciel peut-il s'opposer à toute modification de son code ?",
 options: [
 "Non, droit moral limité",
 "Oui, droit absolu",
 "Oui, toujours",
 "Oui, si salarié"
 ],
 answer: 0,
 explanation: "Pour les logiciels, le droit moral est aménagé : l'auteur ne peut faire obstacle à l'adaptation nécessaire à l'utilisation du logiciel conforme à sa destination.",
 difficulty: "moyen"
 },
 {
 id: 5033,
 question: "L'originalité, au sens du droit d'auteur, suppose :",
 options: [
 "L'empreinte de la personnalité de l'auteur",
 "La nouveauté absolue",
 "L'innovation technique",
 "L'utilité sociale"
 ],
 answer: 0,
 explanation: "L'originalité en droit d'auteur s'apprécie selon l'empreinte de la personnalité de l'auteur dans l'œuvre. Il ne s'agit pas de nouveauté absolue mais d'un apport créatif personnel.",
 difficulty: "cours"
 },
 {
 id: 5034,
 question: "L'exception pédagogique permet :",
 options: [
 "L'utilisation partielle d'œuvres pour l'enseignement",
 "La diffusion gratuite sur Internet",
 "La copie illimitée",
 "L'exploitation commerciale"
 ],
 answer: 0,
 explanation: "L'exception pédagogique autorise l'utilisation d'extraits d'œuvres à des fins exclusives d'illustration dans le cadre de l'enseignement et de la recherche, sous certaines conditions.",
 difficulty: "moyen"
 },
 {
 id: 5035,
 question: "L'exception de copie privée permet :",
 options: [
 "La reproduction pour usage strictement personnel",
 "La diffusion publique",
 "L'exploitation commerciale",
 "La reproduction industrielle"
 ],
 answer: 0,
 explanation: "L'exception de copie privée autorise la reproduction d'une œuvre strictement réservée à l'usage privé du copiste et non destinée à une utilisation collective.",
 difficulty: "cours"
 },
 {
 id: 5036,
 question: "La protection du producteur de base de données dure :",
 options: [
 "15 ans",
 "70 ans",
 "10 ans",
 "50 ans"
 ],
 answer: 0,
 explanation: "Le droit sui generis du producteur de base de données dure 15 ans à compter de l'achèvement de la base. Cette durée se renouvelle en cas d'investissement substantiel nouveau.",
 difficulty: "moyen"
 },
 {
 id: 5037,
 question: "En droit français, la cession de droits d'auteur doit :",
 options: [
 "Être écrite",
 "Être orale",
 "Être automatique",
 "Être notariée"
 ],
 answer: 0,
 explanation: "La cession de droits d'auteur doit être constatée par écrit et mentionner précisément les droits cédés, leur étendue, leur destination, le lieu et la durée d'exploitation.",
 difficulty: "cours"
 },
 {
 id: 5038,
 question: "La paternité est un droit :",
 options: [
 "Moral",
 "Patrimonial",
 "Commercial",
 "Administratif"
 ],
 answer: 0,
 explanation: "Le droit de paternité (droit au nom) fait partie du droit moral. Il permet à l'auteur d'exiger que son nom soit mentionné lors de toute utilisation de son œuvre.",
 difficulty: "cours"
 },
 {
 id: 5039,
 question: "La durée de protection du droit d'auteur commence :",
 options: [
 "Au décès de l'auteur",
 "À la publication",
 "À la création",
 "Au dépôt"
 ],
 answer: 2,
 explanation: "La protection commence dès la création de l'œuvre et dure toute la vie de l'auteur. C'est seulement après le décès que commence le décompte des 70 années post mortem.",
 difficulty: "cours"
 },
 {
 id: 5040,
 question: "En cas d'œuvre composite, la diffusion de l'œuvre nécessite :",
 options: [
 "L'autorisation de l'auteur de l'œuvre préexistante",
 "L'autorisation du public",
 "Aucune autorisation",
 "L'accord du premier auteur seulement"
 ],
 answer: 0,
 explanation: "Pour exploiter une œuvre composite, il faut l'autorisation de l'auteur de l'œuvre nouvelle ET de l'auteur de l'œuvre préexistante incorporée.",
 difficulty: "moyen"
 },
 {
 id: 5041,
 question: "La divulgation d'une œuvre appartient :",
 options: [
 "À l'auteur",
 "Au cessionnaire",
 "Au producteur",
 "À l'imprimeur"
 ],
 answer: 0,
 explanation: "Le droit de divulgation est un droit moral qui appartient exclusivement à l'auteur. Il détermine si, quand et comment l'œuvre sera communiquée au public pour la première fois.",
 difficulty: "cours"
 },
 {
 id: 5042,
 question: "Les DRM (mesures techniques de protection) :",
 options: [
 "Ne doivent pas empêcher la copie de sauvegarde",
 "Peuvent interdire toute copie",
 "Annulent les droits patrimoniaux",
 "Rendent l'œuvre libre de droits"
 ],
 answer: 0,
 explanation: "Les DRM ne peuvent faire obstacle aux exceptions légales comme la copie de sauvegarde pour les logiciels ou la copie privée, sous peine de sanctions.",
 difficulty: "dur"
 },
 {
 id: 5043,
 question: "Pour être logiciel libre, il faut :",
 options: [
 "Pouvoir utiliser, modifier, étudier, redistribuer",
 "Être gratuit",
 "Être sur Github",
 "Être breveté"
 ],
 answer: 0,
 explanation: "Un logiciel libre respecte les quatre libertés fondamentales : utiliser, étudier (accès au code source), modifier et redistribuer. La gratuité n'est pas obligatoire.",
 difficulty: "moyen"
 },
 {
 id: 5044,
 question: "Le droit de suite concerne :",
 options: [
 "Les œuvres graphiques et plastiques",
 "Les logiciels",
 "Les brevets",
 "Les bases de données"
 ],
 answer: 0,
 explanation: "Le droit de suite permet aux auteurs d'œuvres graphiques et plastiques de percevoir un pourcentage sur les reventes publiques de leurs œuvres originales.",
 difficulty: "dur"
 },
 {
 id: 5045,
 question: "Le producteur de base de données peut :",
 options: [
 "Interdire extraction et réutilisation substantielle",
 "Modifier la structure à volonté",
 "Supprimer les droits d'auteur",
 "Forcer la gratuité"
 ],
 answer: 0,
 explanation: "Le droit sui generis permet au producteur d'interdire l'extraction et/ou la réutilisation substantielle du contenu de sa base de données.",
 difficulty: "moyen"
 },
 {
 id: 5046,
 question: "L'auteur d'une œuvre audiovisuelle sans collaboration avec le compositeur :",
 options: [
 "Reste seul titulaire des droits sur le film",
 "Perd tous ses droits",
 "Devient coauteur automatiquement",
 "Cède ses droits au producteur"
 ],
 answer: 0,
 explanation: "Si une musique préexistante est incorporée dans un film sans collaboration, le réalisateur reste auteur de l'œuvre audiovisuelle, sous réserve des droits du compositeur sur sa musique.",
 difficulty: "dur"
 },
 {
 id: 5047,
 question: "En France, le dépôt auprès de l'INPI est :",
 options: [
 "Inutile pour l'œuvre de l'esprit",
 "Obligatoire",
 "Payant et obligatoire",
 "Valable pour la paternité"
 ],
 answer: 0,
 explanation: "Le droit d'auteur naît automatiquement de la création, sans formalité. L'INPI gère les brevets et marques, pas le droit d'auteur. Un dépôt peut servir de preuve d'antériorité mais n'est pas constitutif de droits.",
 difficulty: "cours"
 },
 {
 id: 5048,
 question: "La reproduction intégrale d'un livre pour usage personnel est :",
 options: [
 "Interdite",
 "Autorisée",
 "Obligatoire",
 "Nécessaire à la citation"
 ],
 answer: 0,
 explanation: "L'exception de copie privée ne permet que la reproduction partielle. La reproduction intégrale d'un livre, même pour usage personnel, constitue une contrefaçon.",
 difficulty: "moyen"
 },
 {
 id: 5049,
 question: "La protection du droit d'auteur :",
 options: [
 "Est automatique dès la création",
 "Nécessite un contrat",
 "Nécessite une déclaration à la SACEM",
 "Exige l'accord du public"
 ],
 answer: 0,
 explanation: "La protection par le droit d'auteur est automatique dès que l'œuvre est créée et fixée sur un support, sans aucune formalité requise.",
 difficulty: "cours"
 },
 {
 id: 5050,
 question: "En cas de contrefaçon, la victime peut obtenir :",
 options: [
 "Des dommages et intérêts",
 "Rien du tout",
 "La suppression du droit moral",
 "La reconnaissance automatique du public"
 ],
 answer: 0,
 explanation: "La victime de contrefaçon peut obtenir réparation du préjudice subi par l'attribution de dommages et intérêts, ainsi que la cessation de l'atteinte et la saisie-destruction des exemplaires contrefaisants.",
 difficulty: "cours"
 }
] 
