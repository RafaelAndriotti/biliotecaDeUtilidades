function removeDuplicata(array) {

    const arraySemDuplicados = array.filter((pos, i) => array.indexOf(pos) === i)

    console.log(arraySemDuplicados);

}

function embaralhaElementos(array){

  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy
} 

console.log(embaralhaElementos([10,20,30,40,50]))
