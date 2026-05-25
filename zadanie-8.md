# Zadanie 8: Analiza krótkiego błędu

## Komunikat błędu

```text
ERROR: for app  Cannot start service app: driver failed programming external connectivity on endpoint app (172.18.0.2): Error starting userland proxy: listen tcp4 0.0.0.0:3000: bind: address already in use
```

## Pytanie

**Co oznacza ten błąd i jak mogę go rozwiązać?**

## Wyjaśnienie

Błąd oznacza, że Docker próbuje uruchomić kontener i przypisać mu port `3000` na komputerze hosta, ale ten port jest już zajęty przez inny proces lub inny kontener.

Fragment:

```text
listen tcp4 0.0.0.0:3000: bind: address already in use
```

oznacza, że system nie może nasłuchiwać na porcie `3000`, ponieważ coś już z niego korzysta.

## Możliwe rozwiązania

### 1. Sprawdzenie, co używa portu 3000

Na systemie Linux można użyć polecenia:

```bash
sudo lsof -i :3000
```

albo:

```bash
sudo ss -ltnp | grep 3000
```

### 2. Zatrzymanie procesu używającego portu

Jeśli port zajmuje lokalna aplikacja, można ją zatrzymać lub zakończyć proces:

```bash
kill <PID>
```

gdzie `<PID>` to identyfikator procesu.

### 3. Sprawdzenie działających kontenerów

Port może być zajęty przez inny kontener Docker:

```bash
docker ps
```

Jeśli inny kontener używa portu `3000`, można go zatrzymać:

```bash
docker stop <container_id>
```

### 4. Zmiana mapowania portu

Jeżeli nie chcemy zatrzymywać procesu, można zmienić port hosta w pliku `docker-compose.yml`, np.:

```yaml
ports:
  - "3001:3000"
```

Wtedy aplikacja nadal działa w kontenerze na porcie `3000`, ale na komputerze będzie dostępna pod adresem `localhost:3001`.

### 5. Ponowne uruchomienie środowiska

Po zmianach można ponownie uruchomić kontenery:

```bash
docker compose down
docker compose up
```

## Podsumowanie

Problem nie wynika z błędu aplikacji, ale z konfliktu portów. Najczęściej należy zatrzymać proces używający portu `3000` albo zmienić mapowanie portów w konfiguracji Dockera.
