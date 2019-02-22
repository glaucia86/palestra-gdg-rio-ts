"use strict";
/**
 * arquivo: main.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo do uso de Generics em TypeScript
 */
var ListarItens = /** @class */ (function () {
    /**
     * Construtor da classe 'ListarItens'
     */
    function ListarItens() {
        this.itens = [];
    }
    ListarItens.prototype.adicionar = function (item) {
        this.itens.push(item);
    };
    ListarItens.prototype.retornar = function (index) {
        return this.itens[index];
    };
    return ListarItens;
}());
var listarString = new ListarItens();
listarString.adicionar('Glaucia Lemos');
listarString.adicionar('32');
// listarString.adicionar(123);
console.log(listarString.retornar(0).substr(0, 7));
var listarNumero = new ListarItens();
listarNumero.adicionar(1);
// listarNumero.adicionar('Glaucia Lemos');
listarNumero.adicionar(2);
