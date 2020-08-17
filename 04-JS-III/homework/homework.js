// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

// "array" debe ser una matriz de enteros (int/integers)
// Aumenta cada entero por 1
// y devuelve el array
// Tu código:
function incrementarPorUno(array) {
  var a = [];
  for (i = 0; i < array.length ; i++) {
    a.push(array[i] + 1);
  }
  return a
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var a = array
  a.push(elemento)
  return a
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var a = array
  a.unshift(elemento)
  return a
}

function dePalabrasAFrase(palabras) {
// "palabras" es un array de strings/cadenas
// Devuelve un string donde todas las palabras estén concatenadas
// con espacios entre cada palabra
// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
// Tu código:
 return palabras.join(' ')
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for ( i = 0; i < array.length; i++){
    if (array[i] == elemento) {
      return true
    } 
  } return false
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   var suma = 0
   for ( i = 0; i < numeros.length; i++){
     suma = suma + numeros[i]
   } return suma
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var a = 0
  for ( i = 0; i < numeros.length; i++){
    if (numeros[i] > a){
      var a = numeros[i]
    }
  } return a
}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0
    // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
  if (arguments.length < 1){
    return 0
  } else if (arguments.length == 1) {
    return arguments[0]
  }
  var valor = 1
  for ( i = 0; i < arguments.length; i++) {
    valor = valor * arguments[i]
  } return valor
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
