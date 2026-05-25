# Zadanie 21: Transformacja danych

## Dane wejściowe JSON

Dane wejściowe zostały zapisane w pliku `users.json`.

```json
{
  "users": [
    {
      "id": 1,
      "name": "Jan Kowalski",
      "email": "jan@example.com",
      "roles": ["admin", "user"]
    },
    {
      "id": 2,
      "name": "Anna Nowak",
      "email": "anna@example.com",
      "roles": ["user"]
    }
  ]
}
```

## Dane wynikowe CSV

Dane wynikowe zostały zapisane w pliku `users.csv`.

```csv
id,name,email,roles
1,Jan Kowalski,jan@example.com,"admin;user"
2,Anna Nowak,anna@example.com,"user"
```

## Opis procesu konwersji

JSON zawiera obiekt z polem `users`, które jest tablicą użytkowników. Każdy użytkownik został przekształcony na jeden wiersz CSV. Pola `id`, `name` i `email` zostały przeniesione bezpośrednio do kolumn o tych samych nazwach.

Największa różnica dotyczy pola `roles`, ponieważ w JSON jest ono tablicą, a CSV jest formatem tabelarycznym. Aby zapisać wiele ról w jednej komórce CSV, role zostały połączone średnikiem, np. `admin;user`.

## Potencjalne wyzwania

1. **Tablice w CSV** – CSV nie ma natywnego typu tablicowego, dlatego trzeba wybrać sposób reprezentacji wielu wartości w jednej kolumnie.
2. **Znaki specjalne** – jeśli wartości zawierają przecinki, cudzysłowy lub znaki nowej linii, trzeba je poprawnie otoczyć cudzysłowami i uciec znaki specjalne.
3. **Zagnieżdżone obiekty** – bardziej złożone struktury JSON mogą wymagać spłaszczania danych.
4. **Utrata typów danych** – CSV przechowuje dane jako tekst, więc typy takie jak liczby, tablice lub wartości logiczne mogą wymagać dodatkowej interpretacji przy imporcie.

## Podsumowanie

Konwersja JSON do CSV jest prosta dla płaskich struktur, ale wymaga podjęcia decyzji przy danych zagnieżdżonych lub tablicowych. W tym przykładzie tablica `roles` została zapisana jako tekst rozdzielony średnikami.
