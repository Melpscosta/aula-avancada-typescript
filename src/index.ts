// src/index.ts
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";

// Criando os objetos Carro e Moto
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
gerenciadorCarros.adicionar(meuCarro);

const gerenciadorMotos = new GerenciadorVeiculos<Moto>();
gerenciadorMotos.adicionar(minhaMoto);

console.log("Carros cadastrados:", gerenciadorCarros.listarVeiculos());
console.log("Motos cadastradas:", gerenciadorMotos.listarVeiculos());

gerenciadorCarros.remover(meuCarro);
console.log("Carros após remoção:", gerenciadorCarros.listarVeiculos());

gerenciadorMotos.remover(minhaMoto);
console.log("Motos após remoção:", gerenciadorMotos.listarVeiculos());
