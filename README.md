# StageProject

## Si git deconne quand tu veux pull (probleme de merge et que permission denied sur un file) :

-Ferme tous les fichiers/éditeurs de textes qui peuvent être en train d'utiliser le file en question (ferme Atom, stop le npm start..)
-Recommence

Il semble que ce soit un problème de windows qui ne t'autorises pas à faire ces changements si tu as ça d'ouvert quelque part. Du coup ça va te lancer le merge et tu vas pouvoir modifier en ouvrant à nouveau atom, et ensuite push. 

## Pour push une mise à jour : 

```
git add "*"
```

```
git commit -m "Un message..."
```

```
git push
```
## Pour récupérer la dernière version : 

Permet de vérifier si on a la dernière version :
```
git checkout
```
Récupère les derniers fichiers
```
git pull
```

## Pour installer :

```
git clone https://github.com/Adams4422/Stage.git
```
```
rm -r node_modules
```
```
rm -r package-lock.json
```
```
npm install
```
## Pour lancer l'appli :

```
cd Stage
```
```
npm install
```
```
npm start
```
