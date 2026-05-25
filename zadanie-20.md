# Zadanie 20: Generowanie wyrażeń regularnych

## Problem

**Potrzebuję wyrażenia regularnego, które waliduje format adresu IPv4, np. `192.168.1.1`.**

## Wyrażenie regularne

```regex
^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$
```

## Implementacja JavaScript

Kod został zapisany w pliku `ipv4-validator.js`.

```javascript
function isValidIPv4(ipAddress) {
  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return ipv4Regex.test(ipAddress);
}
```

## Wyjaśnienie działania

- `^` oznacza początek tekstu.
- `(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)` sprawdza jedną liczbę od `0` do `255`.
  - `25[0-5]` dopasowuje liczby od `250` do `255`.
  - `2[0-4]\d` dopasowuje liczby od `200` do `249`.
  - `1\d\d` dopasowuje liczby od `100` do `199`.
  - `[1-9]?\d` dopasowuje liczby od `0` do `99` bez wymuszania zera wiodącego.
- `(\.(...)){3}` wymaga trzech kolejnych części poprzedzonych kropką.
- `$` oznacza koniec tekstu.

## Przykłady poprawne

| Adres | Wynik |
| --- | --- |
| `192.168.1.1` | poprawny |
| `127.0.0.1` | poprawny |
| `8.8.8.8` | poprawny |
| `255.255.255.255` | poprawny |

## Przykłady niepoprawne

| Adres | Powód |
| --- | --- |
| `256.1.1.1` | `256` jest poza zakresem IPv4 |
| `192.168.1` | brakuje jednej części adresu |
| `192.168.1.1.5` | za dużo części adresu |
| `abc.def.ghi.jkl` | tekst nie zawiera liczb |
| `192.168.001.1` | zawiera zera wiodące w jednej z części |

## Podsumowanie

Wyrażenie regularne sprawdza, czy adres składa się z czterech liczb oddzielonych kropkami i czy każda liczba mieści się w zakresie od `0` do `255`.
