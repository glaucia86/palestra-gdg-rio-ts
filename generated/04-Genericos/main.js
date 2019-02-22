"use strict";
/**
 * arquivo: main.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo do uso de Generics em TypeScript
 */
function listaInversa(lista) {
    var listaInversaHerois = [];
    for (var i = lista.length - 1; i > 0; i--) {
        listaInversaHerois.push(lista[i]);
    }
    return listaInversaHerois;
}
var nomesHerois = ["Capitão América", "Homem de Ferro", "Pantera Negra", "Mulher Maravilha"];
var numeros = [1, 2, 3, 4, 5, 6, 7];
var listaInversaNomes = listaInversa(nomesHerois);
var listaInversaNumeros = listaInversa(numeros);
console.log(listaInversaNomes);
console.log(listaInversaNumeros);
