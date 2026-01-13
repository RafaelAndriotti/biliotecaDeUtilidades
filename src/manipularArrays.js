import { erros } from './err/errors.js'

export function removeDuplicata(array) {

    if (array.length === 0) {
        throw new Error(erros.EMPTY_ARRAY)
    }

    const arraySemDuplicados = array.filter((pos, i) => array.indexOf(pos) === i)

    console.log(arraySemDuplicados);

}

export function embaralhaElementos(arr){

    if (arr.length === 0) {
        throw new Error(erros.EMPTY_ARRAY)
    }

      for (let i = arr.length - 1; i > 0; i--){
    
          const j = Math.floor(Math.random() * (i + 1));

          [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
} 

