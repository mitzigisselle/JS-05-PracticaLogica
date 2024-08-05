/*
Numero mas alto
Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
*/

let numeroMayor = Number(prompt("Ingresa 10 numeros"));

for (let i = 2; i <= 10; i++) {
  let numero = Number(prompt(`${i}:`));
  if (numero> numeroMayor) {
    numeroMayor = numero;
  }
}

console.log("El nunmero mayor es: " + numeroMayor);