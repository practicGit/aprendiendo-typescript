"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Definimos una función que toma el nombre de una persona.
// La sintaxis `: string` es TypeScript, que especifica el tipo de dato.
function saludar(Luis) {
    // En los lenguajes de programación, esta es la forma de mostrar información en la terminal.
    console.log(`Hola, ${Luis}! Bienvenido a la Fase 2.`);
}
// Llamamos a la función con un valor de tipo string
saludar("Luis");
// Si intentáramos pasar un número, TypeScript nos daría un error antes de ejecutar el código
// saludar(123);
//# sourceMappingURL=index.js.map