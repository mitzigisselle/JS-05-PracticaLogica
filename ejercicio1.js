/*

Perfil del usuario
Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.

*/

let usuario = prompt("Ingrese su nombre: ");
let edad = prompt("Ingresa tu edad: ");
alert("Ahora ingresa 3 peliculas favoritas")
let primera = prompt("Ingresa tu primera pelicula: ");
let segundo = prompt("Ingresa tu segunda pelicula");
let  tercera = prompt("Ingresa tu tercera pelicula");



console.log(`Tu usuario es : ${usuario}`);
console.log(`Tu edad es : ${edad}`);
console.log(`Tus peliculas favoritas son : ${primera}, ${segundo}, y ${tercera}`);
console.log(`la pelicula ${tercera} es una de tus favoritas`)

