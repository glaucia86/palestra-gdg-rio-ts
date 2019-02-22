"use strict";
/**
 * arquivo: funcionario.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo em como criar classes em TypeScript
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    /**
     * Construtor da Classe: 'Pessoa'
     */
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    /**
     * Construtor da Classe: 'Funcionário'
     */
    function Funcionario(nome, departamento) {
        var _this = _super.call(this, nome) || this;
        _this.departamento = departamento;
        return _this;
    }
    /**
     * Método da Classe 'Funcionário':
     */
    Funcionario.prototype.apresentarNovoFuncionario = function () {
        console.log("Ol\u00E1. Meu nome \u00E9 " + this.nome + " e eu trabalho no departamento de " + this.departamento);
    };
    return Funcionario;
}(Pessoa));
var funcionario = new Funcionario("Glaucia Lemos", "Inovação & Desenvolvimento");
console.log(funcionario.apresentarNovoFuncionario());
// console.log(funcionario.nome) // descomentar --> Aqui dará erro pois a propriedade 'nome' está como 'private'
