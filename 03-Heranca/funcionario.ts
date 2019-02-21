/**
 * arquivo: funcionario.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo em como criar classes em TypeScript
 */

class Pessoa {
    protected nome: string;
    
    /**
     * Construtor da Classe: 'Pessoa'
     */
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Funcionario extends Pessoa {
    private departamento: string;

    /**
     * Construtor da Classe: 'Funcionário'
     */
    constructor(nome: string, departamento: string) {
        super(nome);

        this.departamento = departamento;
    }

    /**
     * Método da Classe 'Funcionário':
     */
    public apresentarNovoFuncionario() {
        console.log(`Olá. Meu nome é ${this.nome} e eu trabalho no departamento de ${this.departamento}`);
    }
}

let funcionario = new Funcionario("Glaucia Lemos", "Inovação & Desenvolvimento");
console.log(funcionario.apresentarNovoFuncionario());
// console.log(funcionario.nome) // descomentar --> Aqui dará erro pois a propriedade 'nome' está como 'private'