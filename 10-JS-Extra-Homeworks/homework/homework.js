// No cambies los nombres de las funciones.

function palindromo(frase) {
    //Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
    //es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
    //Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural" ---> Devuelve true
    //Tu código:
  }

// Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
//un par clave-valor en forma de matriz.
//Ejemplo: 
/*objecto({
    D: 1,
    B: 2,
    C: 3
  }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  

function deObjetoAmatriz(objeto){
  //Escribe tu código aquí
  const arreglo =[]
	for( x in objeto){
    arreglo.push([x, objeto[x]])
	}
  return arreglo
}


//Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
// al principio de la palabra.
//Ejemplo: soyHENRY -> HENRYsoy

function capToFront(s) {
 //Escribe tu código aquí
 let cadena="";
 let cadena2="";
	for( let i=0; i< s.length; i++){
    if(s[i] === s[i].toUpperCase()){
        cadena+=s[i];
    }else{
        cadena2+=s[i]
    }
}
return cadena.concat('', cadena2);
}


//Escribe una función, la cual recibe un número y determina si es o no capicúa.
//La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
//izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"


function capicua(numero){
  //Escribe tu código aquí
  let cadena= numero.toString();
  let cadenaInvertida = "";
	
  cadenaInvertida = cadena.split("").reverse().join("");
	if(cadena == cadenaInvertida){
        return "Es capicua"
  }
  return "No es capicua"

}

//Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
//y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.


function deleteAbc(cadena){
  //Escribe tu código aquí
  let cadena2="";
  for(let i=0; i< cadena.length ; i++){
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      cadena2+= cadena[i];
    }
  }
  return cadena2;
}


//Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
//retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
//Si no tienen elementos en común, retornar un arreglo vacío.
//Aclaración: los arreglos no necesariamente tienen la misma longitud


function buscoInterseccion(arreglo1, arreglo2){
  //Escribe tu código aquí
  let arreglo =[]
  for(let i=0; i< arreglo1.length; i++){
     for(let j=0; j< arreglo2.length; j++){
      if(arreglo1[i]===arreglo2[j]){
        arreglo.push(arreglo1[i])
      }
     }
  }
  return arreglo
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   capToFront,
   capicua,
   deleteAbc,
   buscoInterseccion,
   palindromo,
};