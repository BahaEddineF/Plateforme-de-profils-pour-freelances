# 📌 Plateforme de Profils pour Freelances

Une plateforme web permettant la gestion des profils de freelances, avec ajout de compétences, liens sociaux, et bien plus. Ce projet est conçu en utilisant **NestJS**, **GraphQL**, et **TypeORM**.

---

## 🚀 Fonctionnalités principales

- 👤 **Création et gestion de profils** de freelances  
- 🌐 **Ajout de liens sociaux** (LinkedIn, GitHub, etc.)  
- 🛠️ **Ajout et gestion des compétences**  
- 🔎 **Utilisation de GraphQL** pour effectuer des requêtes (lecture, création, modification, suppression)  

---

## 🧱 Technologies utilisées

- **Backend** : [NestJS](https://nestjs.com/)  
- **Base de données** : PostgreSQL (ou autre via TypeORM)  
- **ORM** : TypeORM  
- **API** : GraphQL avec Apollo Server  
- **Langage** : TypeScript  

---
📌 Requête d'exemple (GraphQL)
mutation {
  createSocialLink(
    platform: "LinkedIn",
    url: "https://linkedin.com/in/example",
    freelanceId: 1
  ) {
    id
    platform
    url
  }
}
---
👨‍💻 Développeurs
Fatnassi Baheddine

Jihed Kedidi

Yousser Bouguerre

Étudiants à TEK-UP, spécialisés en Génie Logiciel.

## ⚙️ Installation et exécution

```bash
# 1. Cloner le dépôt
git clone https://github.com/BahaEddineF/Plateforme-de-profils-pour-freelances.git

# 2. Aller dans le dossier du projet
cd projet_freelance

# 3. Installer les dépendances
npm install

# 4. Configurer la base de données dans le fichier .env
# Exemple :
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=freelance_db

# 5. Lancer le projet en mode développement
npm run start:dev
