"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueVeiculos = void 0;
class EstoqueVeiculos {
    constructor() {
        this.estoque = {};
    }
    adicionarEstoque(modelo, quantidade) {
        if (this.estoque[modelo]) {
            this.estoque[modelo] += quantidade;
        }
        else {
            this.estoque[modelo] = quantidade;
        }
    }
    removerEstoque(modelo, quantidade) {
        if (this.estoque[modelo]) {
            if (this.estoque[modelo] >= quantidade) {
                this.estoque[modelo] -= quantidade;
            }
            else {
                console.log(`Quantidade insuficiente de ${modelo} no estoque.`);
            }
        }
        else {
            console.log(`Modelo ${modelo} não encontrado no estoque.`);
        }
    }
    consultarEstoque(modelo) {
        return this.estoque[modelo] || 0;
    }
}
exports.EstoqueVeiculos = EstoqueVeiculos;
