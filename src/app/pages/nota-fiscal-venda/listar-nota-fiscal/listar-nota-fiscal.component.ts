import { Component, OnInit } from '@angular/core';
import { NotaFiscalService } from 'src/app/services/nota-fiscal.service';
import { NotaFiscal } from 'src/app/models/NotaFiscal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-nota-fiscal',
  templateUrl: './listar-nota-fiscal.component.html',
  styleUrls: ['./listar-nota-fiscal.component.css'],
})
export class ListarNotaFiscalComponent implements OnInit {
  notasFiscais: NotaFiscal[] = [];
  paginaAtual: number = 1;
  limitePorPagina: number = 10;
  carregando: boolean = false;
  temMaisNotas: boolean = true;

  constructor(
    private notaFiscalService: NotaFiscalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarNotas();
  }

  carregarNotas(): void {
    this.carregando = true;
    this.notaFiscalService
      .buscarNotasFiscais(2, true, this.paginaAtual, this.limitePorPagina)
      .subscribe((notas) => {
        this.notasFiscais = notas;
        this.temMaisNotas = notas.length === this.limitePorPagina;
        this.carregando = false;
      });
  }

  lancarNota(id: number): void {
    this.notaFiscalService.lancarNota(id).subscribe(() => {
      alert('Nota Fiscal lançada!');
      this.carregarNotas();
    });
  }

  deletarRascunho(id: number): void {
    this.notaFiscalService.deletarRascunho(id).subscribe(() => {
      alert('Rascunho de Nota Fiscal deletado!');
      this.carregarNotas();
    });
  }

  navegarParaCriarNotasFiscaisVenda() {
    this.router.navigate(['/notas-fiscais-venda/criar']);
  }

  navegarParaEditarNotasFiscaisVenda(id: number) {
    this.router.navigate([`/notas-fiscais-venda/editar/${id}`]);
  }

  irParaPagina(pagina: number): void {
    if (pagina > 0 && (this.temMaisNotas || pagina < this.paginaAtual)) {
      this.paginaAtual = pagina;
      this.carregarNotas();
    }
  }
}
