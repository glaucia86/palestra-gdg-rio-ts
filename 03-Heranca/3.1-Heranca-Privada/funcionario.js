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
var Pessoa_1 = /** @class */ (function () {
    // protected constructor(nomeFuncionario: string) { this.nome = nomeFuncionario; }
    /**
     * Construtor da Classe: 'Pessoa'
     */
    function Pessoa_1(nomeFuncionario) {
        this.nome = nomeFuncionario;
    }
    return Pessoa_1;
}());
var Funcionario_1 = /** @class */ (function (_super) {
    __extends(Funcionario_1, _super);
    /**
     * Construtor da Classe: 'Funcionário'
     */
    function Funcionario_1(nome, departamento) {
        var _this = _super.call(this, nome) || this;
        _this.departamento = departamento;
        return _this;
    }
    /**
     * Método da Classe 'Funcionário':
     */
    Funcionario_1.prototype.apresentarNovoFuncionario = function () {
        console.log("Ol\u00E1. Meu nome \u00E9 " + this.nome + " e eu trabalho no departamento de " + this.departamento);
    };
    return Funcionario_1;
}(Pessoa_1));
var glaucia = new Funcionario_1("Glaucia Lemos", "Inovação & Desenvolvimento");
console.log(glaucia.apresentarNovoFuncionario());
// let jose = new Pessoa_1("José"); // descomentar --> Aqui dará erro pois o construtor está como 'protected'
