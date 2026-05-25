# Zadanie 7: Wygenerowanie prostego skryptu Bash

## Prompt 1

**Napisz prosty skrypt bash, który sprawdza, czy usługa Docker działa, a jeśli nie - próbuje ją uruchomić.**

## Wygenerowany skrypt

Skrypt został zapisany w pliku `check_docker.sh`.

```bash
#!/usr/bin/env bash

set -e

SERVICE_NAME="docker"

echo "Sprawdzanie statusu usługi Docker..."

if systemctl is-active --quiet "$SERVICE_NAME"; then
  echo "Usługa Docker działa."
else
  echo "Usługa Docker nie działa. Próba uruchomienia..."
  sudo systemctl start "$SERVICE_NAME"

  if systemctl is-active --quiet "$SERVICE_NAME"; then
    echo "Usługa Docker została uruchomiona poprawnie."
  else
    echo "Nie udało się uruchomić usługi Docker."
    exit 1
  fi
fi
```

## Prompt 2

**Wyjaśnij działanie tego skryptu linia po linii, tak jakbyś tłumaczył osobie początkującej.**

## Wyjaśnienie działania skryptu

```bash
#!/usr/bin/env bash
```

Ta linia informuje system, że skrypt ma być uruchomiony przy użyciu interpretera Bash.

```bash
set -e
```

Ta opcja powoduje, że skrypt zakończy działanie, jeśli wystąpi błąd w jednym z poleceń.

```bash
SERVICE_NAME="docker"
```

Tutaj tworzona jest zmienna `SERVICE_NAME`, która przechowuje nazwę usługi Docker.

```bash
echo "Sprawdzanie statusu usługi Docker..."
```

Polecenie wyświetla komunikat informujący użytkownika, że rozpoczyna się sprawdzanie statusu Dockera.

```bash
if systemctl is-active --quiet "$SERVICE_NAME"; then
```

Ta instrukcja sprawdza, czy usługa Docker jest aktywna. Opcja `--quiet` sprawia, że polecenie nie wypisuje dodatkowych informacji, tylko zwraca status powodzenia lub błędu.

```bash
  echo "Usługa Docker działa."
```

Jeżeli Docker działa, skrypt wyświetla informację, że usługa jest aktywna.

```bash
else
```

Ta część wykonywana jest wtedy, gdy Docker nie działa.

```bash
  echo "Usługa Docker nie działa. Próba uruchomienia..."
```

Skrypt informuje użytkownika, że Docker nie jest aktywny i zostanie podjęta próba jego uruchomienia.

```bash
  sudo systemctl start "$SERVICE_NAME"
```

To polecenie próbuje uruchomić usługę Docker. `sudo` może poprosić o hasło administratora, ponieważ uruchamianie usług systemowych zwykle wymaga podwyższonych uprawnień.

```bash
  if systemctl is-active --quiet "$SERVICE_NAME"; then
```

Po próbie uruchomienia skrypt ponownie sprawdza, czy Docker działa.

```bash
    echo "Usługa Docker została uruchomiona poprawnie."
```

Jeśli Docker został uruchomiony, pojawia się komunikat o sukcesie.

```bash
  else
```

Ta część wykona się, jeśli Docker nadal nie działa.

```bash
    echo "Nie udało się uruchomić usługi Docker."
```

Skrypt wyświetla informację o niepowodzeniu.

```bash
    exit 1
```

Skrypt kończy działanie z kodem błędu `1`, co oznacza, że operacja nie powiodła się.

```bash
  fi
fi
```

Te linie kończą instrukcje warunkowe `if`.

## Rezultat

Powstał prosty skrypt Bash, który sprawdza działanie usługi Docker i próbuje ją uruchomić, jeśli jest zatrzymana.
