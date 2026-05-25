# Zadanie 12: Optymalizacja prostego skryptu

## Oryginalny kod Python

```python
def find_duplicates(list_of_items):
    duplicates = []
    for i in range(len(list_of_items)):
        for j in range(i+1, len(list_of_items)):
            if list_of_items[i] == list_of_items[j] and list_of_items[i] not in duplicates:
                duplicates.append(list_of_items[i])
    return duplicates
```

## Pytanie

**Czy ten kod można zoptymalizować? Jeśli tak, zaproponuj bardziej wydajną wersję.**

## Analiza problemu

Oryginalna funkcja działa poprawnie, ale jest mało wydajna dla dużych list. Używa dwóch zagnieżdżonych pętli, przez co porównuje każdy element z wieloma innymi elementami. Taka metoda ma złożoność czasową około `O(n²)`.

Dodatkowo warunek:

```python
list_of_items[i] not in duplicates
```

również przeszukuje listę `duplicates`, co może dodatkowo zwiększać koszt działania.

## Zoptymalizowana wersja

```python
def find_duplicates(list_of_items):
    seen = set()
    duplicates = set()

    for item in list_of_items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)
```

## Wyjaśnienie usprawnień

W zoptymalizowanej wersji użyto dwóch zbiorów:

- `seen` – przechowuje elementy, które pojawiły się już na liście,
- `duplicates` – przechowuje elementy, które pojawiły się więcej niż raz.

Sprawdzanie, czy element znajduje się w zbiorze, jest zwykle bardzo szybkie i ma średnią złożoność `O(1)`. Dzięki temu funkcja przechodzi przez listę tylko raz, więc jej złożoność czasowa wynosi około `O(n)`.

## Przykład działania

```python
items = [1, 2, 3, 2, 4, 5, 1]
print(find_duplicates(items))
```

Przykładowy wynik:

```text
[1, 2]
```

Kolejność elementów w wyniku może być różna, ponieważ zbiory w Pythonie nie gwarantują zachowania kolejności w taki sam sposób jak lista.

## Wersja zachowująca kolejność duplikatów

Jeśli ważne jest zachowanie kolejności pierwszego wykrycia duplikatu, można użyć takiej wersji:

```python
def find_duplicates(list_of_items):
    seen = set()
    duplicates = []

    for item in list_of_items:
        if item in seen and item not in duplicates:
            duplicates.append(item)
        else:
            seen.add(item)

    return duplicates
```

Ta wersja jest czytelna i zachowuje kolejność, ale sprawdzanie `item not in duplicates` może być wolniejsze przy bardzo dużej liczbie duplikatów. Można ją dodatkowo zoptymalizować przez użycie pomocniczego zbioru dla duplikatów.

## Podsumowanie

Kod można zoptymalizować przez użycie struktur typu `set`. Dzięki temu unikamy zagnieżdżonych pętli i znacząco poprawiamy wydajność funkcji dla większych list.
