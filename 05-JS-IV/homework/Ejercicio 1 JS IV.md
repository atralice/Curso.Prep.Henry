
Objetos
Los objetos son una parte fundamental de JS. Cuando definimos variables dijimos que eran un elemento en el cual el programa podia almacenar un valor para buscarlo y utilizarlo mas tarde. En cierta forma los objetos son cosas muy similares, con la diferencia de que un mismo objeto puede almacenar varios pares de 'clave-valor' (se le llama clave, o 'key' al nombre, y valor al dato que contiene). Los objetos tambien pueden tener funciones definidas dentro suyo. Es por eso que, la mayoria de las cosas con las que trabajamos en JS son, en algun punto, un objeto. 

Propiedades
Se llama propiedades a los pares de 'clave-valor' contenidos en un objeto. Son simplemente como las "variables" del objeto.

Metodos
Se llama metodos a las funciones contenidas dentro de un objeto. Cualquier funcion definida dentro de un objeto, sera un metodo de ese objeto. 

Bucles `for...in`
El bucle "for...in" se utiliza para iterar dentro de las propiedades del objeto. Asi como tenemos el bucle FOR, que podemos utilizar en los arrays, y que itera en el indice numerico del array; los objetos no tienen un indice numerico, es por esto que JS tiene este tipo de bucle integrado. 

Notacion de puntos vs notacion de corchetes
Estos dos tipos de notaciones son, basicamente, dos formas distintas de invocar una propiedad o un metodo de un objeto. La primera seria: 'miObjeto.suMetodo' o 'miObjeto.suClave', que llama a una funcion de ese objeto, o al valor de una clave, respectivamente. La segunda forma de notacion es: 'miObjeto['suMetodo']' o 'miObjeto['suclave']', y hace exactamente lo mismo. Vale la pena aclarar que dentro de los corchetes debemos poner comillas al nombre de la propiedad o del metodo en cuestion. Tambien vale la pena mencionar que si tenemos definida una variable que apunta a una propiedad o metodo del objeto, podemos pasarla entre corchetes para llamar a esa propiedad u objeto; pero no asi con la notacion de puntos (es decir, no nos permite utilizar una variable que apunte a algo dentro del objeto).
