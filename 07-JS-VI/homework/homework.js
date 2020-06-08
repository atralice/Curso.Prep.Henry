// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Primera opcion
  // var numeros = [1,2,3,4,5]
  // var suma = 0;
  // for(var i = 0; i < numeros.length; i++) {
  //   suma = suma + numeros[i];
  // }
  // cb(suma);

  // Segunda opcion
  var sumaTotal = numeros.reduce(function(acc, curr) {
    return acc + curr;
  },0);
  cb(sumaTotal);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  // array.forEach(function(el, index) {
  //   cb(el);
  // });
  for(var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // var array = [1,2,3,4,5]
  // function cb (e) {console.log(e)}
  // nuevoarray = []
  // var nuevoArray = [];
  // for(var i = 0; i < array.length; i++) {
  //   nuevoArray.push(cb(array[i]));
  //   nuevoArray[i] = cb(array[i]);
  // }
  var nuevoArray = array.map(function(el) {
    return cb(el);
  });
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
