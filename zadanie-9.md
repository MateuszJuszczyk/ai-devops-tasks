# Zadanie 9: Weryfikacja prostego YAML

## Oryginalny plik YAML

```yaml
services:
  web:
    image: nginx
    ports:
      - "80:80"
  app:
    build: .
    ports
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD=password
```

## Znalezione błędy

W pliku znajduje się błąd składni YAML w sekcji `app`.

Niepoprawny fragment:

```yaml
    ports
      - "3000:3000"
```

Po kluczu `ports` brakuje dwukropka. Poprawny zapis powinien wyglądać tak:

```yaml
    ports:
      - "3000:3000"
```

Dodatkowo w sekcji `environment` dla usługi `db` zapis:

```yaml
POSTGRES_PASSWORD=password
```

jest charakterystyczny dla listy zmiennych środowiskowych, ale tutaj użyto formy mapy. W mapie poprawniej jest zapisać:

```yaml
POSTGRES_PASSWORD: password
```

## Poprawiona wersja YAML

```yaml
services:
  web:
    image: nginx
    ports:
      - "80:80"

  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: password
```

## Wyjaśnienie

YAML wymaga poprawnego wcięcia oraz dwukropków po nazwach kluczy. Brak dwukropka po `ports` powoduje, że plik nie może zostać poprawnie zinterpretowany przez Docker Compose. Poprawiona wersja ma prawidłową składnię i może zostać użyta jako część pliku `docker-compose.yml`.
