# Zadanie 5: Wizualizacja ASCII Art

## Prompt 1

**Stwórz prosty diagram ASCII Art przedstawiający połączenie klienta, serwera aplikacji i bazy danych.**

## Diagram 1

```text
+----------+        +-------------------+        +-------------+
| Klient   | -----> | Serwer aplikacji  | -----> | Baza danych |
+----------+        +-------------------+        +-------------+
```

## Prompt 2

**Dodaj do diagramu opisy elementów i kierunki przepływu danych.**

## Diagram 2

```text
                 żądanie HTTP/API
              ---------------------->
+----------------+                 +------------------------+
|    Klient      |                 |   Serwer aplikacji     |
| przeglądarka   |                 | logika biznesowa, API  |
| lub aplikacja  |                 |                        |
+----------------+                 +------------------------+
              <----------------------
                  odpowiedź JSON/HTML

                                   zapytanie SQL
                                ---------------->
                         +------------------------+        +----------------+
                         |   Serwer aplikacji     |        |  Baza danych   |
                         | walidacja i obsługa    |        | tabele, dane   |
                         | żądań użytkownika      |        | użytkowników   |
                         +------------------------+        +----------------+
                                <----------------
                                   wyniki zapytania
```

## Opis

Diagram przedstawia prostą architekturę aplikacji rozproszonej. Klient wysyła żądanie do serwera aplikacji, serwer przetwarza logikę biznesową i w razie potrzeby komunikuje się z bazą danych. Następnie baza danych zwraca wyniki do serwera, a serwer odsyła odpowiedź do klienta.
