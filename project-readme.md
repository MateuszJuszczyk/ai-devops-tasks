# Simple Task API

## Opis

Simple Task API to REST API do zarządzania zadaniami, napisane w Node.js z użyciem Express i MongoDB.

Projekt umożliwia tworzenie, odczytywanie, aktualizowanie i usuwanie zadań. Obsługuje również filtrowanie zadań według statusu i priorytetu oraz prostą autoryzację użytkowników.

## Główne funkcje

- Tworzenie nowych zadań.
- Pobieranie listy zadań i szczegółów pojedynczego zadania.
- Aktualizacja istniejących zadań.
- Usuwanie zadań.
- Filtrowanie zadań według statusu i priorytetu.
- Prosta autoryzacja użytkowników.

## Instalacja

Sklonuj repozytorium:

```bash
git clone https://github.com/example/simple-task-api.git
cd simple-task-api
```

Zainstaluj zależności:

```bash
npm install
```

Utwórz plik `.env`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/simple-task-api
JWT_SECRET=change-me
```

Uruchom aplikację:

```bash
npm start
```

## Użycie

Po uruchomieniu aplikacja będzie dostępna pod adresem:

```text
http://localhost:3000
```

Przykładowe żądanie:

```bash
curl http://localhost:3000/api/tasks
```

## Endpointy API

### Zadania

| Metoda | Endpoint | Opis |
| --- | --- | --- |
| `GET` | `/api/tasks` | Pobiera listę zadań. |
| `GET` | `/api/tasks/:id` | Pobiera szczegóły zadania. |
| `POST` | `/api/tasks` | Tworzy nowe zadanie. |
| `PUT` | `/api/tasks/:id` | Aktualizuje zadanie. |
| `DELETE` | `/api/tasks/:id` | Usuwa zadanie. |

### Filtrowanie

Przykłady:

```http
GET /api/tasks?status=completed
GET /api/tasks?priority=high
GET /api/tasks?status=pending&priority=medium
```

### Autoryzacja

| Metoda | Endpoint | Opis |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Rejestruje użytkownika. |
| `POST` | `/api/auth/login` | Loguje użytkownika i zwraca token. |

Przykład użycia tokenu:

```http
Authorization: Bearer <token>
```

## Przykładowe zadanie

```json
{
  "id": "6651f0a1b3c4",
  "title": "Przygotować dokumentację API",
  "status": "pending",
  "priority": "high"
}
```
