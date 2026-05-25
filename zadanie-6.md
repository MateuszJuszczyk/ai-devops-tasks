# Zadanie 6: Pierwszy diagram Mermaid

## Prompt

**Stwórz prosty diagram Mermaid przedstawiający przepływ CI/CD.**

## Kod Mermaid

```mermaid
flowchart TD
    A[Developer tworzy zmianę] --> B[Commit do repozytorium Git]
    B --> C[Uruchomienie pipeline CI]
    C --> D[Instalacja zależności]
    D --> E[Budowanie aplikacji]
    E --> F[Uruchomienie testów]
    F --> G{Czy testy przeszły?}
    G -- Nie --> H[Zgłoszenie błędu]
    H --> A
    G -- Tak --> I[Utworzenie artefaktu lub obrazu Docker]
    I --> J[Wdrożenie na środowisko testowe]
    J --> K[Akceptacja]
    K --> L[Wdrożenie na produkcję]
```

## Opis wygenerowanego diagramu

Diagram przedstawia podstawowy przepływ CI/CD. Proces zaczyna się od utworzenia zmiany przez programistę i wykonania commita do repozytorium Git. Następnie uruchamiany jest pipeline CI, który instaluje zależności, buduje aplikację i uruchamia testy.

Jeśli testy zakończą się niepowodzeniem, błąd wraca do programisty do poprawy. Jeśli testy przejdą poprawnie, tworzony jest artefakt lub obraz Docker, aplikacja trafia na środowisko testowe, a po akceptacji może zostać wdrożona na produkcję.

## Rezultat

Kod Mermaid można wkleić do Mermaid Live Editor, aby zobaczyć graficzny diagram przepływu CI/CD.
