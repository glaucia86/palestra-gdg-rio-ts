/**
 * arquivo: animal.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo em como criar classes em TypeScript
 */

class Animal {
    public nome: string;
    public preco: number;
    public raca: string;

    /**
     * Construtor simples inerente a classe 'Animal'
     */
    constructor(nome: string, preco: number, raca: string) {
        this.nome = nome;
        this.preco = preco;
        this.raca = raca;
    }
    
    // Método da Classe:   
    latir(tipoLatido: string = 'Au Au') {   
        console.log(`O latido do ${this.nome} é ${tipoLatido}!!`)    
    }      
}

let animal = new Animal('Jake', 1000, 'Pischer');
console.log(`O preço do ${animal.nome} é R$ ${animal.preco}. Pois a raça dele é um ${animal.raca} original`);
animal.latir();