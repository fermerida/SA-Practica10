# Practica 10 SA

En esta practica se utilizarán practicas derivadas de DevOps. En este caso se requiere desplegar el ambiente completo sobre docker utilizando un dockerfile.

En la anterior practica se utilizó una integración de Jenkins con el repositorio Github y las pruebas en SonarQube. En esta integración se generará una construcción de artefactos del proyecto y un analisis con SonarQube.

En la practica anterior se utilizo DevOps y se agrega un estandard de versiones para los releases. En la practica 5 se creo la rama develop, en esta ocasión se creará la rama feature.

Además de esto se agrego un analisis con sonarcube de pruebas unitarias. 

Se estará utilizando SEMVER y se utilizara una herramienta de construcción de artefactos. Esta forma nos indica lo siguiente:

* Versión mayor con cambios que rompe la compatibilidad 
* Menor versión con caracteristicas nuevas agregadas 
* Versión de patch que arregla bugs en la versións 

Se espera utilizar una aplicación creada en la practica 4. Esta es una aplicación con microservicios que resuleva el problema de una aplicación de repartición de comida que maneje clientes, restaurantes y repartidores. En este caso se crea 3 mini servicios con comunicación entre ellos. 

Se espera utilizar la coordinación de servicios para la practica 3. En este metodo cada uno de los servicios llaman al servicio que necesiten. Se espera utilizar la coreografía de servicios para la practica 4. En este metodo se esta utilizando un ESB que coordinará los accesos a todos los servicios.

Las funcionalidades serán las siguientes:
* **ESB**
    * Coordinación de servicios
    * Manejo de rutas
* **Cliente**
    * Solicitar pedido al restaurante
    * Verificar estado del pedido al restaurante
    * Verificar estado del pedido al repartidor
* **Restaurante**
    * Recibir pedido del cliente
    * Informar estado del pedido al cliente
    * Avisar al repartidor que ya está listo el pedido
* **Repartidor**
    * Recibir pedido del restaurante
    * Informar estado del pedido al cliente
    * Marcar como entregado

## Demostración
Video de la demostración de la practica 10:
[Video](https://youtu.be/0BUWUHwjf5k)

Video de la demostración de la practica 7:
[Video](https://youtu.be/0BUWUHwjf5k)

Video de la demostración de la practica 6:
[Video](https://youtu.be/0BUWUHwjf5k)

Video de la demostración de la practica 5:
[Video](https://youtu.be/nnvDeYU_gec)

Video de la demostración de la practica 4:
[Video](https://youtu.be/IhvOnv_bFNw)


## Getting Started

Para correr la practica será necesario acceder a su carpeta y correr el siguiente comando en la terminal.
```
node app.js
```
Esto mostrará el inicio y se podrá seleccionar una de las funcionalidades especificadas previamente. 


### Prerequisitos

Esta aplicación sera implementada utilizando JavaScript y será necesario tener instalado NodeJS para correrlo.

### Instalación de dependencias

Para instalar todas las dependencias es necesario utilizar el siguiente comando
```
npm install
```

### Construido con

* **NodeJS** - El framework de desarrollo
* **Express** - Utilizado un servidor mediante la utilización de express para que pueda consumir la API externa
* **Javascript** - Lenguaje de desarrollo
* **Html** - Para la visualización de las opciones

# Formateo y estandarés de codigo

Al utilizarse Javascript para la implementación se selecciono el estandard de codigo [Standard JS](https://standardjs.com/)

Tambien se utilizo html con el estandard de codigo [Ckan](https://docs.ckan.org/en/2.8/contributing/html.html)

# Author

Author de la practica como parte del curso de Software avanzado de la Universidad de San Carlos de Guatemala.

Fernando Andrés Mérida Antón - 201314713