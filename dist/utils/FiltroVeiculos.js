"use strict";
// src/utils/FiltroVeiculos.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarPorAno = filtrarPorAno;
exports.filtrarPorMarca = filtrarPorMarca;
exports.filtrarPorModelo = filtrarPorModelo;
function filtrarPorAno(veiculos, ano) {
    return veiculos.filter(veiculo => veiculo.ano === ano);
}
function filtrarPorMarca(veiculos, marca) {
    return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}
function filtrarPorModelo(veiculos, modelo) {
    return veiculos.filter(veiculo => veiculo.modelo.toLowerCase() === modelo.toLowerCase());
}
