export class Negociacoes {
    constructor() {
        // private negociacoes: Negociacao[] = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
