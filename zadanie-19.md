# Zadanie 19: Generowanie prostej dokumentacji

## Prompt

**Stwórz dokumentację tego endpointu w formacie Markdown, zawierającą opis, parametry, przykładowe żądanie i odpowiedź.**

## Opis endpointu

```text
Endpoint: GET /api/users
Zwraca listę użytkowników.
Parametry zapytania:
- page: numer strony (domyślnie 1)
- limit: liczba wyników na stronę (domyślnie 10, max 100)
- role: opcjonalny filtr według roli użytkownika
```

## Rezultat

Dokumentacja endpointu została zapisana w pliku `api-docs.md`.

## Refleksje na temat jakości dokumentacji

Wygenerowana dokumentacja jest czytelna i zawiera najważniejsze elementy potrzebne użytkownikowi API: opis endpointu, parametry zapytania, przykładowe żądanie, przykładową odpowiedź oraz kody odpowiedzi.

Najbardziej przydatna jest tabela parametrów, ponieważ szybko pokazuje typ, wartość domyślną i znaczenie każdego parametru. Przykładowa odpowiedź JSON pomaga zrozumieć strukturę danych zwracanych przez API.

Dokumentację można dodatkowo ulepszyć przez dodanie dokładnych reguł autoryzacji, przykładów błędów, limitów rate limiting oraz informacji o sortowaniu, jeśli endpoint je obsługuje.
