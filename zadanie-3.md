# Zadanie 3: Podstawowe formatowanie promptu

## Prompt 1 – niestrukturyzowany

**dockerfile node**

## Odpowiedź na prompt 1

Przykładowy Dockerfile dla aplikacji Node.js:

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Ten plik używa obrazu Node.js, instaluje zależności aplikacji, kopiuje pliki projektu i uruchamia aplikację poleceniem `npm start`.

## Prompt 2 – strukturyzowany

**Napisz prosty Dockerfile dla aplikacji Node.js, który:**

- **używa Node 18 jako obrazu bazowego**
- **kopiuje pliki package.json i package-lock.json**
- **instaluje zależności**
- **kopiuje resztę plików aplikacji**
- **wystawia port 3000**
- **uruchamia aplikację poleceniem "npm start"**

## Odpowiedź na prompt 2

```dockerfile
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Opis działania:

1. `FROM node:18` – ustawia Node.js 18 jako obraz bazowy.
2. `WORKDIR /app` – tworzy i ustawia katalog roboczy aplikacji.
3. `COPY package.json package-lock.json ./` – kopiuje pliki z informacjami o zależnościach.
4. `RUN npm install` – instaluje zależności projektu.
5. `COPY . .` – kopiuje pozostałe pliki aplikacji.
6. `EXPOSE 3000` – informuje, że aplikacja używa portu 3000.
7. `CMD ["npm", "start"]` – uruchamia aplikację poleceniem `npm start`.

## Porównanie odpowiedzi

Odpowiedź na pierwszy prompt była poprawna, ale model musiał samodzielnie odgadnąć wymagania. Prompt był bardzo krótki, więc odpowiedź mogła być mniej przewidywalna.

Drugi prompt był dokładny i zawierał listę wymagań. Dzięki temu odpowiedź lepiej odpowiadała oczekiwanemu rezultatowi i zawierała wszystkie wskazane elementy.

## Wnioski

Strukturyzowany prompt daje większą kontrolę nad odpowiedzią modelu. Im dokładniej opisane są wymagania, tym większa szansa, że wynik będzie kompletny, zgodny z oczekiwaniami i łatwy do użycia.
