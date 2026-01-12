function removeDuplicata(array) {

    const arraySemDuplicados = array.filter((pos, i) => array.indexOf(pos) === i)

    console.log(arraySemDuplicados);

}

<<<<<<< HEAD
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
=======
function embaralhaElementos(arr){

      for (let i = arr.length - 1; i > 0; i--){
    
          const j = Math.floor(Math.random() * (i + 1));

          [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
>>>>>>> cf3c3d7 (adicionando funcoes em arrays e tratando erros)
} 

console.log(embaralhaElementos([10,20,30,40,50]))
