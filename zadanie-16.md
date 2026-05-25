# Zadanie 16: Konwersja Bash do PowerShell

## Prompt

**Przekonwertuj ten skrypt bash na równoważny skrypt PowerShell dla Windows.**

## Pliki

- `backup-db.sh` – oryginalny skrypt Bash.
- `backup-db.ps1` – przekonwertowany skrypt PowerShell.

## Główne różnice między Bash i PowerShell

### 1. Definiowanie zmiennych

W Bashu zmienne zapisuje się bez znaku `$` przy przypisaniu:

```bash
DB_NAME="app_database"
```

W PowerShellu zmienne zawsze mają znak `$`:

```powershell
$DbName = "app_database"
```

### 2. Ścieżki plików

Bash w systemach Linux używa ścieżek w stylu:

```bash
/var/backups/db
```

PowerShell na Windows zwykle używa ścieżek:

```powershell
C:\Backups\db
```

### 3. Tworzenie daty

W Bashu użyto polecenia:

```bash
DATE=$(date +%Y%m%d_%H%M%S)
```

W PowerShellu odpowiednikiem jest:

```powershell
$Date = Get-Date -Format "yyyyMMdd_HHmmss"
```

### 4. Sprawdzanie katalogu

W Bashu użyto testu:

```bash
if [ ! -d "$BACKUP_DIR" ]; then
```

W PowerShellu użyto:

```powershell
if (-not (Test-Path $BackupDir)) {
```

### 5. Tworzenie katalogu

Bash:

```bash
mkdir -p "$BACKUP_DIR"
```

PowerShell:

```powershell
New-Item -ItemType Directory -Path $BackupDir -Force
```

### 6. Obsługa kodu zakończenia

W Bashu sprawdzono zmienną `$?`:

```bash
if [ $? -eq 0 ]; then
```

W PowerShellu można użyć `$LASTEXITCODE`:

```powershell
if ($LASTEXITCODE -eq 0) {
```

### 7. Obsługa błędów

PowerShell ma konstrukcję `try/catch`, która pozwala przechwytywać błędy w bardziej strukturalny sposób. Bash częściej opiera się na kodach wyjścia poleceń.

## Podsumowanie

Oba skrypty wykonują tę samą czynność: tworzą katalog backupu, generują nazwę pliku z datą, uruchamiają `mysqldump`, kompresują wynik i informują o powodzeniu lub błędzie. Różnice wynikają głównie ze składni, sposobu obsługi ścieżek oraz mechanizmów obsługi błędów w Bashu i PowerShellu.
