<p align='left'>
    <img  src='../logo.png' height='70px'>
</p>
<table width="100%" style='table-layout:fixed;'>
  <tr>
    <td>
      <a href="https://airtable.com/shrSzEYT4idEFGB8d?prefill_clase=09-CSS-Positioning">
        <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
        <br>
        Hacé click acá para dejar tu feedback sobre esta clase.
      </a>
    </td>
  </tr>
</table>
# Lección 9: CSS Intermedio

En esta lección cubriremos:

* Introducción al posicionamiento.
* Propiedad "display".
* Propiedad "position".
* Usar "position" para posicionar elementos.
* Introducción a Flexbox.

<iframe src="https://player.vimeo.com/video/425169846" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Introducción al posicionamiento

Armar un layout y hacer que todo se vea limpio es lo que la mayoría de gente espera hacer cuando empiezan a aprender CSS. Posicionar elementos HTML en la página con CSS es posiblemente la habilidad más poderosa que tiene CSS, aunque también puede ser la más **frustrante**. En esta lección aprenderemos distintas formas de posicionar elementos en la página.

## La propiedad "display"

Esta propiedad es una de las más importante de posicionamiento en CSS. Podemos usarla para controlar cómo se muestra el contenido en relación a los elementos alrededor de este, y cómo se comportan en la pantalla.

```css
  div {
    display: <valor de la propiedad>;
  }
```

Hay dos tipos de elementos "display" ya incluidos en HTML; "block" e "inline",

### Elementos "block"

Un elemento "block" siempre arrancará en una nueva línea, y siempre tomará el ancho máximo del contenedor en el cual se encuentre. ¿Recuerdas que en la lección anterior aprendimos que el elemento `<p>` siempre empieza en una nueva línea? Es porque es un elemento "block", como también lo son los `div` y los `<h1-6>`.

### Elementos "inline"

Los elementos "inline" son opuestos a los "block", dado que no comenzarán en una nueva linea y sólo tomarán el espacio suficiente que necesiten para mostrar la información dentro del mismo. Los elementos `<span>`, `<a>` e `<img>` son inline.

Podemos controlar cómo un elemento se comporta usando la propiedad "display". Si queremos que un elemento "inline" actúe como uno "block", le definimos:

```css
  div {
    display: block;
  }
```

Y vice-versa.

### "Display" tiene otras reglas que debemos conocer:

### none

Definir como valor "none" hará que el elemento desaparezca completamente. No debe ser confundido con la regla `visibility: hidden;` dado que esta hace que el elemento sea invisible pero no lo elimina de la página (el espacio continuará ocupado por _algo_). Si un elemento está definido como `display: none;` no habrá signos de él en la página.

### flex

Flex es una nueva herramienta que nos ofrece CSS3, la cual nos da la habilidad de controlar en qué parte de la página queremos que estén nuestros items. Hablaremos sobre ella más adelante en esta lección.

### grid

Esta es una característica de CSS3 que nos permitirá crear sistemas de grillas dentro de un elemento.

## La propiedad "position"

Esta propiedad especificará qué tipo de método de posicionamiento usará un elemento HTML. Hay 5 métodos diferentes disponibles (aquí veremos 4 de ellos).

```css
  div {
    position: <valor de la propiedad>;
  }
```

### static

Este es el posicionamiento por defecto de un elemento, definir un elemento como "estático" no afectará al comportamiento del mismo de ninguna manera.

### relative

Usar este valor mantendrá el elemento posicionado como si fuese estático, pero nos permitirá usar otros métodos de posicionamiento de elementos que veremos enseguida.

### fixed

Definir un elemento como "fijo" hará que éste quede fijo en un lugar de la pantalla, sin importar cuánto navegemos, "scroleemos" o movamos la pantalla, el elemento se quedará en ese lugar. Los casos de uso pueden ser un header o la barra de navegació de un sitio web.

### absolute

"absolute" es muy parecido a "fixed", excepto que el elemento quedará anclado de forma relativa al elemento _parent_ (siempre que el elemento padre tenga alguna posición definida, excepto "static").

## Usar propiedades de posición para posicionar elementos

Ahora que hemos definido nuestros métodos de posicionamiento al estilo que queremos usar, podemos arrancar a posicionar nuestro elemento. (Nota: esto funciona para cada método de posición que no sea "static", dado que no afecta al elemento de ninguna forma).

### top, left, right y bottom

