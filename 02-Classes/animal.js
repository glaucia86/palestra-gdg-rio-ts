"use strict";
/**
 * arquivo: animal.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo em como criar classes em TypeScript
 */
var Animal = /** @class */ (function () {
    /**
     * Construtor simples inerente a classe 'Animal'
     */
    function Animal(nome, preco, raca) {
        this.nome = nome;
        this.preco = preco;
        this.raca = raca;
    }
    // Método da Classe:   
    Animal.prototype.latir = function (tipoLatido) {
        if (tipoLatido === void 0) { tipoLatido = 'Au Au'; }
        console.log("O latido do " + this.nome + " \u00E9 " + tipoLatido + "!!");
    };
    return Animal;
}());
var animal = new Animal('Jake', 1000, 'Pischer');
console.log("O pre\u00E7o do " + animal.nome + " \u00E9 R$ " + animal.preco + ". Pois a ra\u00E7a dele \u00E9 um " + animal.raca + " original");
animal.latir();
