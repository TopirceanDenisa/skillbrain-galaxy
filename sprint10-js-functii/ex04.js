// //Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției.
// Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

// Exemplu 1:
// Input: addNumber(1, 2, 3)
// Output: 6

// Exemplu 2:
// Input: addNumber(1, 2, 3, 4, 5)
// Output: 15

// Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
// const addNumber = (…argumente) ⇒ {}

function addNumber() {
  let suma = 0;

  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }

  console.log('Suma numerelor ' + Array.from(arguments).join(', ') + ' este: ' + suma);

  return suma;
}

addNumber(1, 2, 3);
addNumber(1, 2, 3, 4, 5);
addNumber(10);
addNumber();
