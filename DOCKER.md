# 🐳 Docker Deployment Guide

Ce guide explique comment déployer l'application Quiz Logique avec Docker.

## 📋 Prérequis

- Docker installé ([Installation Docker](https://docs.docker.com/get-docker/))
- Docker Compose installé (inclus avec Docker Desktop)

## 🚀 Déploiement Rapide

Pour déployer l'application en mode détaché (background), exécutez simplement :

```bash
docker compose up -d
```

L'application sera accessible sur http://localhost:3000

## 🛠 Commandes Utiles

### Démarrer l'application
```bash
docker compose up -d
```

### Arrêter l'application
```bash
docker compose down
```

### Voir les logs
```bash
docker compose logs -f
```

### Reconstruire l'image après des modifications
```bash
docker compose up -d --build
```

### Redémarrer l'application
```bash
docker compose restart
```

## 📁 Fichiers Docker

- **Dockerfile** : Configuration de l'image Docker
  - Multi-stage build pour optimiser la taille
  - Utilise Node.js 20 Alpine (image légère)
  - Build avec pnpm
  - Mode standalone Next.js pour production

- **docker-compose.yml** : Configuration de l'orchestration
  - Service unique pour l'application
  - Port 3000 exposé
  - Redémarrage automatique
  - Variables d'environnement de production

- **.dockerignore** : Fichiers exclus du build
  - node_modules
  - Fichiers de build
  - Configuration locale

## 🔧 Configuration

### Port personnalisé

Pour utiliser un port différent, modifiez le docker-compose.yml :

```yaml
ports:
  - "8080:3000"  # Accès via http://localhost:8080
```

### Variables d'environnement

Ajoutez des variables dans le docker-compose.yml :

```yaml
environment:
  - NODE_ENV=production
  - CUSTOM_VAR=value
```

## 📊 Informations Techniques

- **Image de base** : node:20-alpine
- **Build system** : pnpm
- **Output mode** : standalone
- **Port** : 3000
- **User** : nextjs (non-root)
- **Restart policy** : unless-stopped

## 🐛 Dépannage

### L'application ne démarre pas
```bash
# Vérifier les logs
docker compose logs

# Reconstruire l'image
docker compose build --no-cache
docker compose up -d
```

### Port déjà utilisé
Modifiez le port dans docker-compose.yml ou arrêtez le processus utilisant le port 3000.

### Modifications non prises en compte
```bash
# Forcer la reconstruction
docker compose down
docker compose up -d --build
```

## 📝 Notes

- La première construction peut prendre plusieurs minutes
- L'image finale est optimisée pour la production
- Les données sont éphémères (pas de volumes persistants)
- Redémarrage automatique en cas d'erreur
