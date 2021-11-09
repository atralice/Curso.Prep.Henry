---
title: Editor de Texto
eleventyNavigation:
  key: Editor de Texto
  # parent: Primeros Pasos
  order: 2
---

# Editor de Texto

Para poder escribir código que pueda ser interpretado por un lenguaje de programación, necesitamos utilizar un editor de texto.
Hay varios, puedes probarlos y optar por el que te sientas más a gusto.

A continuación veremos una lista de los más populares:

## Sublime Text

![Sublime Text](/_src/assets/00-PrimerosPasos/sublimeText_screen.png)

Es un editor de texto liviano, que cuenta con una serie de plugins para adaptarlo a las necesidades de cada desarrollador.

Es multiplataforma, por lo que se puede instalar tanto en Windows, como Linux y OS X.

Para instalarlo, realizaremos los siguientes pasos:

### En Windows o en OS X

1. Nos dirigimos a la página oficial de [Sublime Text](https://www.sublimetext.com).

2. Al ingresar, detectará automáticamente el sistema operativo que tenemos, y nos sugerirá descargar el instalador apropiado.

3. Presionamos el botón **_Download_**.

4. Elegimos la opción adecuada según nuestro sistema operativo e iniciamos la descarga.

<div class=''>

![Sublime Text Download](/_src/assets/00-PrimerosPasos/sublimeText_download.png)

</div>

5. Finalizada la descarga, ejecutamos el instalador, seleccionamos las opciones **_siguiente, siguiente, etc_**, hasta completar el proceso.

### En Linux, en la distribución Ubuntu y derivados

1. Nos dirigimos al sitio oficial de Sublime Text. Aquí encontrarás las instrucciones para instalarlo:

<https://www.sublimetext.com/docs/3/linux_repositories.html>

2. En la terminal, ejecutamos el siguiente comando, para instalar la clave GPG:

```shell
wget -q0 - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```

3. Para asegurarnos de que `apt` esté configurado para trabajar con orígenes https, ejecutamos:

```shell
sudo apt-get install apt-transport-https
```

4. Luego para agregar el repositorio estable, ejecutamos:

```shell
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```

5. Finalmente, procedemos a instalar el programa:

```shell
sudo apt-get install sublime-text
```

Ahora, si en el **Menú de inicio** buscamos **Sublime text**, veremos la siguiente imagen:

<div class=''>

![Sublime Text Linux](/_src/assets/00-PrimerosPasos/sublimeText_linux.png)

</div>

---

## Atom

<!-- ![Atom Logo](/_src/assets/00-PrimerosPasos/atom_logo.png) -->

<div class=''>

![Atom Site](/_src/assets/00-PrimerosPasos/atom_site.png)

</div>

Es un editor de código abierto, disponible tanto para Windows, como Linux y para OS X.

Tiene integrada una consola de Git y Github, para llevar un control de versiones de tus proyectos.
Para comenzar el proceso de instalación, realizamos los siguientes pasos:

En Windows, Linux o en OS X, nos dirigimos al sitio oficial, mediante el siguiente enlace:

<https://atom.io/>

Al ingresar, el navegador detecta automáticamente el instalador que necesitamos bajar, según nuestro sistema operativo.

Allí, presionamos el botón Download para almacenarlo en nuestra computadora.

### En Windows

Una vez finalizada la descarga, hacemos doble click en el instalador y esperamos a que finalice el proceso de instalación.

### En Ubuntu y derivados

Descomprimimos el instalador, hacemos doble click, y nos dirigimos a: `/usr/bin/atom`

Al hacer doble click, se abrirá el editor.

---

## Visual Studio Code

<!-- ![VSC Logo](/_src/assets/00-PrimerosPasos/vsc_logo.png) -->

![VSC Console](/_src/assets/00-PrimerosPasos/vsc_console.png)

Es un editor desarrollado por Microsoft.

Tiene integrado el control de versiones mediante Git y Github para tener un seguimiento de tus proyectos. Brinda una cantidad de extensiones que facilitan el trabajo de un desarrollador.

Para descargarlo, nos dirigimos al sitio oficial, en la sección Dowload y descargamos el instalador según nuestro Sistema Operativo:

<https://code.visualstudio.com/download>

![VSC Download](/_src/assets/00-PrimerosPasos/vsc_download.png)

Una vez finalizada la descarga, procedemos a ejecutar el instalador.
