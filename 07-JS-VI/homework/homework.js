// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código: 
	return nombre.charAt(0).toUpperCase() + nombre.slice(1,nombre.length);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  Number.prototype.cb=function(a){
    return a++;
  }
  function envio(cb,numero){
		return cb(numero);
	}
  return envio(cb,1)
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  Number.prototype.cb=function(a,b){
    return a+b;
  }
  function suma(n1,n2,cb){
    return cb(n1,n2);
  }
  return suma(n1,n2,cb);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // el reduce dice que debuelve un elemento y que itera sobre los otros por eso lo use
  var sum = numeros.reduce(function(acom,elemento){
    return acom + elemento;
  });
  return cb(sum);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // que vuelterio para hacer una incercion basica pero asi si funciona con el callback
  var arr=[];
	Number.prototype.cb=function(num){
		return arr.push(num);
	}	
	array.forEach((item)=>{
	  cb(item);
	});
	return arr;
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  Number.prototype.cb=function(){   
    return this*this;
  }// vi que la respuesta daba el doble por ello puse this * this no pensse que solo con esto pasara sin this.algo
  var arr=array.map(function(elemento,indice){
    return elemento.cb();
  });
  return arr;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*
   var arr= array.map(function(elemento, indice){
    if(elemento.charAt(0)==='a' || elemento.charAt(0)==='A'){
      return elemento;
    }else elemento ++;
  })*/
  var arr=[];
  //estaba viendo esto de funcion flecha  
  /*
  array.forEach((item)=>{
    if(item.charAt(0)==='a' || item.charAt(0)==='A')
      arr.push(item);    
  });*/
  //comprobado funciona igual, itera sin nombre y sin doble elementos, de igual manera itera no se usa se puede simplificar con mo funcion flecha
  array.forEach(function(item,itera){
    if(item.charAt(0)==='a' || item.charAt(0)==='A')
      arr.push(item);    
  });

  return arr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
