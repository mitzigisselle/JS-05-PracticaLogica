/*
Alarma
Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
*/

let segundos = parseInt(prompt("Ingrese despues de cuantos segundos quiere que suene la alarma:"));
let mensaje = ("Alarma sonando!!!!!!");

setTimeout(() => {alert(mensaje);}, segundos * 1000)

