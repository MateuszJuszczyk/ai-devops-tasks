# Dokumentacja endpointu: GET /api/users

## Opis

Endpoint `GET /api/users` zwraca listę użytkowników. Obsługuje paginację oraz opcjonalne filtrowanie użytkowników według roli.

## Adres endpointu

```http
GET /api/users
```

## Parametry zapytania

| Parametr | Typ | Wymagany | Domyślnie | Opis |
| --- | --- | --- | --- | --- |
| `page` | number | Nie | `1` | Numer strony wyników. |
| `limit` | number | Nie | `10` | Liczba wyników na stronę. Maksymalna wartość to `100`. |
| `role` | string | Nie | brak | Opcjonalny filtr według roli użytkownika, np. `admin` lub `user`. |

## Przykładowe żądanie

```http
GET /api/users?page=1&limit=10&role=admin
```

## Przykładowa odpowiedź

```json
{
  "page": 1,
  "limit": 10,
  "total": 2,
  "users": [
    {
      "id": 1,
      "name": "Jan Kowalski",
      "email": "jan@example.com",
      "role": "admin"
    },
    {
      "id": 5,
      "name": "Anna Nowak",
      "email": "anna@example.com",
      "role": "admin"
    }
  ]
}
```

## Kody odpowiedzi

| Kod | Znaczenie |
| --- | --- |
| `200 OK` | Lista użytkowników została zwrócona poprawnie. |
| `400 Bad Request` | Niepoprawne parametry zapytania, np. zbyt duży `limit`. |
| `500 Internal Server Error` | Błąd po stronie serwera. |

## Uwagi walidacyjne

- `page` powinien być liczbą większą lub równą `1`.
- `limit` powinien być liczbą od `1` do `100`.
- `role` powinien odpowiadać roli obsługiwanej przez system.
