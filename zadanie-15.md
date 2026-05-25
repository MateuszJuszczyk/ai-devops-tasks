# Zadanie 15: Refaktoryzacja prostej funkcji

## Prompt

**Zrefaktoryzuj tę funkcję, aby była bardziej czytelna i łatwiejsza w utrzymaniu.**

## Pliki

- `config.js` – oryginalna funkcja z wieloma instrukcjami `if-else`.
- `config-refactored.js` – zrefaktoryzowana wersja funkcji.

## Główna zmiana

Oryginalna funkcja sprawdzała wartość `env` przez serię instrukcji `if`, `else if` i `else`. Zrefaktoryzowana wersja używa obiektu `environmentConfigs`, w którym nazwa środowiska jest kluczem, a konfiguracja wartością.

## Zrefaktoryzowany kod

```javascript
const DEFAULT_ENVIRONMENT = 'development';

const environmentConfigs = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    debug: true,
    timeout: 5000
  },
  testing: {
    apiUrl: 'http://test-server:3000/api',
    debug: true,
    timeout: 5000
  },
  staging: {
    apiUrl: 'https://staging.example.com/api',
    debug: false,
    timeout: 10000
  },
  production: {
    apiUrl: 'https://api.example.com',
    debug: false,
    timeout: 15000
  }
};

function getEnvironmentConfig(env = DEFAULT_ENVIRONMENT) {
  return environmentConfigs[env] || environmentConfigs[DEFAULT_ENVIRONMENT];
}
```

## Korzyści z refaktoryzacji

1. **Lepsza czytelność** – konfiguracje są zebrane w jednym obiekcie.
2. **Łatwiejsze dodawanie środowisk** – nowe środowisko można dodać przez dopisanie kolejnego wpisu w `environmentConfigs`.
3. **Mniej powtórzeń** – domyślna konfiguracja jest obsługiwana przez stałą `DEFAULT_ENVIRONMENT`.
4. **Prostsze testowanie** – funkcja ma mniej gałęzi warunkowych.
5. **Łatwiejsze utrzymanie** – dane konfiguracyjne są oddzielone od logiki wyboru konfiguracji.

## Podsumowanie

Refaktoryzacja nie zmienia działania funkcji, ale upraszcza jej strukturę. Kod jest krótszy, bardziej deklaratywny i łatwiejszy do rozwijania.
