/* eslint-disable no-undef */
const {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
} = require('../homework');


describe('obtenerMayor(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(obtenerMayor(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(obtenerMayor(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(obtenerMayor(1000, 1000)).toBe(1000);
  });
});

describe('mayoriaDeEdad(edad)', function() {
  it('should return \'Allowed\'if edad is equal or greater than 18', function() {
    expect(mayoriaDeEdad(18)).toBe('Allowed');
    expect(mayoriaDeEdad(35)).toBe('Allowed');
  });
  it('should return \'Not allowed\'if edad is less than 18', function() {
    expect(mayoriaDeEdad(7)).toBe('Not allowed');
  });
});

describe('conection(status)', function() {
  it('should return the conection state of user', function() {
    expect(conection(1)).toBe('Online');
    expect(conection(2)).toBe('Away');
    expect(conection(3)).toBe('Offline');
    expect(conection()).toBe('Offline');
  });
});

describe('saludo(idioma)', function() {
  it('should return \'Guten Tag!\' for aleman', function() {
    expect(saludo('aleman')).toBe('Guten Tag!');
  });
  it('should return \'Hello!\' for ingles', function() {
    expect(saludo('ingles')).toBe('Hello!');
  });
  it('should return \'Ni Hao!\' for mandarin', function() {
    expect(saludo('mandarin')).toBe('Ni Hao!');
  });
  it('should return \'Hola!\' if no argument is passed in or if a idioma beyond ingles, mandarin, and aleman is passed in.', function() {
    expect(saludo('frances')).toBe('Hola!');
    expect(saludo()).toBe('Hola!');
  });
});

describe('colors(color)', function() {
  it('should return \'This is {color}\'', function() {
    expect(colors("blue")).toBe('This is blue');
    expect(colors("red")).toBe('This is red');
    expect(colors("green")).toBe('This is green');
    expect(colors("orange")).toBe('This is orange');
  });
  it('should return \'Color not found\' if there is no argument or the argument is none of the expected ones', function() {
    expect(colors()).toBe('Color not found');
    expect(colors("pink")).toBe('Color not found');
  });
});

describe('esDiezOCinco(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(esDiezOCinco(10)).toBe(true);
    expect(esDiezOCinco(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(esDiezOCinco(11)).toBe(false);
    expect(esDiezOCinco(6)).toBe(false);
    expect(esDiezOCinco(0)).toBe(false);
    expect(esDiezOCinco(5.01)).toBe(false);
  });
});

describe('estaEnRango(num)', function() {
  it('should return true if num is inside range', function() {
    expect(estaEnRango(35.5)).toBe(true);
    expect(estaEnRango(40)).toBe(true);
    expect(estaEnRango(49)).toBe(true);
    expect(estaEnRango(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(estaEnRango(10)).toBe(false);
    expect(estaEnRango(20)).toBe(false);
    expect(estaEnRango(50)).toBe(false);
    expect(estaEnRango(100)).toBe(false);
  });
});

describe('esEntero(num)', function() {
  it('should return true if num is 5', function() {
    expect(esEntero(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(esEntero(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(esEntero(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(esEntero(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(fizzBuzz(4)).toBe(4);
  });
});

describe('operadoresLogicos(num1, num2, num3)', function() {
  it('should return \'Número 1 es mayor y positivo\' if num1 is positive and if it is greater than num2 and num3', function() {
    expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
  });
  it('should return \'Hay negativos\' if any of the arguments are negative', function() {
    expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
  });
  it('should return num3 + 1 if num3 is greater than num1 and num2', function() {
    expect(operadoresLogicos(1, 3, 10)).toBe(11);
  });
  it('should return \'Error\' if any of the arguments are equal 0', function() {
    expect(operadoresLogicos(1, 0, 10)).toBe('Error');
  });
  it('should return false if none of the conditions are met', function() {
    expect(operadoresLogicos(10, 30, 6)).toBe(false);
  });
});

describe('esPrimo(num)', function() {
  it('should return true if num is prime', function() {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(97)).toBe(true);
    expect(esPrimo(11)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(esPrimo(9)).toBe(false);
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(10)).toBe(false);
    expect(esPrimo(100)).toBe(false);
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});

describe ('esVerdadero(valor)', function() {
  it('should return Soy verdadero if valor is true', function() {
    expect(esVerdadero(true)).toBe("Soy verdadero");
  });
  it('should return Soy falso if valor is false', function() {
    expect(esVerdadero(false)).toBe("Soy falso");
  });
});

describe ('tablaDelSeis()', function() {
  it('should return multiplication table of 6', function() {
    expect(tablaDelSeis()).toEqual([0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
  });
});

describe ('tieneTresDigitos(numero)', function() {
  it('should return true if numero has 3 digits', function() {
    expect(tieneTresDigitos(100)).toBe(true);
    expect(tieneTresDigitos(820)).toBe(true);
    expect(tieneTresDigitos(900)).toBe(true);
    expect(tieneTresDigitos(10)).toBe(false);
    expect(tieneTresDigitos(20000)).toBe(false);
  });
});

describe('doWhile(numero)', function() {
  it('should add 5 to number until reaching a limit of 8 times and return the sum value', function() {
    expect(doWhile(5)).toBe(45);
    expect(doWhile(100)).toBe(140);
    expect(doWhile(-1)).toBe(39);
  });
});
