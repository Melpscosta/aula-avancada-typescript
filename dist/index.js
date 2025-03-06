"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GerenciadorVeiculos_1 = require("./classes/GerenciadorVeiculos");
const EstoqueVeiculos_1 = require("./classes/EstoqueVeiculos");
const FiltroVeiculos_1 = require("./utils/FiltroVeiculos");
const RelatorioVeiculos_1 = require("./utils/RelatorioVeiculos");
const estoque = new EstoqueVeiculos_1.EstoqueVeiculos();
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
//exercicio 2 
estoque.adicionarEstoque("Toyota Corolla", 10);
estoque.adicionarEstoque("Honda CB 500", 5);
estoque.adicionarEstoque("Toyota Corolla", 5);
console.log("Estoque de Toyota Corolla:", estoque.consultarEstoque("Toyota Corolla"));
console.log("Estoque de Honda CB 500:", estoque.consultarEstoque("Honda CB 500"));
estoque.removerEstoque("Toyota Corolla", 3);
console.log("Estoque de Toyota Corolla após remoção:", estoque.consultarEstoque("Toyota Corolla"));
estoque.removerEstoque("Honda CB 500", 6);
//exercicio 3
const veiculos = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022,
        portas: 4,
        acelerar: () => "O carro   está acelerando!",
    },
    {
        marca: "Honda",
        modelo: "CB 500",
        ano: 2021,
        cilindradas: 500,
        acelerar: () => "A moto está acelerando!",
    },
    {
        marca: "Honda",
        modelo: "CB 500",
        ano: 2022,
        cilindradas: 500,
        acelerar: () => "A moto está acelerando!",
    },
    {
        marca: "Toyota",
        modelo: "Hilux",
        ano: 2022,
        portas: 4,
        acelerar: () => "O carro está acelerando!",
    },
];
const veiculos2022 = (0, FiltroVeiculos_1.filtrarPorAno)(veiculos, 2022);
console.log("Veículos de 2022:", veiculos2022);
const hondaVeiculos = (0, FiltroVeiculos_1.filtrarPorMarca)(veiculos, "Honda");
console.log("Veículos da Honda:", hondaVeiculos);
const corollaVeiculos = (0, FiltroVeiculos_1.filtrarPorModelo)(veiculos, "Corolla");
console.log("Veículos modelo Corolla:", corollaVeiculos);
//exercicio 4
const relatorio = (0, RelatorioVeiculos_1.gerarRelatorio)(veiculos);
console.log(relatorio);
