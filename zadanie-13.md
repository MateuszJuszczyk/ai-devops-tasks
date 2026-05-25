# Zadanie 13: Generowanie komentarzy dokumentacyjnych

## Prompt

**Dodaj do tej funkcji komentarze dokumentacyjne w formacie JSDoc.**

## Pliki

- `fetch-user.js` – oryginalna funkcja bez komentarzy dokumentacyjnych.
- `fetch-user-documented.js` – ta sama funkcja uzupełniona o komentarz JSDoc.

## Czym jest JSDoc?

JSDoc to format komentarzy dokumentacyjnych używany w JavaScript. Pozwala opisać działanie funkcji, jej parametry, typy danych, zwracane wartości oraz możliwe błędy.

Komentarze JSDoc zaczynają się od `/**` i mogą zawierać specjalne znaczniki, na przykład:

- `@param` – opisuje parametr funkcji,
- `@returns` – opisuje wartość zwracaną,
- `@throws` – opisuje możliwy błąd.

## Przykład komentarza JSDoc

```javascript
/**
 * Pobiera dane użytkownika z przykładowego API na podstawie identyfikatora.
 *
 * @param {string|number} userId - Identyfikator użytkownika.
 * @returns {Promise<{name: string, email: string, lastLogin: Date} | null>} Dane użytkownika albo null w przypadku błędu.
 */
```

## Korzyści

Dokumentacja JSDoc poprawia czytelność kodu i ułatwia korzystanie z funkcji innym programistom. Edytory kodu mogą wykorzystywać te komentarze do podpowiedzi typów, automatycznej dokumentacji i wykrywania błędów.
