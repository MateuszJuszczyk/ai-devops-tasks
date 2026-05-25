# Zadanie 11: Generowanie prostego testu jednostkowego

## Funkcja JavaScript

```javascript
function sum(a, b) {
  return a + b;
}
```

## Prompt

**Napisz prosty test jednostkowy dla tej funkcji używając Jest. Wyjaśnij, czym jest Jest, jak go zainstalować w projekcie i jak uruchomić ten test. Podaj również strukturę plików projektu.**

## Plik `sum.js`

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

## Plik `sum.test.js`

```javascript
const sum = require('./sum');

test('adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(sum(-2, -3)).toBe(-5);
});

test('adds zero', () => {
  expect(sum(5, 0)).toBe(5);
});
```

## Czym jest Jest?

Jest to popularny framework do testowania kodu JavaScript. Pozwala pisać testy jednostkowe, uruchamiać je automatycznie i sprawdzać, czy funkcje zwracają oczekiwane wyniki.

## Instalacja Jest

W projekcie Node.js można zainstalować Jest jako zależność deweloperską:

```bash
npm install --save-dev jest
```

Następnie w pliku `package.json` można dodać skrypt:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Uruchomienie testu

Test można uruchomić poleceniem:

```bash
npm test
```

albo bezpośrednio przez `npx`:

```bash
npx jest
```

## Struktura plików projektu

```text
ai-devops-tasks/
├── sum.js
├── sum.test.js
└── zadanie-11.md
```

## Wyjaśnienie

Plik `sum.js` zawiera funkcję `sum`, która dodaje dwie liczby. Linia `module.exports = sum;` pozwala zaimportować tę funkcję w pliku testowym. Plik `sum.test.js` zawiera testy, które sprawdzają różne przypadki dodawania: dwie liczby dodatnie, liczby ujemne oraz dodawanie zera.
