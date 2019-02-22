/**
 * arquivo: main.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo do uso de Generics em TypeScript
 */

class ListarItens {
    private itens: any[];

    /**
     * Construtor da classe 'ListarItens'
     */
    constructor() {
        this.itens = [];        
    }

    adicionar<T>(item: T): void {
        this.itens.push(item);
    }

    retornar<K>(index: number): K {
        return this.itens[index];
    }
}

let listarString = new ListarItens();
listarString.adicionar('Glaucia Lemos');
listarString.adicionar('32');
// listarString.adicionar(123);

console.log(listarString.retornar<string>(0).substr(0,7));

let listarNumero = new ListarItens();
listarNumero.adicionar(1);
// listarNumero.adicionar('Glaucia Lemos');
listarNumero.adicionar(2);
