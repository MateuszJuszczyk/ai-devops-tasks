# Zadanie 17: Generowanie kodu na podstawie opisu

## Opis funkcjonalności

Potrzebna była funkcja JavaScript, która:

- przyjmuje tablicę obiektów reprezentujących zadania,
- każdy obiekt ma pola `id`, `title` i `status`,
- filtruje tylko zadania ze statusem `completed`,
- sortuje je według `id` rosnąco,
- zwraca tablicę zawierającą tylko tytuły tych zadań.

## Implementacja

Kod został zapisany w pliku `task-filter.js`.

```javascript
function getCompletedTaskTitles(tasks) {
  return tasks
    .filter(task => task.status === 'completed')
    .sort((a, b) => a.id - b.id)
    .map(task => task.title);
}

module.exports = getCompletedTaskTitles;
```

## Wyjaśnienie działania

1. `.filter(...)` wybiera tylko zadania, których `status` ma wartość `completed`.
2. `.sort((a, b) => a.id - b.id)` sortuje wybrane zadania rosnąco po polu `id`.
3. `.map(...)` tworzy nową tablicę zawierającą tylko tytuły zadań.

## Przykład użycia

```javascript
const getCompletedTaskTitles = require('./task-filter');

const tasks = [
  { id: 3, title: 'Wdrożyć aplikację', status: 'completed' },
  { id: 1, title: 'Napisać testy', status: 'completed' },
  { id: 2, title: 'Poprawić dokumentację', status: 'in-progress' }
];

const result = getCompletedTaskTitles(tasks);

console.log(result);
```

Wynik:

```text
[ 'Napisać testy', 'Wdrożyć aplikację' ]
```

## Uwaga dotycząca bezpieczeństwa i jakości

Kod wygenerowany przez AI powinien być zawsze sprawdzony przed użyciem produkcyjnym. W prawdziwej aplikacji warto dodatkowo zweryfikować, czy argument `tasks` jest tablicą oraz czy obiekty mają wymagane pola.
