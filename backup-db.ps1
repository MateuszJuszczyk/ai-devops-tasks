# Prosty skrypt do backupu bazy danych w PowerShell

$DbName = "app_database"
$BackupDir = "C:\Backups\db"
$Date = Get-Date -Format "yyyyMMdd_HHmmss"
$Filename = Join-Path $BackupDir "$DbName`_$Date.sql.gz"

# Sprawdź czy katalog istnieje
if (-not (Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null
    Write-Host "Utworzono katalog $BackupDir"
}

# Wykonaj backup
Write-Host "Rozpoczynam backup bazy $DbName..."

try {
    mysqldump -u root -p $DbName | gzip > $Filename

    if ($LASTEXITCODE -eq 0) {
        Write-Host "Backup zakończony sukcesem: $Filename"
    }
    else {
        Write-Host "Błąd podczas wykonywania backupu!"
        exit 1
    }
}
catch {
    Write-Host "Błąd podczas wykonywania backupu: $_"
    exit 1
}
