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
