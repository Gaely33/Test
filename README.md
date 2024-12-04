1. Démarrer le Backend (Laravel)
   
Naviguez vers le répertoire du backend :

cd backend

Installez les dépendances Composer :

composer install

Générez la clé d'application :

php artisan key:generate

Exécutez les migrations de la base de données :

php artisan migrate

Démarrez le serveur de développement Laravel :

php artisan serve


2. Démarrer le Frontend (Next.js)

Naviguez vers le répertoire du frontend :

cd frontend

Installez les dépendances npm  :

npm install

Démarrez le serveur de développement Next.js :

npm run dev


Backend (Laravel)
/app : Contient la logique de l'application, y compris les contrôleurs, les modèles, et les fournisseurs de services.
/Http/Controllers : Contient les contrôleurs pour gérer les requêtes HTTP.
/Models : Contient les modèles Eloquent pour interagir avec la base de données.
/Providers : Contient les fournisseurs de services pour le démarrage de l'application.
/bootstrap : Contient les fichiers de démarrage de l'application.
/config : Contient les fichiers de configuration de l'application.
/database : Contient les migrations, les seeders, et les fichiers de base de données.
/migrations : Contient les fichiers de migration pour créer et modifier les tables de la base de données.
/public : Contient les fichiers accessibles publiquement, comme les fichiers CSS, JavaScript, et les images.
/resources : Contient les vues, les fichiers de langue, et les fichiers statiques.
/routes : Contient les fichiers de routage pour définir les routes de l'application.
/storage : Contient les fichiers de stockage, comme les fichiers de cache, les sessions, et les logs.
/tests : Contient les tests de l'application.
/vendor : Contient les dépendances Composer.
.env : Contient les variables d'environnement.
artisan : Le script CLI de Laravel.
composer.json : Le fichier de configuration de Composer.
package.json : Le fichier de configuration de npm.


Frontend (Next.js)
/pages : Contient les pages de l'application.
/_app.js : Le composant principal de l'application.
/index.js : La page d'accueil.
/login.js : La page de connexion.
/register.js : La page d'inscription.
/dashboard.js : La page du tableau de bord.
/subscribe.js : La page d'abonnement.
/components : Contient les composants réutilisables.
/ProtectedRoute.js : Le composant pour gérer les routes protégées.
/context : Contient les contextes React pour la gestion de l'état global.
/UserContext.js : Le contexte pour gérer l'état utilisateur.
/public : Contient les fichiers accessibles publiquement, comme les images et les fichiers statiques.
/styles : Contient les fichiers de style CSS.
.gitignore : Le fichier pour ignorer les fichiers et dossiers dans Git.
next.config.js : Le fichier de configuration de Next.js.
package.json : Le fichier de configuration de npm.
