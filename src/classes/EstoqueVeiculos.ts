export class EstoqueVeiculos {
  private estoque: { [modelo: string]: number } = {};

  adicionarEstoque(modelo: string, quantidade: number): void {
    if (this.estoque[modelo]) {
      this.estoque[modelo] += quantidade;
    } else {
      this.estoque[modelo] = quantidade;
    }
  }

  removerEstoque(modelo: string, quantidade: number): void {
    if (this.estoque[modelo]) {
      if (this.estoque[modelo] >= quantidade) {
        this.estoque[modelo] -= quantidade;
      } else {
        console.log(`Quantidade insuficiente de ${modelo} no estoque.`);
      }
    } else {
      console.log(`Modelo ${modelo} não encontrado no estoque.`);
    }
  }

  consultarEstoque(modelo: string): number {
    return this.estoque[modelo] || 0;
  }
}
