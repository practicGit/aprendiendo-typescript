// Definimos una función que toma el nombre de una persona.
// La sintaxis `: string` es TypeScript, que especifica el tipo de dato.
function saludar(Luis: string, Brito: string) {
    // En los lenguajes de programación, esta es la forma de mostrar información en la terminal.
    console.log(`Hola, ${Luis} ${Brito}! Bienvenido a la Fase 2.`);
}

// Llamamos a la función con un valor de tipo string
saludar("Luis", "Brito");

// Si intentáramos pasar un número, TypeScript nos daría un error antes de ejecutar el código
// saludar(123);