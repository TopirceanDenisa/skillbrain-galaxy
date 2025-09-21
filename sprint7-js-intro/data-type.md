# Data Types:

## Primitive:

1. `string`: "Ana", "A", "", 'Mere', \`Afara este soare\`

   1. Este un text. Poate fi si o litera (caracter), sau mai multe caractere, sau niciunul.
   2. Orice cuvant care are ghilimele ("") sau apostroafe ('') este considerat string.
   3. Recomandam sa folosim ghilimeaua in loc de apostrof. Exceptie facem cand ghilimelele fac parte din text: De ex: `const a='El a spus: "Mergem acum?"'`
   4. Nu folosim ghilimele in limba romana! De ex `„` sau `”`! Nu va functiona! Folosim doar `"`
   5. In unele cazuri string-ul poate fi delimitat si cu caracterul accent grav (`)

2. `number`: este un numar, poate fi si real, si complex, chiar si imaginar

   1. numere intregi: `integer`: 1, 2, 3, -56, 890, etc.
   2. reale:
      1. (cele cu virgula): 23.5, 67.8 (Atentie, virgula in engleza este punct!), 7/8, 1/3
      2. (forma stiintifica): 3e+5, 2e-20
      3. (imaginare): -Infinity, Infinity
      4. (nu un numar): Not a number: NaN

3. `boolean`: este un tip de date intreg cu doar doua valor: `true` si `false`

   1. se folosesc activ operatii precum `&&` , `||` , `!`

4. `undefined`: este un top de date aparte care are doar o singura valoare, care nu e valoare de fapt

   1. este un tip de date inca nedefinit.
   2. de obicei apare atunci cand variabila nu este declarata inca (nu are valoare). (ex: `let a`)

5. `symbol`: este un tip de date unic, si nu poate fi schimbat, nici folosit in operatii.
   1. Este un tip de date simbolic
   2. Noi nu il vom folosi.
   3. Se definiste cu un parametru. (ex `const a = Symbol("Ana")`)

## Complexe:

6. `object`
   1. `obiect simplu`: se scriu sub forma `{}`, `{user: "Tiberiu"}`
   2. `obiect instatiabile` (cu clasa definita): `new DateTime`
   3. `obiect nedefinit`: are doar valoarea `null` (nu are clasa, nici forma)
   4. liste: (array) `[]`, se scriu intre paranteze patrate, si fiecare valoare este despartita de virgula. ex: `[2,3]`
7. `bigint` - este un tip de date big integer (numar mare) - un fel de clasa definita
8. `function` - functi
9. `Promise` - promisiuni
