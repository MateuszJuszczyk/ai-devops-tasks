# Zadanie 18: Analiza wymagań bezpieczeństwa

## Pytanie 1

**Jakie są 5 kluczowych praktyk bezpieczeństwa dla aplikacji Dockerowych w środowisku produkcyjnym?**

## Odpowiedź

1. **Uruchamianie kontenerów jako użytkownik nie-root** – ogranicza skutki ewentualnego przejęcia kontenera.
2. **Używanie minimalnych i aktualnych obrazów bazowych** – zmniejsza liczbę podatności i niepotrzebnych narzędzi w obrazie.
3. **Nieprzechowywanie sekretów w obrazie ani repozytorium** – hasła, tokeny i klucze powinny być przekazywane przez bezpieczne mechanizmy, np. zmienne środowiskowe, sekrety Docker/Kubernetes lub vault.
4. **Ograniczanie uprawnień kontenera** – warto używać `read_only`, `cap_drop`, limitów zasobów i ograniczeń sieciowych.
5. **Skanowanie obrazów i zależności** – obrazy powinny być regularnie sprawdzane narzędziami wykrywającymi podatności, np. Docker Scout, Trivy lub Snyk.

## Pytanie uzupełniające

**Jak mogę zaimplementować pierwszą z tych praktyk w moim Dockerfile i docker-compose.yml?**

## Implementacja praktyki: użytkownik nie-root

Pierwszą praktyką jest uruchamianie aplikacji jako użytkownik nie-root. Dzięki temu proces w kontenerze nie działa z najwyższymi uprawnieniami systemowymi.

### Przykładowy `Dockerfile`

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# Utworzenie użytkownika i grupy bez uprawnień root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Zmiana właściciela katalogu aplikacji
RUN chown -R appuser:appgroup /app

# Przełączenie na użytkownika nie-root
USER appuser

EXPOSE 3000
CMD ["npm", "start"]
```

### Przykładowy `docker-compose.yml`

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    user: "1000:1000"
    read_only: true
    tmpfs:
      - /tmp
    environment:
      NODE_ENV: production
```

## Wyjaśnienie

- `USER appuser` w `Dockerfile` sprawia, że aplikacja nie działa jako root.
- `user: "1000:1000"` w Compose dodatkowo wymusza identyfikator użytkownika i grupy.
- `read_only: true` ogranicza możliwość zapisu w systemie plików kontenera.
- `tmpfs: /tmp` pozwala aplikacji korzystać z tymczasowego katalogu, mimo że reszta systemu plików jest tylko do odczytu.

## Podsumowanie

Uruchamianie kontenerów jako użytkownik nie-root jest prostą i ważną praktyką bezpieczeństwa. Nie eliminuje wszystkich ryzyk, ale znacząco zmniejsza potencjalne skutki błędów aplikacji lub podatności w zależnościach.
