# Zadanie 4: Określanie roli w promptach

## Prompt 1 – standardowe pytanie

**Jak rozwiązać problem z dużym zużyciem pamięci przez kontener Docker?**

## Odpowiedź na prompt 1

Aby rozwiązać problem z dużym zużyciem pamięci przez kontener Docker, można wykonać kilka kroków:

1. Sprawdzić zużycie zasobów poleceniem `docker stats`.
2. Przeanalizować logi aplikacji za pomocą `docker logs`.
3. Ustawić limit pamięci dla kontenera, np. przez opcję `--memory`.
4. Sprawdzić, czy aplikacja nie ma wycieków pamięci.
5. Zoptymalizować konfigurację aplikacji lub zmniejszyć liczbę uruchomionych procesów.

Przykład uruchomienia kontenera z limitem pamięci:

```bash
docker run --memory=512m nazwa-obrazu
```

## Prompt 2 – pytanie z przypisaną rolą

**Jesteś doświadczonym DevOps Engineerem z 10-letnim doświadczeniem. Jak rozwiązać problem z dużym zużyciem pamięci przez kontener Docker?**

## Odpowiedź na prompt 2

Jako DevOps Engineer zacząłbym od ustalenia, czy problem wynika z samej aplikacji, konfiguracji kontenera, czy z ograniczeń środowiska uruchomieniowego.

1. **Monitoring kontenera**

   Najpierw sprawdziłbym bieżące zużycie zasobów:

   ```bash
   docker stats
   ```

   Pozwala to zobaczyć użycie pamięci, CPU oraz limit pamięci dla kontenera.

2. **Analiza logów i zachowania aplikacji**

   Następnie przejrzałbym logi:

   ```bash
   docker logs <container_id>
   ```

   Warto sprawdzić, czy aplikacja nie zgłasza błędów, restartów lub problemów z połączeniami do innych usług.

3. **Ustawienie limitów pamięci**

   Kontener powinien mieć jasno określony limit pamięci:

   ```bash
   docker run --memory=512m --memory-swap=512m nazwa-obrazu
   ```

   Dzięki temu jeden kontener nie zużyje wszystkich zasobów hosta.

4. **Profilowanie aplikacji**

   Jeśli zużycie pamięci stale rośnie, możliwy jest wyciek pamięci. W takim przypadku należy użyć narzędzi profilujących odpowiednich dla technologii aplikacji, np. Node.js Inspector, VisualVM dla Javy lub narzędzi diagnostycznych dla .NET.

5. **Optymalizacja obrazu i procesu**

   Warto sprawdzić, czy obraz nie uruchamia zbędnych procesów oraz czy aplikacja działa w trybie produkcyjnym. Dla Node.js można ustawić na przykład:

   ```bash
   NODE_ENV=production
   ```

6. **Stałe monitorowanie**

   W środowisku produkcyjnym problem powinien być obserwowany przez system monitoringu, np. Prometheus, Grafana lub narzędzia chmurowe. Pozwala to wykrywać wzrost zużycia pamięci zanim doprowadzi on do awarii.

## Porównanie odpowiedzi

Pierwsza odpowiedź była krótka i zawierała podstawowe kroki diagnostyczne. Była poprawna, ale dość ogólna.

Druga odpowiedź była bardziej specjalistyczna. Zawierała uporządkowane podejście diagnostyczne, konkretne komendy, przykłady limitów pamięci, wzmiankę o profilowaniu aplikacji oraz monitoringu produkcyjnym.

## Wnioski

Przypisanie modelowi konkretnej roli zwiększyło szczegółowość odpowiedzi. Model odpowiedział bardziej jak praktyk DevOps, uwzględniając diagnostykę, konfigurację limitów, analizę aplikacji i monitoring. Rola w promptach pomaga uzyskać bardziej profesjonalną i kontekstową odpowiedź.
