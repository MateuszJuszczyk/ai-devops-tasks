# Zadanie 23: Analiza złożoności algorytmu

## Oryginalny algorytm

Kod został zapisany w pliku `find-pairs.js`.

```javascript
function findPairs(arr, targetSum) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
```

## Złożoność oryginalnej wersji

### Złożoność czasowa

Oryginalny algorytm ma dwie zagnieżdżone pętle. Dla każdego elementu sprawdza wszystkie kolejne elementy, dlatego liczba porównań rośnie w przybliżeniu proporcjonalnie do `n²`.

Złożoność czasowa: **O(n²)**.

### Złożoność pamięciowa

Algorytm przechowuje znalezione pary w tablicy `pairs`. Poza wynikiem używa stałej ilości pamięci.

Złożoność pamięciowa pomocnicza: **O(1)**, nie licząc tablicy wynikowej.

Złożoność pamięciowa razem z wynikiem: **O(k)**, gdzie `k` to liczba znalezionych par.

## Zoptymalizowana wersja

Kod został zapisany w pliku `find-pairs-optimized.js`.

```javascript
function findPairs(arr, targetSum) {
  const pairs = [];
  const seen = new Map();

  for (const number of arr) {
    const complement = targetSum - number;
    const complementCount = seen.get(complement) || 0;

    for (let i = 0; i < complementCount; i++) {
      pairs.push([complement, number]);
    }

    seen.set(number, (seen.get(number) || 0) + 1);
  }

  return pairs;
}
```

## Opis optymalizacji

Zoptymalizowana wersja przechodzi po tablicy tylko raz. Dla każdej liczby oblicza brakującą wartość, czyli `targetSum - number`, i sprawdza, czy taka wartość pojawiła się wcześniej.

Do przechowywania wcześniej widzianych liczb użyto struktury `Map`, która pozwala szybko sprawdzać liczbę wystąpień danej wartości.

## Złożoność zoptymalizowanej wersji

Średnia złożoność czasowa: **O(n + k)**, gdzie `k` to liczba znalezionych par. Jeśli liczba par jest mała, rozwiązanie działa w praktyce blisko **O(n)**.

Złożoność pamięciowa: **O(n)**, ponieważ mapa `seen` może przechowywać informacje o wszystkich elementach tablicy.

## Podsumowanie

Oryginalny algorytm jest prosty, ale ma złożoność `O(n²)`. Zoptymalizowana wersja używa mapy i ogranicza liczbę porównań, kosztem dodatkowej pamięci `O(n)`.
