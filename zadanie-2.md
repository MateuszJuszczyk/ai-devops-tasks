# Zadanie 2: Porównanie odpowiedzi różnych modeli

## Prompt

**Wymień 5 korzyści z używania kontenerów Docker w środowisku programistycznym.**

## Odpowiedź modelu 1

1. **Spójne środowisko pracy** – Docker pozwala uruchamiać aplikację w takim samym środowisku na komputerze programisty, serwerze testowym i produkcyjnym.
2. **Łatwiejsza konfiguracja projektu** – zależności, wersje bibliotek i konfiguracja systemu mogą być zapisane w pliku `Dockerfile` lub `docker-compose.yml`.
3. **Izolacja aplikacji** – każda aplikacja działa w osobnym kontenerze, dzięki czemu jej zależności nie kolidują z innymi projektami.
4. **Szybsze uruchamianie aplikacji** – kontenery są lżejsze niż maszyny wirtualne i można je szybko tworzyć, zatrzymywać oraz usuwać.
5. **Prostsze wdrażanie** – aplikację można zapakować razem z wymaganym środowiskiem i łatwiej przenieść ją między różnymi systemami.

## Odpowiedź modelu 2

Korzystanie z Dockera w środowisku programistycznym daje wiele praktycznych korzyści:

1. **Powtarzalność środowiska** – zespół może korzystać z identycznej wersji Node.js, bazy danych, bibliotek systemowych i konfiguracji usług.
2. **Szybki onboarding nowych osób** – nowy programista nie musi ręcznie instalować wielu zależności; często wystarczy uruchomić `docker compose up`.
3. **Separacja usług** – baza danych, backend, frontend i inne komponenty mogą działać w oddzielnych kontenerach, ale nadal komunikować się w jednej sieci.
4. **Mniej problemów typu „u mnie działa”** – aplikacja działa w opisanym, kontrolowanym środowisku, niezależnym od konfiguracji lokalnego systemu.
5. **Łatwiejsze testowanie i CI/CD** – kontenery można wykorzystywać w pipeline'ach do automatycznego budowania, testowania i uruchamiania aplikacji.

## Porównanie odpowiedzi

Pierwsza odpowiedź jest krótsza i bardziej ogólna. Wymienia podstawowe zalety Dockera, takie jak izolacja, spójność środowiska i prostsze wdrażanie.

Druga odpowiedź jest bardziej szczegółowa i praktyczna. Zawiera przykłady związane z pracą zespołową, onboardingiem, `docker compose`, separacją usług oraz CI/CD. Dzięki temu lepiej pokazuje, jak Docker pomaga w realnym procesie programistycznym.

## Wnioski

Oba modele odpowiedziały poprawnie, ale różniły się poziomem szczegółowości. Bardziej rozbudowana odpowiedź była przydatniejsza, ponieważ zawierała konkretne przykłady zastosowania Dockera w codziennej pracy programisty i zespołu DevOps.
