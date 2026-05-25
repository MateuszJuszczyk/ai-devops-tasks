# Zadanie 10: Generowanie prostego pliku .gitignore

## Prompt 1

**Stwórz plik .gitignore dla projektu Node.js, który używa Docker i przechowuje dane w lokalnej bazie MongoDB.**

## Wygenerowany plik `.gitignore`

```gitignore
# Dependencies
node_modules/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment variables and secrets
.env
.env.*
!.env.example

# Build output
dist/
build/
coverage/

# Docker local files
.docker/
docker-compose.override.yml

# Local MongoDB data
data/
mongo-data/
mongodb-data/

# System and editor files
.DS_Store
Thumbs.db
.vscode/
.idea/

# Temporary files
tmp/
temp/
*.tmp
```

## Prompt 2

**Dlaczego ważne jest ignorowanie tych plików?**

## Wyjaśnienie

Ignorowanie tych plików jest ważne, ponieważ nie wszystkie pliki z lokalnego środowiska powinny trafiać do repozytorium Git.

### `node_modules/`

Katalog `node_modules` zawiera zależności projektu. Może być bardzo duży i można go odtworzyć poleceniem `npm install`, dlatego nie powinien być commitowany.

### Logi

Pliki logów, takie jak `*.log`, są generowane lokalnie podczas działania aplikacji lub narzędzi. Nie są częścią kodu źródłowego i mogą niepotrzebnie zaśmiecać repozytorium.

### Pliki `.env`

Pliki `.env` często zawierają hasła, tokeny API, dane dostępowe do baz danych i inne sekrety. Nie należy ich publikować w repozytorium. Wyjątkiem może być `.env.example`, który pokazuje przykładowe nazwy zmiennych bez prawdziwych sekretów.

### Pliki wynikowe builda

Katalogi `dist/`, `build/` i `coverage/` są generowane automatycznie. Można je odtworzyć, więc zwykle nie powinny być przechowywane w Git.

### Dane lokalnej bazy MongoDB

Katalogi takie jak `data/`, `mongo-data/` lub `mongodb-data/` mogą zawierać lokalne dane bazy. Mogą być duże, prywatne i zależne od konkretnego środowiska.

### Pliki edytorów i systemu

Pliki `.DS_Store`, `Thumbs.db`, `.vscode/` i `.idea/` są związane z systemem operacyjnym lub konfiguracją lokalnego edytora. Nie są potrzebne do działania aplikacji.

## Podsumowanie

Plik `.gitignore` pomaga utrzymać repozytorium czyste, bezpieczne i niezależne od lokalnego środowiska programisty.
