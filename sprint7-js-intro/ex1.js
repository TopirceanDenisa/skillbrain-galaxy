// 1. Returnează un boolean dacă un număr este divizibil cu 10.
// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:

// Input: 100
// Output: true

// Exemplu 2:

// Input: 23
// Output: false

function nrDivCu10(numar) {
  if (numar % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('\nExercitiul 1:');
console.log('\nInput: 100 ->', nrDivCu10(100));
console.log('Input: 23 ->', nrDivCu10(23));
