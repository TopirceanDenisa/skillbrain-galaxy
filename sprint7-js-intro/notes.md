# General:

1. In javascript, folosirea `;` (punct si virgula) la finalul liniilor este optional.
   1. Totusi, in cursurile noastre, vom recomanda sa le folosim mereu.

# Pentru a executa un cod javascript:

1. este nevoie sa avem deja instalat aplicatia nodejs.
2. Cream un fisier cu extensia `.js`, de exemplu: `ex01.js`
3. Executam in felul urmator: `node sprint7-js-intro/ex01.js`
   1. [optional] Recomand sa folosim butonul de `TAB` pentru auto-complete
   2. [optional] Recomand sa folosim sageata in sus (in terminal) pentru a executa inca o data fisierul
4. Folosim comanda `console.log( ABC )` pentru afisarea codului in consola (in terminal)
   1. `ABC` poate fi o variabila, sau mai multe, sau direct valori
5. Recomand sa numim orice fisier (si dosar) in format kebab-case sau snake_case, fara spatii in nume.
   1. Functioneaza si cu spatii, doar ca la executia fisierului va trebui sa folosim `\ ` in loc de ` `.
   2. De ex: `node sprint7\ js\ intro/ex\ 01.js` in cazul dosarului `sprint7 js intro` si fisierului `ex 01.js`

# Recomandari:

1. Toate comentariile sa fie scrise in linii separate
   1. Daca vrem sa comentam o linie, atunci comentariul va fi de-asupra liniei.
   2. Comentariile pot fi facute pe mai multe linii cu semnele `/*` si la urma `*/`. Totusi, nu recomand astfel de comentarii.
2. Pentru comentarii in js, se recomanda folosirea butoanelor `CTRL + /`
   1. Se poate selecta mai multe randuri deodata, dupa care apasam butoanele de `CTRL + /`
   2. Pentru decomentare, se face la fel cu aceleasi butoane
3. Pentru declararea oricarei variabile, recomand folosirea cuvantului `const`, iar cand vrem sa modificam variabila, atunci rescriem din `const` in `let`.
   1. Atentie! Cuvantul `var` desi functioneaza, nu va fi acceptat in temele de casa!
4. Cand scrim console.log -> Recomand sa adaugam si un text informational:
   1. De ex: in loc de `console.log(a)` scrim: `console.log("a=" + a)`

# Hints:

1. folosirea `typeof a`:
   1. unde `a` este variabila, o sa ne dea rezultat tipul de date al lui a.

# Atentie!

1. A nu se confunda `&&` cu `&`
   1. `&&` - se foloseste pentru a rezulta un boolean (expresie logica cu rezultat true/false)
   2. `&` - se foloseste ca operatie matematica (lucru pe biti)

# Instructiuni!

1. `if`:
   1. if simplu: `if (conditie booleana [true/false]) { instructiune1; instructiune2; etc. }`
   2. if else: `if (conditie booleana) {ins1, ins2} else {ins1, ins2}`
2. `function`:
