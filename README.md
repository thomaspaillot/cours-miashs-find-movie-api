# Cours MIASHS

Exemple d'utilisation d'express pour créer un serveur web et création d'une API permettant de récupérer les informations d'un film à partir de son titre en utilisant l'API de themoviedb.

## Installer les dépendances

```
npm install
```

## Lancer le serveur

```
npm start
```

## Utilisation de l'API

Une seule route disponible : `/movie`, cette route accepte un paramètre `title` pour passer le titre du film recherché.

### Example d'utilisation

```
fetch(http://localhost:3000/movies?title=inception);
```

Remplacer `http://localhost:3000` par l'adresse sur laquelle votre serveur tourne, localhost fonctionne seulement si votreserveur tourne sur votre machine localement. Si vous utilisez codespace, vous devriez avoir une url générée par codespace.