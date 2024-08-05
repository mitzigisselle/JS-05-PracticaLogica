/*

Factorial
Escriba un programa que solicite un número entero n. Donde 1 <= n. Resuelve esto usando recursividad.



*/
let n = parseInt(prompt("Ingrese un numero:"))
var total = 1;
    
for (i=1; i<=n; i++) {
    total = total * i;
}

console.log(total);