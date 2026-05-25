# Zadanie 24: Interpretacja danych wydajnościowych

## Dane wydajnościowe

```text
Metryki serwera API (ostatnie 24h):
- Średni czas odpowiedzi: 230ms
- 95 percentyl czasu odpowiedzi: 450ms
- 99 percentyl czasu odpowiedzi: 1200ms
- Liczba zapytań: 15,000
- Liczba błędów 5xx: 120
- Użycie CPU: średnio 45%, max 80%
- Użycie pamięci: średnio 2.1GB, max 3.5GB (z 4GB dostępnych)
```

## Pytanie

**Zinterpretuj te dane. Czy widzisz jakieś potencjalne problemy? Co sugerujesz, aby poprawić wydajność?**

## Interpretacja

Średni czas odpowiedzi wynosi `230ms`, co ogólnie wygląda dobrze dla wielu aplikacji API. Jednak percentyle pokazują, że część użytkowników doświadcza znacznie wolniejszych odpowiedzi.

`95 percentyl` na poziomie `450ms` oznacza, że 95% zapytań kończy się w czasie do 450 ms. To nadal może być akceptowalne, ale zależy od wymagań systemu.

`99 percentyl` na poziomie `1200ms` wskazuje, że 1% zapytań trwa ponad sekundę. To może oznaczać problem z pojedynczymi wolnymi endpointami, zapytaniami do bazy danych, zewnętrznymi usługami lub okresowymi skokami obciążenia.

Liczba błędów 5xx wynosi `120` przy `15 000` zapytań. To daje około `0,8%` błędów serwera:

```text
120 / 15000 = 0,008 = 0,8%
```

Taki poziom błędów może być zbyt wysoki dla środowiska produkcyjnego.

CPU ma średnie użycie `45%` i maksimum `80%`. Nie wygląda to jeszcze krytycznie, ale maksimum 80% sugeruje, że w szczytach serwer może zbliżać się do granicy komfortowej pracy.

Pamięć ma średnie użycie `2.1GB`, a maksimum `3.5GB` z dostępnych `4GB`. To potencjalny problem, ponieważ przy szczycie zostaje tylko około `0.5GB` wolnej pamięci. Może to prowadzić do spowolnień, restartów procesu lub błędów OOM.

## Potencjalne problemy

1. Wysoki `99 percentyl` czasu odpowiedzi.
2. Błędy 5xx na poziomie około `0,8%`.
3. Wysokie maksymalne użycie pamięci, bliskie limitowi serwera.
4. Możliwe wolne zapytania do bazy danych lub przeciążone endpointy.
5. Ryzyko pogorszenia działania przy większym ruchu.

## Rekomendacje

### 1. Analiza najwolniejszych endpointów

Należy sprawdzić, które endpointy odpowiadają za wysoki `99 percentyl`. Pomocne będą logi requestów, APM lub tracing rozproszony.

### 2. Analiza błędów 5xx

Trzeba przejrzeć logi aplikacji i ustalić, czy błędy wynikają z wyjątków w kodzie, timeoutów, problemów z bazą danych czy usługami zewnętrznymi.

### 3. Optymalizacja zapytań do bazy danych

Jeżeli wolne odpowiedzi wynikają z bazy danych, warto dodać indeksy, zoptymalizować zapytania i sprawdzić plany wykonania.

### 4. Monitorowanie i optymalizacja pamięci

Wysokie użycie pamięci może oznaczać wyciek pamięci albo zbyt duże przetwarzanie danych w pamięci. Warto użyć profilera i sprawdzić, które części aplikacji zużywają najwięcej zasobów.

### 5. Skalowanie aplikacji

Jeśli aplikacja jest poprawnie zoptymalizowana, a ruch nadal rośnie, można rozważyć skalowanie poziome przez uruchomienie większej liczby instancji API za load balancerem.

### 6. Cache

Dla często odczytywanych danych można zastosować cache, np. Redis, aby zmniejszyć obciążenie bazy danych i skrócić czas odpowiedzi.

## Podsumowanie

System działa względnie poprawnie dla większości zapytań, ale metryki pokazują potencjalne problemy na ogonie rozkładu odpowiedzi, w błędach 5xx i w zużyciu pamięci. Najważniejsze działania to analiza błędów, identyfikacja wolnych endpointów, optymalizacja bazy danych i obserwacja użycia pamięci.
