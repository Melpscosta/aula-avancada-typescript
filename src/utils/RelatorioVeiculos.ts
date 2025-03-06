import { Veiculo } from "../interface/Veiculo";

export function gerarRelatorio(veiculos: Veiculo[]): string {
  let relatorio = "Relatório de Veículos:\n\n";

  veiculos.forEach((veiculo, index) => {
    relatorio += `Veículo ${index + 1}:\n`;
    relatorio += `Marca: ${veiculo.marca}\n`;
    relatorio += `Modelo: ${veiculo.modelo}\n`;
    relatorio += `Ano: ${veiculo.ano}\n`;

    if ('portas' in veiculo) {
      relatorio += `Portas: ${veiculo.portas}\n`;
    }
    if ('cilindradas' in veiculo) {
      relatorio += `Cilindradas: ${veiculo.cilindradas}\n`;
    }

    relatorio += `Acelerar: ${veiculo.acelerar()}\n\n`;
  });

  return relatorio;
}
