/**
 * arquivo: main.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo do uso do strict --ts-checks em arquivos JavaScript
 */

// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function example(a, b) {
    return a + b;
}

example(1, true);

/* let foo = 32;

// [js] Property 
let upperString = foo.toUpperCase(); */