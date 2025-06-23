import { type QCM } from './questions'

export const RISK_MANAGEMENT_QUESTIONS: QCM[] = [
  {
    id: 6001,
    question: "Selon ISO 27005, un risque c'est :",
    options: [
      "L'effet de l'incertitude sur les objectifs",
      "Un danger",
      "Un incident",
      "Une menace"
    ],
    answer: 0,
    explanation: "C'est la définition officielle ISO 27005/31000. Le risque est défini comme l'effet de l'incertitude sur les objectifs de l'organisation.",
    difficulty: "cours"
  },
  {
    id: 6002,
    question: "Une vulnérabilité est :",
    options: [
      "Une faiblesse exploitable par une menace",
      "Un incident déjà produit",
      "Une erreur humaine",
      "Une panne réseau"
    ],
    answer: 0,
    explanation: "Une vulnérabilité est une faille ou faiblesse dans un système qui peut être exploitée par une menace pour causer un dommage.",
    difficulty: "cours"
  },
  {
    id: 6003,
    question: "Un incident, c'est :",
    options: [
      "La réalisation concrète d'un risque",
      "Une simple menace",
      "Une politique de sécurité",
      "Une norme"
    ],
    answer: 0,
    explanation: "Un incident est la matérialisation d'un risque, c'est-à-dire le dommage effectivement subi par l'organisation.",
    difficulty: "cours"
  },
  {
    id: 6004,
    question: "L'appétence au risque désigne :",
    options: [
      "Le niveau de risque accepté par l'organisation",
      "Le risque maximal théorique",
      "Le nombre d'incidents",
      "L'assurance souscrite"
    ],
    answer: 0,
    explanation: "L'appétence au risque correspond à la 'tolérance' au risque, c'est-à-dire le niveau de risque que l'organisation est prête à accepter.",
    difficulty: "cours"
  },
  {
    id: 6005,
    question: "La criticité d'un risque dépend :",
    options: [
      "De la combinaison impact × probabilité",
      "Du coût du matériel",
      "Du nombre d'actifs",
      "De la législation"
    ],
    answer: 0,
    explanation: "La criticité d'un risque se calcule en multipliant l'impact potentiel par la probabilité d'occurrence du risque.",
    difficulty: "cours"
  },
  {
    id: 6006,
    question: "Le 'risk owner' est :",
    options: [
      "Le responsable identifié du risque",
      "L'auditeur externe",
      "Le PDG",
      "Le client"
    ],
    answer: 0,
    explanation: "Le risk owner est la personne désignée pour piloter le traitement et le suivi d'un risque spécifique.",
    difficulty: "cours"
  },
  {
    id: 6007,
    question: "Une menace, c'est :",
    options: [
      "Une cause potentielle d'un incident",
      "Un patch",
      "Une sauvegarde",
      "Un contrôle"
    ],
    answer: 0,
    explanation: "Une menace est l'origine potentielle d'un dommage, une cause qui peut exploiter une vulnérabilité.",
    difficulty: "cours"
  },
  {
    id: 6008,
    question: "Un actif, dans la gestion du risque, c'est :",
    options: [
      "Tout ce qui a de la valeur pour l'organisation",
      "Un firewall",
      "Un virus",
      "Une faille"
    ],
    answer: 0,
    explanation: "Un actif est tout élément ayant de la valeur pour l'organisation et qui doit donc être protégé (données, systèmes, personnel, réputation, etc.).",
    difficulty: "cours"
  },
  {
    id: 6009,
    question: "'Éviter le risque', c'est :",
    options: [
      "Stopper ou ne pas lancer une activité à risque",
      "Installer un antivirus",
      "Acheter une assurance",
      "Accepter toutes les menaces"
    ],
    answer: 0,
    explanation: "Éviter le risque consiste à supprimer la source du risque en arrêtant ou en ne démarrant pas l'activité qui génère ce risque.",
    difficulty: "cours"
  },
  {
    id: 6010,
    question: "'Transférer le risque', c'est :",
    options: [
      "Recourir à l'assurance ou la sous-traitance",
      "Laisser le risque à l'équipe dev",
      "Éteindre un serveur",
      "Refuser le traitement"
    ],
    answer: 0,
    explanation: "Transférer le risque signifie rendre un tiers responsable du risque, typiquement via une assurance ou en sous-traitant l'activité à risque.",
    difficulty: "cours"
  },
  {
    id: 6011,
    question: "'Atténuer le risque' revient à :",
    options: [
      "Réduire probabilité ou impact via mesures",
      "Oublier le problème",
      "Mettre à jour la doc",
      "Demander un audit"
    ],
    answer: 0,
    explanation: "Atténuer le risque consiste à mettre en place des mesures pour réduire soit la probabilité d'occurrence, soit l'impact du risque à un niveau acceptable.",
    difficulty: "cours"
  },
  {
    id: 6012,
    question: "'Accepter le risque' c'est :",
    options: [
      "Décider de ne pas agir si coût > bénéfice",
      "Toujours tout corriger",
      "Ignorer le management",
      "Prendre une assurance"
    ],
    answer: 0,
    explanation: "Accepter le risque est une gestion rationnelle qui consiste à ne pas agir quand le coût des mesures dépasse les bénéfices attendus.",
    difficulty: "cours"
  },
  {
    id: 6013,
    question: "L'approche 'compliance' vise :",
    options: [
      "Respect des obligations légales/réglementaires",
      "La meilleure techno",
      "L'innovation",
      "L'économie de moyens"
    ],
    answer: 0,
    explanation: "La compliance (conformité) vise à respecter l'ensemble des obligations légales et réglementaires applicables à l'organisation.",
    difficulty: "cours"
  },
  {
    id: 6014,
    question: "PCA signifie :",
    options: [
      "Plan de Continuité d'Activité",
      "Poste de Contrôle Administratif",
      "Politique de Contrôle d'Accès",
      "Processus de Cyber Assurance"
    ],
    answer: 0,
    explanation: "Le PCA (Plan de Continuité d'Activité) est l'organisation mise en place pour maintenir les activités critiques pendant et après un incident.",
    difficulty: "cours"
  },
  {
    id: 6015,
    question: "PRA signifie :",
    options: [
      "Plan de Reprise d'Activité",
      "Protection des Ressources d'Accès",
      "Procédure de Rattrapage Administratif",
      "Prévention du Risque d'Achat"
    ],
    answer: 0,
    explanation: "Le PRA (Plan de Reprise d'Activité) est la stratégie post-crise pour relancer rapidement les activités après un incident majeur.",
    difficulty: "cours"
  },
  {
    id: 6016,
    question: "La matrice des risques sert à :",
    options: [
      "Visualiser criticité des risques",
      "Acheter du matériel",
      "Gérer l'audit",
      "Recruter"
    ],
    answer: 0,
    explanation: "La matrice des risques permet d'évaluer et de hiérarchiser les risques en visualisant leur criticité selon l'impact et la probabilité.",
    difficulty: "cours"
  },
  {
    id: 6017,
    question: "La norme ISO 31000 est :",
    options: [
      "Management global du risque",
      "Cybersécurité pure",
      "Risque financier",
      "Audit interne"
    ],
    answer: 0,
    explanation: "ISO 31000 fournit le cadre de référence pour toute gestion du risque, tous secteurs confondus.",
    difficulty: "cours"
  },
  {
    id: 6018,
    question: "La norme ISO 27005 porte sur :",
    options: [
      "Gestion du risque sécurité de l'information",
      "Comptabilité",
      "RH",
      "Physique"
    ],
    answer: 0,
    explanation: "ISO 27005 est spécialisée dans la gestion du risque en sécurité de l'information (IT/infosec/cyber).",
    difficulty: "cours"
  },
  {
    id: 6019,
    question: "NIST CSF veut dire :",
    options: [
      "Cybersecurity Framework",
      "Network Information System Table",
      "National Inventory of Security Threats",
      "None"
    ],
    answer: 0,
    explanation: "Le NIST CSF (Cybersecurity Framework) est le framework de cybersécurité américain devenu un standard de fait mondial.",
    difficulty: "cours"
  },
  {
    id: 6020,
    question: "Les fonctions du NIST CSF (2.0) sont :",
    options: [
      "Identify, Protect, Detect, Respond, Recover, Govern",
      "Control, Audit, React",
      "Innovate, Lead, Grow",
      "Anticipate, Accept, Avoid"
    ],
    answer: 0,
    explanation: "La structure officielle du NIST CSF 2.0 comprend 6 fonctions : Govern (nouveau), Identify, Protect, Detect, Respond, Recover.",
    difficulty: "moyen"
  },
  {
    id: 6021,
    question: "Une erreur humaine est :",
    options: [
      "Un risque interne",
      "Un bug logiciel",
      "Une menace externe",
      "Un impact financier"
    ],
    answer: 0,
    explanation: "Le facteur humain constitue un risque interne à l'organisation, source majeure d'incidents.",
    difficulty: "cours"
  },
  {
    id: 6022,
    question: "'Menace interne', exemple :",
    options: [
      "Collaborateur malveillant",
      "Orage",
      "Cyberattaque étrangère",
      "Bug Linux"
    ],
    answer: 0,
    explanation: "Une menace interne provient de l'intérieur de l'organisation, comme un employé malveillant (insider threat).",
    difficulty: "cours"
  },
  {
    id: 6023,
    question: "'Menace externe', exemple :",
    options: [
      "Ransomware",
      "Contrôle d'accès faible",
      "Patch oublié",
      "Redondance"
    ],
    answer: 0,
    explanation: "Une menace externe provient de l'extérieur de l'organisation, comme une cyberattaque par ransomware.",
    difficulty: "cours"
  },
  {
    id: 6024,
    question: "'Disponibilité' dans CIA :",
    options: [
      "Accès aux ressources quand besoin",
      "Cryptographie",
      "Surveillance",
      "Audit"
    ],
    answer: 0,
    explanation: "La Disponibilité (D dans CIA - Confidentialité, Intégrité, Disponibilité) garantit l'accès aux ressources quand nécessaire.",
    difficulty: "cours"
  },
  {
    id: 6025,
    question: "'Intégrité' dans CIA :",
    options: [
      "Non altération non autorisée des données",
      "Absence de bug",
      "Sensibilisation",
      "Isolement réseau"
    ],
    answer: 0,
    explanation: "L'Intégrité garantit la véracité et la fiabilité des données en empêchant leur altération non autorisée.",
    difficulty: "cours"
  },
  {
    id: 6026,
    question: "'Confidentialité' dans CIA :",
    options: [
      "Accès réservé à ceux autorisés",
      "Chiffrer tout",
      "Tolérance zéro",
      "Éviter la communication"
    ],
    answer: 0,
    explanation: "La Confidentialité empêche l'accès non autorisé aux informations sensibles.",
    difficulty: "cours"
  },
  {
    id: 6027,
    question: "La 'compliance' RGPD vise :",
    options: [
      "Protection des données personnelles",
      "Gestion financière",
      "Firewall",
      "Continuité de service"
    ],
    answer: 0,
    explanation: "Le RGPD (Règlement Général sur la Protection des Données) est le règlement européen de protection des données personnelles.",
    difficulty: "cours"
  },
  {
    id: 6028,
    question: "Les risques 'résiduels' doivent être :",
    options: [
      "Documentés et suivis",
      "Abandonnés",
      "Ni mesurés ni reportés",
      "Éradiqués systématiquement"
    ],
    answer: 0,
    explanation: "Les risques résiduels (qui subsistent après traitement) doivent être documentés et faire l'objet d'un suivi régulier.",
    difficulty: "moyen"
  },
  {
    id: 6029,
    question: "Un audit de sécurité sert à :",
    options: [
      "Vérifier conformité et niveau de sécurité",
      "Acheter un SIEM",
      "Faire un backup",
      "Mettre à jour Windows"
    ],
    answer: 0,
    explanation: "Un audit de sécurité établit un état des lieux pour mesurer la maturité et la conformité sécuritaire de l'organisation.",
    difficulty: "cours"
  },
  {
    id: 6030,
    question: "Un 'Plan d'amélioration continue' consiste à :",
    options: [
      "Réévaluer et améliorer régulièrement",
      "Acheter plus de firewalls",
      "Changer de RSSI",
      "Recruter en sécurité"
    ],
    answer: 0,
    explanation: "L'amélioration continue suit le cycle PDCA (Plan-Do-Check-Act) pour une réévaluation et amélioration permanente des processus.",
    difficulty: "moyen"
  },
  {
    id: 6031,
    question: "Une cartographie des risques permet :",
    options: [
      "Visualiser risques selon criticité",
      "Faire un inventaire du matériel",
      "Nommer les responsables",
      "Gérer les RH"
    ],
    answer: 0,
    explanation: "La cartographie des risques offre une synthèse visuelle sous forme de matrice colorée pour hiérarchiser les risques.",
    difficulty: "cours"
  },
  {
    id: 6032,
    question: "Un contrôle technique, c'est :",
    options: [
      "Firewall, chiffrement, VPN",
      "Charte informatique",
      "Procédure papier",
      "Audit humain"
    ],
    answer: 0,
    explanation: "Les contrôles techniques sont des solutions technologiques (firewall, chiffrement, VPN) pour réduire les risques.",
    difficulty: "cours"
  },
  {
    id: 6033,
    question: "Un contrôle organisationnel, c'est :",
    options: [
      "Procédures, chartes, sensibilisation",
      "RAID",
      "Clé USB",
      "Captcha"
    ],
    answer: 0,
    explanation: "Les contrôles organisationnels sont des mesures non-techniques : procédures, chartes, formations, sensibilisation.",
    difficulty: "cours"
  },
  {
    id: 6034,
    question: "La notion de 'cygne noir' désigne :",
    options: [
      "Un événement rare, imprévisible et à fort impact",
      "Un audit raté",
      "Une panne logicielle courante",
      "Un défaut de conformité"
    ],
    answer: 0,
    explanation: "Le 'cygne noir' (concept de Nassim Taleb) désigne un événement extrême, imprévisible et aux conséquences majeures en risk management.",
    difficulty: "dur"
  },
  {
    id: 6035,
    question: "Un 'incident response plan' permet :",
    options: [
      "Gérer et répondre aux incidents",
      "Accélérer le dev",
      "Augmenter le chiffre d'affaire",
      "Automatiser le RH"
    ],
    answer: 0,
    explanation: "Le plan de réponse aux incidents est un document clé pour organiser la gestion de crise et la réaction aux incidents de sécurité.",
    difficulty: "moyen"
  },
  {
    id: 6036,
    question: "Le 'threat intelligence' :",
    options: [
      "Surveillance proactive des menaces",
      "Procédure de backup",
      "Logiciel d'email",
      "Gestion de stock"
    ],
    answer: 0,
    explanation: "Le threat intelligence consiste en une veille et surveillance proactive des menaces pour anticiper les attaques.",
    difficulty: "moyen"
  },
  {
    id: 6037,
    question: "'Redondance', c'est :",
    options: [
      "Dupliquer pour assurer la disponibilité",
      "Effacer les sauvegardes",
      "Mutualiser le risque",
      "Licencier le RSSI"
    ],
    answer: 0,
    explanation: "La redondance consiste à dupliquer les éléments critiques pour assurer la disponibilité en cas de panne.",
    difficulty: "cours"
  },
  {
    id: 6038,
    question: "Le 'facteur humain' en sécurité, c'est :",
    options: [
      "Source majeure d'incident",
      "Un détail négligeable",
      "Jamais pris en compte",
      "Dépassé par l'IA"
    ],
    answer: 0,
    explanation: "Les statistiques montrent que 70% des incidents de sécurité ont une origine humaine, faisant du facteur humain une source majeure de risque.",
    difficulty: "cours"
  },
  {
    id: 6039,
    question: "'Acceptation du risque', ça veut dire :",
    options: [
      "Choix conscient de vivre avec le risque",
      "Obligation légale",
      "Externalisation",
      "Licence de logiciel"
    ],
    answer: 0,
    explanation: "L'acceptation du risque est un arbitrage raisonné et conscient de vivre avec un niveau de risque donné.",
    difficulty: "cours"
  },
  {
    id: 6040,
    question: "La 'tolérance au risque' :",
    options: [
      "Niveau maximum acceptable par l'organisation",
      "Norme ISO",
      "Niveau minimum légal",
      "Le budget sécurité"
    ],
    answer: 0,
    explanation: "La tolérance au risque définit le niveau maximum de risque que l'organisation est prête à accepter, complément de l'appétence au risque.",
    difficulty: "cours"
  },
  {
    id: 6041,
    question: "'Résilience' en IT, c'est :",
    options: [
      "Capacité à encaisser et repartir après incident",
      "Surveiller le réseau",
      "Changer de firewall",
      "Savoir faire du dev"
    ],
    answer: 0,
    explanation: "La résilience IT est la capacité d'un système à absorber un choc, résister à l'incident et relancer rapidement les activités.",
    difficulty: "moyen"
  },
  {
    id: 6042,
    question: "'Maturité sécurité' désigne :",
    options: [
      "Degré d'avancement/processus en gestion du risque",
      "Âge du RSSI",
      "Version du SIEM",
      "Nombre d'audits"
    ],
    answer: 0,
    explanation: "La maturité sécurité évalue le niveau de sophistication et d'avancement des processus de gestion des risques de l'organisation.",
    difficulty: "moyen"
  },
  {
    id: 6043,
    question: "'Audit interne' :",
    options: [
      "Audit réalisé par l'organisation elle-même",
      "Audit obligatoire RGPD",
      "Audit public",
      "Certification ISO"
    ],
    answer: 0,
    explanation: "L'audit interne est réalisé par l'organisation elle-même, en complément des audits externes pour maintenir un contrôle continu.",
    difficulty: "cours"
  },
  {
    id: 6044,
    question: "Le 'governance' (NIST CSF 2.0) ajoute :",
    options: [
      "La gestion et l'alignement stratégique du risque",
      "La cybersécurité technique",
      "Les backups",
      "Le plan PCA"
    ],
    answer: 0,
    explanation: "La fonction Governance du NIST CSF 2.0 met l'accent sur le rôle du management et le pilotage stratégique de la cybersécurité.",
    difficulty: "dur"
  },
  {
    id: 6045,
    question: "'Faille zero-day' c'est :",
    options: [
      "Une vulnérabilité inconnue et non patchée",
      "Une panne électrique",
      "Un audit raté",
      "Un bug sur Linux"
    ],
    answer: 0,
    explanation: "Une faille zero-day est une vulnérabilité inconnue des éditeurs, donc non patchée et exploitable immédiatement par les attaquants.",
    difficulty: "moyen"
  },
  {
    id: 6046,
    question: "'Incident majeur' exemple :",
    options: [
      "Perte totale d'un data center",
      "Un bug mineur",
      "Une démo dev plantée",
      "Un mail oublié"
    ],
    answer: 0,
    explanation: "Un incident majeur a un effet systémique et génère une situation de crise, comme la perte totale d'un data center.",
    difficulty: "cours"
  },
  {
    id: 6047,
    question: "La 'probabilité' dans l'analyse du risque :",
    options: [
      "Chance que le scénario survienne",
      "Durée de la panne",
      "Coût du matériel",
      "Complexité du patch"
    ],
    answer: 0,
    explanation: "La probabilité (likelihood) représente la chance qu'un scénario de risque se réalise dans une période donnée.",
    difficulty: "cours"
  },
  {
    id: 6048,
    question: "Un 'plan de crise' efficace doit être :",
    options: [
      "Réaliste, testé, documenté",
      "Inventé à l'arrache",
      "Secret",
      "Copié sur Google"
    ],
    answer: 0,
    explanation: "Un plan de crise efficace doit être réaliste, régulièrement testé et bien documenté. Un plan non testé est généralement inutile en situation réelle.",
    difficulty: "moyen"
  },
  {
    id: 6049,
    question: "L'audit de maturité permet de :",
    options: [
      "Évaluer la posture sécurité d'une organisation",
      "Calculer le budget",
      "Licencier le DSI",
      "Acheter des firewalls"
    ],
    answer: 0,
    explanation: "L'audit de maturité fournit une 'photo' du niveau réel de sécurité et de la posture de gestion des risques de l'organisation.",
    difficulty: "moyen"
  },
  {
    id: 6050,
    question: "'Isomorphisme' dans la gestion du risque :",
    options: [
      "Tendance à adopter les mêmes standards (ISO, NIST)",
      "Diversité totale",
      "Innovation permanente",
      "Changement tous les mois"
    ],
    answer: 0,
    explanation: "L'isomorphisme décrit la pression de conformité et l'effet de masse qui pousse les organisations à adopter les mêmes standards et pratiques.",
    difficulty: "dur"
  }
] 
