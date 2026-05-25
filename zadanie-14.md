# Zadanie 14: Wyjaśnienie fragmentu logów

## Fragment logów

```text
May 19 10:15:32 server dockerd[1234]: time="2025-05-19T10:15:32.123456789Z" level=info msg="Container 78a2b3c4 health status changed from starting to healthy"
May 19 10:16:45 server dockerd[1234]: time="2025-05-19T10:16:45.987654321Z" level=info msg="Container 78a2b3c4 failed to connect to 172.17.0.3:5432: connection refused"
May 19 10:16:47 server dockerd[1234]: time="2025-05-19T10:16:47.246813579Z" level=warning msg="Container 78a2b3c4 health status changed from healthy to unhealthy"
```

## Pytanie

**Co się dzieje w tych logach? Jakie problemy można zidentyfikować?**

## Analiza logów

### 1. Kontener stał się zdrowy

```text
Container 78a2b3c4 health status changed from starting to healthy
```

Kontener o identyfikatorze `78a2b3c4` zakończył fazę startu i przeszedł w stan `healthy`. Oznacza to, że początkowy healthcheck zakończył się powodzeniem.

### 2. Problem z połączeniem do usługi na porcie 5432

```text
failed to connect to 172.17.0.3:5432: connection refused
```

Kontener próbował połączyć się z adresem `172.17.0.3` na porcie `5432`. Port `5432` jest typowym portem bazy danych PostgreSQL.

Komunikat `connection refused` oznacza, że host odpowiedział, ale na wskazanym porcie nie działa usługa przyjmująca połączenia albo połączenie zostało odrzucone.

Możliwe przyczyny:

- baza danych PostgreSQL jeszcze się nie uruchomiła,
- kontener bazy danych przestał działać,
- aplikacja używa błędnego adresu lub portu,
- usługa bazy danych nie nasłuchuje na porcie `5432`,
- healthcheck aplikacji zależy od bazy, która nie jest gotowa.

### 3. Kontener zmienił status na niezdrowy

```text
Container 78a2b3c4 health status changed from healthy to unhealthy
```

Po problemie z połączeniem Docker oznaczył kontener jako `unhealthy`. Oznacza to, że healthcheck kontenera zaczął kończyć się błędem.

## Zidentyfikowany problem

Głównym problemem jest brak możliwości połączenia kontenera aplikacji z usługą prawdopodobnie będącą bazą danych PostgreSQL. Aplikacja była początkowo zdrowa, ale po nieudanej próbie połączenia z bazą została oznaczona jako niezdrowa.

## Sugerowane działania

1. Sprawdzić działające kontenery:

   ```bash
   docker ps
   ```

2. Sprawdzić logi kontenera bazy danych:

   ```bash
   docker logs <db_container_id>
   ```

3. Zweryfikować konfigurację połączenia do bazy danych: host, port, użytkownika, hasło i nazwę bazy.

4. W Docker Compose używać nazw usług zamiast adresów IP, np. `db:5432` zamiast `172.17.0.3:5432`.

5. Dodać mechanizm oczekiwania na gotowość bazy danych lub poprawny `healthcheck` dla usługi bazy.

## Podsumowanie

Logi pokazują, że kontener aplikacji najpierw działał poprawnie, ale następnie nie mógł połączyć się z bazą danych na porcie `5432`. W efekcie jego status zdrowia zmienił się z `healthy` na `unhealthy`.
