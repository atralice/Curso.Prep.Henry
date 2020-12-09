/* eslint-disable no-undef */
const {
    deObjetoAmatriz,
    capToFront,
    capicua,
    deleteAbc,
    buscoInterseccion,
    palindromo
} = require('../homework');

describe('deObjetoAmatriz(objeto)', function() {
    it('should return an array, where each element represents a key-value pair in the form of an array.', function() {
      expect(deObjetoAmatriz({ x: 1, y: 2 })).toEqual([["x" , 1],["y" , 2]]);
      expect(deObjetoAmatriz({ x: 10, y: 25 })).toEqual([["x" , 10],["y" , 25]]);
    });
  });

describe('capToFront(s)', function() {
    it('should return all capital letters at the beginning of the word.', function() {
      expect(capToFront("soyHENRY")).toEqual("HENRYsoy");
      expect(capToFront("DESArrollaDOR")).toEqual("DESADORrrolla");
    });
  }); 

describe('capicua(numero)', function() {
    it('should return Es capicua if the number is read from right to left', function() {
      expect(capicua(12321)).toEqual("Es capicua");
      expect(capicua(1111)).toEqual("Es capicua");
      expect(capicua(105217)).toEqual("No es capicua");
      expect(capicua(7878700)).toEqual("No es capicua");

    });
  });  

describe('deleteAbc(cadena)', function() {
    it('should return the modified string if it has the letters abc or the same string otherwise', function() {
      expect(deleteAbc("abcefgh")).toEqual("efgh");
      expect(deleteAbc("abc")).toEqual("");
      expect(deleteAbc("plural")).toEqual("plurl");
      expect(deleteAbc("limon")).toEqual("limon");

    });
  });  

  describe('buscoInterseccion(arreglo1, arreglo2)', function() {
    it('should return the common elements of the array, and in case they do not match, return an empty array', function() {
      expect(buscoInterseccion([1, 2 , 3], [1, 5, 8 , 3])).toEqual([1, 3]);
      expect(buscoInterseccion([7 , 23, 4], [23, 70])).toEqual([23]);
      expect(buscoInterseccion([1, 20 , 3], [22, 5, 7])).toEqual([]);
    });
  });    


describe('palindromo(frase)', function() {
	it('should return true if the phrase recieved is a palindrome', function() {});
});

