// src/utils/FiltroVeiculos.ts

import { Veiculo } from "../interface/Veiculo";

export function filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.ano === ano);
}

export function filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}

export function filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.modelo.toLowerCase() === modelo.toLowerCase());
}
