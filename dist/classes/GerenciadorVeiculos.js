"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorVeiculos = void 0;
class GerenciadorVeiculos {
    constructor() {
        this.veiculos = [];
    }
    adicionar(veiculo) {
        this.veiculos.push(veiculo);
    }
    remover(veiculo) {
        const index = this.veiculos.indexOf(veiculo);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
        }
    }
    listarVeiculos() {
        return this.veiculos;
    }
}
exports.GerenciadorVeiculos = GerenciadorVeiculos;
