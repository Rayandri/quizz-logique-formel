import { type QCM } from './questions'

export const DATA_ENGINEERING_QUESTIONS: QCM[] = [
  {
    id: 7001,
    question: "Dans Kafka, quel composant gère l'élection du leader ?",
    options: [
      "Broker",
      "Producer",
      "Zookeeper",
      "Consumer"
    ],
    answer: 2,
    explanation: "Zookeeper coordonne l'élection de leader et la gestion du cluster Kafka.",
    difficulty: "cours"
  },
  {
    id: 7002,
    question: "Dans un consumer group Kafka, combien de consommateurs peuvent lire une même partition en même temps ?",
    options: [
      "Un seul",
      "Plusieurs",
      "Aucun",
      "Sans limite"
    ],
    answer: 0,
    explanation: "Une partition ne peut être lue que par un seul consumer du groupe à la fois.",
    difficulty: "cours"
  },
  {
    id: 7003,
    question: "Quel concept Spark garantit la reprise après panne d'un exécuteur ?",
    options: [
      "Sauvegarde sur HDFS",
      "Lignée (lineage) des RDD",
      "Réplication dans DataFrame",
      "Élection de leader"
    ],
    answer: 1,
    explanation: "Spark mémorise le graphe des opérations et peut recalculer une partition perdue depuis la source (lineage).",
    difficulty: "moyen"
  },
  {
    id: 7004,
    question: "Quelle opération déclenche vraiment le calcul dans Spark ?",
    options: [
      "Transformation",
      "Action",
      "Shuffle",
      "Partition"
    ],
    answer: 1,
    explanation: "Les actions (ex : collect, count) forcent l'exécution du plan.",
    difficulty: "cours"
  },
  {
    id: 7005,
    question: "Laquelle de ces méthodes Spark minimise le shuffle réseau ?",
    options: [
      "groupByKey",
      "reduceByKey",
      "map",
      "foreach"
    ],
    answer: 1,
    explanation: "reduceByKey agrège localement avant d'envoyer les résultats, limitant le trafic réseau.",
    difficulty: "moyen"
  },
  {
    id: 7006,
    question: "Dans Spark, qu'est-ce qu'un RDD ?",
    options: [
      "Une base de données",
      "Un dataset distribué et résilient",
      "Un fichier HDFS",
      "Un format d'image"
    ],
    answer: 1,
    explanation: "RDD = Resilient Distributed Dataset, base de Spark.",
    difficulty: "cours"
  },
  {
    id: 7007,
    question: "Quel est l'intérêt du pattern matching en Scala ?",
    options: [
      "Remplacer les boucles",
      "Décomposer des structures de données",
      "Faire du multithreading",
      "Éviter les exceptions"
    ],
    answer: 1,
    explanation: "Le pattern matching permet d'extraire les valeurs de structures complexes de façon sûre et exhaustive.",
    difficulty: "cours"
  },
  {
    id: 7008,
    question: "Que permet la case class en Scala ?",
    options: [
      "Générer automatiquement equals/hashCode/toString",
      "Interdire l'héritage",
      "Obliger l'immuabilité",
      "Gérer les side effects"
    ],
    answer: 0,
    explanation: "Les case classes fournissent equals, hashCode, toString, copy, et un extracteur pour le pattern matching.",
    difficulty: "cours"
  },
  {
    id: 7009,
    question: "Quelle annotation Scala permet d'optimiser la récursion ?",
    options: [
      "@recursion",
      "@override",
      "@tailrec",
      "@main"
    ],
    answer: 2,
    explanation: "@tailrec vérifie que la fonction est récursive terminale pour éviter le stack overflow.",
    difficulty: "moyen"
  },
  {
    id: 7010,
    question: "Quelle est la structure Spark optimisée par Catalyst ?",
    options: [
      "RDD",
      "DataFrame",
      "Pair RDD",
      "Partition"
    ],
    answer: 1,
    explanation: "DataFrame permet des optimisations SQL via le moteur Catalyst.",
    difficulty: "moyen"
  },
  {
    id: 7011,
    question: "La clé d'un message Kafka sert à :",
    options: [
      "Authentifier le message",
      "Chiffrer le message",
      "Déterminer la partition cible",
      "Réduire la taille du message"
    ],
    answer: 2,
    explanation: "La clé détermine la partition, donc l'ordre et la distribution des messages.",
    difficulty: "cours"
  },
  {
    id: 7012,
    question: "La propriété \"exactly once\" dans les architectures distribuées :",
    options: [
      "Peut entraîner des pertes de données",
      "Peut entraîner des duplications",
      "Garantit un traitement unique sans perte ni duplication",
      "Ne fonctionne pas avec le Big Data"
    ],
    answer: 2,
    explanation: "Exactly once = chaque message traité une seule fois, sans perte ni double.",
    difficulty: "dur"
  },
  {
    id: 7013,
    question: "Quelle affirmation décrit un shuffle dans Spark ?",
    options: [
      "Tri des données",
      "Echange de données entre nœuds du cluster",
      "Mise à jour des variables globales",
      "Chargement d'un fichier"
    ],
    answer: 1,
    explanation: "Shuffle = redistribution réseau, coûteuse, lors de certaines opérations.",
    difficulty: "moyen"
  },
  {
    id: 7014,
    question: "Quel est le rôle principal d'un broker Kafka ?",
    options: [
      "Lire les messages",
      "Stocker et distribuer les messages",
      "Chiffrer les messages",
      "Compiler les topics"
    ],
    answer: 1,
    explanation: "Le broker est le serveur qui stocke et gère les messages.",
    difficulty: "cours"
  },
  {
    id: 7015,
    question: "Le Driver Spark :",
    options: [
      "Exécute les tâches sur chaque partition",
      "Planifie les jobs et distribue les tâches",
      "Stocke toutes les données",
      "Transforme les RDD en DataFrame"
    ],
    answer: 1,
    explanation: "Le Driver crée le DAG, planifie et pilote le cluster.",
    difficulty: "cours"
  },
  {
    id: 7016,
    question: "En Scala, que fait val ?",
    options: [
      "Définit une valeur mutable",
      "Définit une valeur immuable",
      "Définit une méthode",
      "Définit une variable globale"
    ],
    answer: 1,
    explanation: "val = valeur qui ne peut plus changer après assignation.",
    difficulty: "facile"
  },
  {
    id: 7017,
    question: "Dans un DataFrame Spark, quelle méthode affiche les 20 premières lignes ?",
    options: [
      "collect()",
      "head()",
      "show()",
      "take()"
    ],
    answer: 2,
    explanation: "show() affiche les premières lignes d'un DataFrame pour visualiser.",
    difficulty: "facile"
  },
  {
    id: 7018,
    question: "Que permet le scaling horizontal en Big Data ?",
    options: [
      "Ajouter de la mémoire à une machine",
      "Ajouter plusieurs machines au cluster",
      "Compresser les données",
      "Modifier le type des données"
    ],
    answer: 1,
    explanation: "Le scaling horizontal répartit la charge sur plusieurs serveurs.",
    difficulty: "cours"
  },
  {
    id: 7019,
    question: "Le facteur de réplication Kafka définit :",
    options: [
      "Le nombre de partitions",
      "Le nombre de copies d'une partition",
      "Le nombre de topics",
      "Le nombre de consommateurs"
    ],
    answer: 1,
    explanation: "Plus de réplicas = meilleure tolérance aux pannes.",
    difficulty: "cours"
  },
  {
    id: 7020,
    question: "En Spark, une transformation \"narrow\" :",
    options: [
      "Nécessite un shuffle",
      "Ne nécessite pas de shuffle",
      "Modifie le schéma du DataFrame",
      "Implique un collect()"
    ],
    answer: 1,
    explanation: "Les transformations narrow (ex : map, filter) sont locales à la partition.",
    difficulty: "moyen"
  },
  {
    id: 7021,
    question: "Laquelle est une action Spark ?",
    options: [
      "map",
      "filter",
      "reduce",
      "flatMap"
    ],
    answer: 2,
    explanation: "reduce (comme collect, count) déclenche le calcul.",
    difficulty: "cours"
  },
  {
    id: 7022,
    question: "Dans Spark, une Task est :",
    options: [
      "Un ensemble de jobs",
      "Une unité de travail sur une partition",
      "Un DAG complet",
      "Un DataFrame"
    ],
    answer: 1,
    explanation: "Task = plus petite unité de calcul envoyée à un exécuteur.",
    difficulty: "moyen"
  },
  {
    id: 7023,
    question: "Quelle propriété caractérise une fonction pure ?",
    options: [
      "Peut modifier une variable globale",
      "Retourne toujours le même résultat pour les mêmes entrées",
      "Peut lancer une exception aléatoirement",
      "Écrit dans une base de données"
    ],
    answer: 1,
    explanation: "Une fonction pure ne fait pas d'effet de bord.",
    difficulty: "cours"
  },
  {
    id: 7024,
    question: "Dans un Pair RDD, que fait la méthode reduceByKey ?",
    options: [
      "Grouper les clés",
      "Agréger les valeurs par clé avec une fonction",
      "Trier les paires",
      "Extraire la première valeur"
    ],
    answer: 1,
    explanation: "reduceByKey regroupe et agrège toutes les valeurs d'une même clé.",
    difficulty: "moyen"
  },
  {
    id: 7025,
    question: "Quelle affirmation décrit un DataFrame Spark ?",
    options: [
      "C'est une structure typée",
      "C'est une collection de paires clé/valeur",
      "C'est une abstraction de données structurées avec colonnes nommées",
      "Il n'existe que pour le Python"
    ],
    answer: 2,
    explanation: "DataFrame = table avec colonnes, supporte SQL et optimisations.",
    difficulty: "cours"
  },
  {
    id: 7026,
    question: "Dans Kafka, l'ordre des messages est garanti :",
    options: [
      "Sur tout le topic",
      "Uniquement dans une partition",
      "Par consumer group",
      "Uniquement en mode batch"
    ],
    answer: 1,
    explanation: "Kafka garantit l'ordre dans chaque partition, pas sur tout le topic.",
    difficulty: "moyen"
  },
  {
    id: 7027,
    question: "Laquelle est une fonction d'ordre supérieur en Scala ?",
    options: [
      "filter",
      "println",
      "toString",
      "+"
    ],
    answer: 0,
    explanation: "filter prend une fonction en paramètre (le prédicat).",
    difficulty: "cours"
  },
  {
    id: 7028,
    question: "Qu'est-ce que la lazy evaluation en Spark ?",
    options: [
      "Exécution immédiate",
      "Exécution différée jusqu'à une action",
      "Pas de calcul",
      "Execution en parallèle seulement"
    ],
    answer: 1,
    explanation: "Les transformations sont empilées et exécutées lors d'une action.",
    difficulty: "moyen"
  },
  {
    id: 7029,
    question: "Quelle commande crée un DataFrame depuis un fichier CSV en Spark ?",
    options: [
      "spark.read.csv(\"fichier.csv\")",
      "DataFrame.read(\"csv\")",
      "read.spark.csv(\"fichier\")",
      "spark.createDataFrame(\"csv\")"
    ],
    answer: 0,
    explanation: "spark.read.csv(\"fichier.csv\") est la méthode standard.",
    difficulty: "facile"
  },
  {
    id: 7030,
    question: "Qu'est-ce qu'un consumer group dans Kafka ?",
    options: [
      "Un cluster de brokers",
      "Un groupe de partitions",
      "Un ensemble de consommateurs partageant la charge de lecture",
      "Un topic répliqué"
    ],
    answer: 2,
    explanation: "Les consumer group partagent les partitions pour paralléliser la lecture.",
    difficulty: "cours"
  },
  {
    id: 7031,
    question: "En Scala, que fait copy sur une case class ?",
    options: [
      "Duplique l'objet en mémoire",
      "Crée une nouvelle instance en changeant des champs",
      "Réinitialise la classe",
      "Supprime des champs"
    ],
    answer: 1,
    explanation: "copy permet de changer certains champs en créant un nouvel objet.",
    difficulty: "moyen"
  },
  {
    id: 7032,
    question: "En Spark, un Stage est :",
    options: [
      "Un ensemble de tâches exécutées sans shuffle",
      "Une action",
      "Une transformation narrow",
      "Un script Spark"
    ],
    answer: 0,
    explanation: "Stage = groupe de tâches qui peuvent s'exécuter sans redistribution réseau.",
    difficulty: "moyen"
  },
  {
    id: 7033,
    question: "Quel est le principal avantage des DataFrames sur les RDD ?",
    options: [
      "Moins de code",
      "Optimisation automatique et SQL-like",
      "Utilisable uniquement en Python",
      "Pas de sérialisation"
    ],
    answer: 1,
    explanation: "DataFrame permet l'optimisation Catalyst, et des opérations SQL.",
    difficulty: "moyen"
  },
  {
    id: 7034,
    question: "Dans Kafka, le rôle du Producer est :",
    options: [
      "Lire les messages",
      "Ecrire/envoyer les messages",
      "Gérer les offsets",
      "Répliquer les partitions"
    ],
    answer: 1,
    explanation: "Le producer envoie des messages à Kafka.",
    difficulty: "facile"
  },
  {
    id: 7035,
    question: "Une fonction récursive terminale en Scala :",
    options: [
      "Peut causer un stack overflow",
      "Est optimisée en boucle par le compilateur",
      "Ne peut être définie qu'en Java",
      "Interdit l'appel de fonctions"
    ],
    answer: 1,
    explanation: "Si la récursion est en dernière opération, Scala l'optimise en boucle.",
    difficulty: "dur"
  },
  {
    id: 7036,
    question: "Dans Spark, que fait la méthode collect() ?",
    options: [
      "Affiche le DataFrame",
      "Retourne toutes les données au Driver",
      "Ecrit sur HDFS",
      "Fait le shuffle"
    ],
    answer: 1,
    explanation: "collect() ramène toutes les données de l'exécuteur vers le Driver.",
    difficulty: "cours"
  },
  {
    id: 7037,
    question: "Le shuffle dans Spark est :",
    options: [
      "Toujours gratuit",
      "Coûteux car il implique le réseau",
      "Inexistant dans les DataFrames",
      "Limité aux actions"
    ],
    answer: 1,
    explanation: "Shuffle = échange réseau, ralentit les traitements s'il est excessif.",
    difficulty: "moyen"
  },
  {
    id: 7038,
    question: "Quelle structure Spark permet de stocker des données structurées avec schéma ?",
    options: [
      "RDD",
      "DataFrame",
      "Pair RDD",
      "Task"
    ],
    answer: 1,
    explanation: "DataFrame a des colonnes, un schéma et supporte les optimisations SQL.",
    difficulty: "cours"
  },
  {
    id: 7039,
    question: "Qu'est-ce que le \"lineage\" dans Spark ?",
    options: [
      "L'ordre des transformations",
      "L'historique des opérations pour recalculer les données perdues",
      "Une fonction d'agrégation",
      "Un type de partition"
    ],
    answer: 1,
    explanation: "Lineage = chaîne des transformations mémorisée pour la tolérance aux pannes.",
    difficulty: "dur"
  },
  {
    id: 7040,
    question: "Quelle propriété est nécessaire pour le \"exactly once\" dans les systèmes distribués ?",
    options: [
      "At most once + idempotence",
      "At least once + idempotence",
      "At least once + non-idempotence",
      "Au moins deux confirmations"
    ],
    answer: 1,
    explanation: "Pour \"exactly once\", il faut \"at least once\" (jamais perdu) ET idempotence (jamais doublé).",
    difficulty: "dur"
  },
  {
    id: 7041,
    question: "En Scala, que fait la méthode unapply ?",
    options: [
      "Génère une nouvelle instance",
      "Sert pour le pattern matching (extracteur)",
      "Supprime un objet",
      "Affiche la classe"
    ],
    answer: 1,
    explanation: "unapply est utilisée lors du pattern matching pour extraire les valeurs.",
    difficulty: "dur"
  },
  {
    id: 7042,
    question: "En Spark, un job se divise en :",
    options: [
      "Tasks puis Stages",
      "Stages puis Tasks",
      "Actions puis Stages",
      "DataFrames puis RDD"
    ],
    answer: 1,
    explanation: "Un job = plusieurs stages, chaque stage = plusieurs tasks.",
    difficulty: "moyen"
  },
  {
    id: 7043,
    question: "L'exécution paresseuse (lazy) permet :",
    options: [
      "De réduire l'utilisation mémoire",
      "D'optimiser le plan avant d'exécuter les calculs",
      "De lancer plusieurs actions à la fois",
      "D'éviter tout calcul"
    ],
    answer: 1,
    explanation: "Lazy evaluation = Spark optimise le graphe d'exécution avant de lancer les jobs.",
    difficulty: "moyen"
  },
  {
    id: 7044,
    question: "Quelle est la conséquence d'un facteur de réplication = 1 dans Kafka ?",
    options: [
      "Haute tolérance aux pannes",
      "Risque de perte de données si le broker tombe",
      "Double lecture par consumer",
      "Consommation plus rapide"
    ],
    answer: 1,
    explanation: "Un seul replica = données perdues en cas de panne du broker.",
    difficulty: "moyen"
  },
  {
    id: 7045,
    question: "Dans Spark, la méthode map() :",
    options: [
      "Modifie l'objet d'origine",
      "Applique une fonction à chaque élément et retourne un nouveau RDD",
      "Réduit la taille du cluster",
      "Change le type de la partition"
    ],
    answer: 1,
    explanation: "map transforme chaque élément, crée une nouvelle collection.",
    difficulty: "cours"
  },
  {
    id: 7046,
    question: "En Scala, comment déclare-t-on une fonction anonyme ?",
    options: [
      "x ⇒ x + 1",
      "def f(x: Int) = x + 1",
      "new Function(x)",
      "function(x)"
    ],
    answer: 0,
    explanation: "Les lambdas Scala s'écrivent x ⇒ x + 1.",
    difficulty: "facile"
  },
  {
    id: 7047,
    question: "En Big Data, le critère \"velocity\" signifie :",
    options: [
      "Données de qualité",
      "Volume total de données",
      "Débit de production et traitement",
      "Variété des sources"
    ],
    answer: 2,
    explanation: "Velocity = rapidité d'arrivée/traitement des données.",
    difficulty: "cours"
  },
  {
    id: 7048,
    question: "Une transformation \"wide\" Spark implique :",
    options: [
      "Un shuffle réseau",
      "Un simple map local",
      "Une action immédiate",
      "Un pattern matching"
    ],
    answer: 0,
    explanation: "wide = ex : groupByKey, nécessite redistribution réseau.",
    difficulty: "moyen"
  },
  {
    id: 7049,
    question: "Quelle propriété n'est PAS garantie par une architecture CP selon le théorème CAP ?",
    options: [
      "Cohérence",
      "Disponibilité",
      "Tolérance au partitionnement",
      "Persistance"
    ],
    answer: 1,
    explanation: "CP = Consistency + Partition tolerance, donc disponibilité non garantie en cas de panne réseau.",
    difficulty: "dur"
  },
  {
    id: 7050,
    question: "En Scala, que permet le sealed trait ?",
    options: [
      "Interdire la création de sous-classes",
      "Limiter les sous-classes au même fichier/source",
      "Optimiser la sérialisation",
      "Garantir l'immuabilité"
    ],
    answer: 1,
    explanation: "sealed trait = exhaustivité du pattern matching, sous-classes limitées au même fichier.",
    difficulty: "dur"
  }
] 
