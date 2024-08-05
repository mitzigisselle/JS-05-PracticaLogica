/*
Palíndromo
Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
*/


let frase = prompt("Ingrese una frase:");
let minus = frase.toLowerCase();


let minusFrase = minus.replace(/[^a-z0-9]/g, '');
let reversa = minusFrase.split('').reverse()
let palindromo = reversa.join('');

if (palindromo == minusFrase){
    console.log("Es palindromo");
}else{
    console.log("No es palíndromo");
}