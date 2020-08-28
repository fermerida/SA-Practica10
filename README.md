# Practica 3 SA

Creación de una aplicación con microservicios que resuleva el problema de una aplicación de repartición de comida que maneje clientes, restaurantes y repartidores. 
En este caso se crea 3 mini servicios con comunicación entre ellos.

Las funcionalidades serán las siguientes:
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