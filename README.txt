KOLEJOWY ŚWIAT — STRONA NA GITHUB PAGES

1. Rozpakuj archiwum ZIP.
2. Wgraj do głównego katalogu repozytorium zawartość folderu kolej-swiat:
   index.html, style.css, app.js, vendor.js, README.txt oraz folder assets.
   Plik index.html musi znajdować się w katalogu głównym publikacji.
3. W ustawieniach GitHub Pages wybierz publikację z gałęzi main i folderu / (root).
4. Po publikacji otwórz adres podany przez GitHub.

MUZYKA
Przygotuj plik MP3 i nazwij go dokładnie: muzyka.mp3
Umieść go w folderze: assets/audio/
Pełna ścieżka: assets/audio/muzyka.mp3
Nie trzeba zmieniać kodu strony.

W tej paczce nie ma nagrania — muzykę przygotowujesz samodzielnie.
Przycisk „Włącz muzykę” uruchamia nagranie po świadomym kliknięciu.
Odtwarzanie jest zapętlone. Początkowa głośność wynosi 15%.
Suwak pozwala wybrać głośność od 0 do 50%.
Przeglądarki blokują automatyczne odtwarzanie dźwięku przed interakcją.
Przy brakującym MP3 strona nadal działa i wyświetla wskazówkę.
Po dodaniu MP3 odśwież stronę. Użyj nagrania, do którego masz prawa.

EDYCJA
index.html — teksty, struktura strony i ścieżka nagrania.
style.css — kolory, wygląd i układ mobilny.
app.js — trasy, daty, opisy, źródła i sterowanie.
vendor.js — lokalne biblioteki D3, TopoJSON oraz geografia Natural Earth.
Nie wymaga instalacji, kluczy API ani płatnego serwera.
Wszystkie zasoby modelu są w paczce; źródła historyczne otwierają zewnętrzne witryny.

MODEL HISTORYCZNY
20 wybranych połączeń z lat 1825–1906, a nie cała historyczna sieć.
Przebiegi są uproszczone przez punkty orientacyjne. Rok oznacza otwarcie
pokazanego odcinka lub ukończenie połączenia. Model nie odwzorowuje kolejnych
etapów budowy ani późniejszych zamknięć. Źródła znajdują się przy opisach tras.
Glob wykorzystuje rzut ortograficzny, obrót sferyczny i stylizowane oświetlenie.
Warstwa geograficzna nie przedstawia historycznych granic państw.

KONTROLA
Kliknij „Odtwórz historię”, aby uruchomić oś czasu.
Przesunięcie suwaka zatrzymuje odtwarzanie.
Przeciągaj glob myszką lub palcem. Przyciski strzałek umożliwiają obrót z klawiatury.
Przyciski Europa i USA przybliżają odpowiedni obszar.
Wybranie połączenia przybliża jego trasę.

PROJEKT
Oryginalny interfejs w jasnej stylistyce gier symulacyjnych.
Nie wykorzystuje oficjalnych grafik, logotypów ani muzyki The Sims.

BIBLIOTEKI I DANE
D3 7.9.0 — Copyright 2010–2023 Mike Bostock, licencja ISC.
TopoJSON Client 3.1.0 — Copyright 2012–2019 Mike Bostock, licencja ISC.
Dane lądów world-atlas 2.0.2 — Natural Earth, public domain.
https://github.com/d3/d3
https://github.com/topojson/topojson-client
https://github.com/topojson/world-atlas