Después de haber definido nuestro método de posicionamiento, podemos usar las propiedades "top", "left", "right" y "bottom" para acomodar nuestro elemento. El valor que le des a cada uno determinará qué tan lejos del borde quedará nuestro elemento. Por ejemplo, si queremos que nuestro elemento esté en la esquina superior izquierda (con una posición fija), podemos usar lo siguiente:

```css
  div {
    position: fixed;
    top: 0;
    left: 0;
  }
```

Si lo quisiésemos 10 píxeles debajo del límite superior y 10 píxeles del borde derecho:

```css
  div {
    position: fixed;
    top: 10px;
    right: 10px;
  }
```

## Introducción a Flexbox

Introducido en CSS3, Flexbos es una nueva e interesante característica. La misma nos permite posicionar nuestros elementos en relación a su _parent_ y entre ellos. Ya no necesitamos aplicar "hacks" para cosas como centrar elementos. Esto nos permite que el diseño "mobile-friendly" sea excelente y nos hace dedicar menos tiempo tratando de posicionar elementos como corresponde. Flexbox se puede complicar muy rápido, pero veremos los aspectos básicos a continuación.

### "display: flex" e "inline-flex"

Como mencionamos anteriormente en la sección de la propiedad "display", uno de los valores puede ser "flex", esto hace que cualquier contenedor sea un "flex block". También podemos usar "inline-flex" para hacer que el elemento sea "flex" e "inline", aunque para la mayor parte del tiempo, usaremos simplemente "flex".

### "justify-content" y "align-items"

Ahora que nuestro contenedor (elemento) es "flex", podemos imaginarlo como una grilla con columnas que van de izquierdo a derecha y filas que van de arriba a abajo. Podemos usar las propiedades "justify-content" y "align-items" para decirle al contenedor dónde queremos que estén los elementos en la grilla. En principio, "justify-content" aplicará al movimiento de izquierda a derecha (fila), y "align-items" lo hará de arriba a abajo (columna). Tenemos unas reglas que debemos aplicar a cada una de estas reglas:

* `center`: centrará el elemento (o grupo de elementos) a lo largo de un eje en el que aplica esta regla.
* `flex-start`: Este es el valor por defecto de cada "flex box", mostrará todos los elementos en un grupo al comienzo de una fila o columna.
* `flex-end`: es lo opuesto a `flex-start`, mostrará los elementos al final de un grupo al comienzo de una fila o columna.
* `space-between`: Esta regla espaciará uniformemente el elemento o los elementos a lo largo de la fila o columna. El primer elemento estará como `flex-start` y el último como `flex-end`.
* `space-around`: Similar a `space-between`, pero  aplicará márgenes igualitarios entre cada elemento, por lo que ningún elemento estara directamente sobre el borde del contenedor.

Ejemplo: si quisiésemos nuestros elementos centrados en el medio exacto de un "flex box", usaríamos lo siguiente:

```css
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

### "flex-direction"

Esta propiedad puede cambiar cómo el navegador interpreta `justify-content` (JC) y `align-items` (AI). El valor por defecto es "row" (fila), y esto funciona en la mayoría de los casos, pero algunas veces queremos cambiar cómo funciona la dirección del contenido.

* `row`: es la dirección por defecto. JC aplica de izquierda a derecha, AI aplica de arriba a abajo.
+ `column`: Esto invertirá qué propiedad controla qué dirección. JC aplicará de arriba a abajo y AI de izquierda a derecha.
* `row-reverse`: Sólo invierte la dirección de JC de derecha a izquierda, no afecta a AI.
* `column-reverse`: Sólo invierte la dirección de AI de abajo a arriba, no afecta a JC.

### "align-self"

Por último, cubriremos una propiedad más avanzada llamada "align-self". La misma será aplicada a un elemento dentro del "flex box" del cual queremos separar el control de `align-items`. Si le damos la propiedad `align-self`, podemos colocarla en cualquier lugar a lo largo del eje de elementos de alineación que queramos. (Nota: NO existe `justify-self`, esta es la razón principal por la que los desarrolladores cambiarán la dirección de "flex").

### Abre una nueva ventana en el navegador y completa "homework.html"

## Recursos adicionales

* [Flexbox Froggy ](http://flexboxfroggy.com/) (un excelente tutorial sobre flexbox)
* [Conceptos básicos de FlexBox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox)
* [CSS tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [MDN: Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* [MDN: CSS display propery](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
* [MDN: CSS position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
