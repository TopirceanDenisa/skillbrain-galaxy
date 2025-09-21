/* Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta 
numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

Exemplu 1:
Input: 1
Output: “Luni”

Exemplu 2:
Input: 5
Output: “Vineri” */

function ziSaptamana(numar) {
  switch (numar) {
    case 1:
      return 'Luni';
    case 2:
      return 'Marti';
    case 3:
      return 'Miercuri';
    case 4:
      return 'Joi';
    case 5:
      return 'Vineri';
    case 6:
      return 'Sambata';
    case 7:
      return 'Duminica';
    default:
      return 'Oops! Zilele saptamanii sunt numerotate de la 1 la 7.';
  }
}

console.log(ziSaptamana(1));
console.log(ziSaptamana(5));
console.log(ziSaptamana(10));
