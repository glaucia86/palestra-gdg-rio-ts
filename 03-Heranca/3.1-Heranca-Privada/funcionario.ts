/**
 * arquivo: funcionario.ts
 * Data: 20/02/2019
 * Autora: Glaucia Lemos
 * Descrição: exemplo em como criar classes em TypeScript
 */

class Pessoa_1 {
    protected nome: string;
    // protected constructor(nomeFuncionario: string) { this.nome = nomeFuncionario; }
    
    /**
     * Construtor da Classe: 'Pessoa'
     */
    protected constructor(nomeFuncionario: string) {
        this.nome = nomeFuncionario;
    }
}

class Funcionario_1 extends Pessoa_1 {
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

let glaucia = new Funcionario_1("Glaucia Lemos", "Inovação & Desenvolvimento");
console.log(glaucia.apresentarNovoFuncionario());
// let jose = new Pessoa_1("José"); // descomentar --> Aqui dará erro pois o construtor está como 'protected'