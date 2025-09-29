// 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente
// (o șir de elemente - array). Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare)
// toate informațiile obiectului după crearea acestuia.

// Exemplu 1:
// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

// Dacă se va lucra cu mai multe ingrediente (nu doar 3)
function creeazaReteta(titlu, portii, ingrediente) {
  const reteta = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente,
  };

  console.log('Titlu: ' + reteta.titlu);
  console.log('Portii: ' + reteta.portii);
  console.log('Ingrediente:');
  for (let i = 0; i < reteta.ingrediente.length; i++) {
    console.log('- ' + reteta.ingrediente[i]);
  }

  return reteta;
}

creeazaReteta('Pizza', 3, ['sunca', 'cas', 'ketchup']);
