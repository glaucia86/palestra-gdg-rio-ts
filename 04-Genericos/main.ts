/**
 * arquivo: main.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo do uso de Generics em TypeScript
 */

function listaInversa<T>(lista: Array<T>): Array<T> {
    let listaInversaHerois: T[] = [];

    for (let i = lista.length -1; i > 0; i--) {
        listaInversaHerois.push(lista[i]);
    }

    return listaInversaHerois;
}

let nomesHerois = ["Capitão América", "Homem de Ferro", "Pantera Negra", "Mulher Maravilha"];
let numeros = [1,2,3,4,5,6,7];

let listaInversaNomes = listaInversa<string>(nomesHerois);
let listaInversaNumeros = listaInversa<number>(numeros);

console.log(listaInversaNomes);
console.log(listaInversaNumeros);

