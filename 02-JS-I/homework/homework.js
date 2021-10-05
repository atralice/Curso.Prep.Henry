
// realizado por johann cruz

// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< Updated upstream
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8;

// Crea una variable booleana:
const nuevoBool = true;
=======
const nuevaString = "hola"

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true
>>>>>>> Stashed changes

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

 
// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
<<<<<<< Updated upstream
    return str;
=======
  return str


  
>>>>>>> Stashed changes
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
<<<<<<< Updated upstream
  return x + y;
=======
 return x + y 

 

  
>>>>>>> Stashed changes
}

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
<<<<<<< Updated upstream
  return x - y;
=======
   
 return x - y 
  
  
>>>>>>> Stashed changes
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
<<<<<<< Updated upstream
  return x * y;
=======

  return  x * y 
  
>>>>>>> Stashed changes
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< Updated upstream
  return x / y;
=======
  return  x / y
  
>>>>>>> Stashed changes
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< Updated upstream
  if (x === y) {
    return true;
  } else {
    return false;
  }
=======
  if (x == y){
  return true}
  else{ return false}


  
>>>>>>> Stashed changes
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< Updated upstream
  return str1.length === str2.length;
=======
  if(str1.length==str2.length){
    return true
  }
  else {
   return false

  }

  
>>>>>>> Stashed changes
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< Updated upstream
  if(num < 90) {
    return true;
  } else {
    return false;
  }
=======

  if(num < 90 ){
    return true
  }
  else {
   return false

  }




  
>>>>>>> Stashed changes
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< Updated upstream
  return num > 50;
=======
  if(num >50){
    return true
  }
  else {
   return false

  }




  
>>>>>>> Stashed changes
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
<<<<<<< Updated upstream
  return x % y;
=======

  return x%y 
  
>>>>>>> Stashed changes
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< Updated upstream
  if( num % 2 === 0) {
    return true;
  } else {
    return false;
  }
=======
  
  if( num % 2 == 0){
    return true
  }
  else {
   return false

  }



  
>>>>>>> Stashed changes
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< Updated upstream
  if(num % 2 === 1) {
    return true;
  } else {
    return false;
  }
=======

  if(num % 2 != 0){
    return true
  }
  else {
   return false

  }

  
>>>>>>> Stashed changes
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< Updated upstream
  return Math.pow(num, 2);
=======

  return num*num
  
>>>>>>> Stashed changes
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< Updated upstream
  return num * num * num;
=======
  return Math.pow(num, 3)
  
>>>>>>> Stashed changes
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
<<<<<<< Updated upstream
  return Math.pow(num, exponent);
=======

  return Math.pow(num, exponent)
  
>>>>>>> Stashed changes
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
<<<<<<< Updated upstream
  // var resto = num % 1;
  // var entero = num - resto;
  // if (resto >= 0.5) {
  //   return entero + 1;
  // } else {
  //   return entero;
  // }
  return Math.round(num);
=======
 return Math.round(num)


  
>>>>>>> Stashed changes
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
<<<<<<< Updated upstream
  return Math.ceil(num);
=======
 return Math.ceil(num)
>>>>>>> Stashed changes
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
<<<<<<< Updated upstream
  return Math.random();
=======
 return Math.random()


  
>>>>>>> Stashed changes
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
  if(numero === 0) {
    return false;
  }
  else if(numero > 0) {
    return "Es positivo";
  }
  else {
    return "Es negativo";
  }
}



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< Updated upstream
  var combinado = nombre + ' ' + apellido;
  return combinado;
=======
  return  `${nombre} ${apellido}`
  
>>>>>>> Stashed changes
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola ' + nombre + '!';
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
<<<<<<< Updated upstream
  return alto * ancho;
=======
  return  alto * ancho
  
>>>>>>> Stashed changes
}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
<<<<<<< Updated upstream
  return lado * 4
=======

  return lado + lado + lado + lado 
  
>>>>>>> Stashed changes
}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura)/2

return (base * altura)/2 


}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
<<<<<<< Updated upstream
  return euro * 1.2
=======

  return euro* 1.20

  
>>>>>>> Stashed changes
}

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if(letra.length > 1){
    return "Dato incorrecto"
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"
<<<<<<< Updated upstream
=======




  
}

>>>>>>> Stashed changes

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
