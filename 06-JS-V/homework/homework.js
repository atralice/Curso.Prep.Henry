// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  //esta es la version ES& antigua me faltaba era definir el envio por argumentos con solo opciones no lo sabia y estaba patinando asi como el de saludar lo mescle con lo visto y era asi facil como en los array
/*
  class Usuario{
    constructor(opciones){//esto es el constructor antiguo
      this.usuario=opciones.usuario;
      this.nombre=opciones.nombre;
      this.email=opciones.email;
      this.password=opciones.password;
      this.saludar=function(){
             return `Hola, mi nombre es ${this.nombre}`;
          }
    }
  }
  return Usuario;*/
  // forma moderna para poderlo, como un aplantilla para futuros objetos, esto servira para que funciones para futuras classes
  function Usuario(opciones){//esto es el constructor moderno
    this.usuario=opciones.usuario;
    this.nombre=opciones.nombre;
    this.email=opciones.email;
    this.password=opciones.password;
  }
  Usuario.prototype.saludar=function(){
    return `Hola, mi nombre es ${this.nombre}`;
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar=function(){
    return `Hello World!`;
  }
 
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse=function(){
    var recibe = this, salida="";
    for(var x=recibe.length;x>=0;x--){
      salida = salida + recibe.charAt(x);
   }
   return salida;
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    }
    detalle(){
      return {Nombre:this.nombre, Apellido:this.apellido, Edad: this.edad, Domicilio:this.domicilio};
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var nuevaPersona= new Persona(nombre,apellido,edad,dir);
  return nuevaPersona;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos=function(){
    return `${this.nombre}, ${this.edad} años`;
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
