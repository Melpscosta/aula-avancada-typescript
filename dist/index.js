"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GerenciadorVeiculos_1 = require("./classes/GerenciadorVeiculos");
// Criando os objetos Carro e Moto
const meuCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};
const minhaMoto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};
const gerenciadorCarros = new GerenciadorVeiculos_1.GerenciadorVeiculos();
gerenciadorCarros.adicionar(meuCarro);
const gerenciadorMotos = new GerenciadorVeiculos_1.GerenciadorVeiculos();
gerenciadorMotos.adicionar(minhaMoto);
console.log("Carros cadastrados:", gerenciadorCarros.listarVeiculos());
console.log("Motos cadastradas:", gerenciadorMotos.listarVeiculos());
gerenciadorCarros.remover(meuCarro);
console.log("Carros após remoção:", gerenciadorCarros.listarVeiculos());
gerenciadorMotos.remover(minhaMoto);
console.log("Motos após remoção:", gerenciadorMotos.listarVeiculos());
