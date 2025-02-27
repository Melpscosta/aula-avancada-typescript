import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";

const estoque = new EstoqueVeiculos();

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

//exercicio 2 

estoque.adicionarEstoque("Toyota Corolla", 10);
estoque.adicionarEstoque("Honda CB 500", 5);
estoque.adicionarEstoque("Toyota Corolla", 5); 

console.log("Estoque de Toyota Corolla:", estoque.consultarEstoque("Toyota Corolla")); 
console.log("Estoque de Honda CB 500:", estoque.consultarEstoque("Honda CB 500"));

estoque.removerEstoque("Toyota Corolla", 3); 
console.log("Estoque de Toyota Corolla após remoção:", estoque.consultarEstoque("Toyota Corolla"));

estoque.removerEstoque("Honda CB 500", 6);