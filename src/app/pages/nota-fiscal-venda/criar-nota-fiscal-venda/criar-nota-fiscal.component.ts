import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaFiscalService } from 'src/app/services/nota-fiscal.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { NotaFiscal } from 'src/app/models/NotaFiscal';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-criar-nota-fiscal',
  templateUrl: './criar-nota-fiscal.component.html',
  styleUrls: ['./criar-nota-fiscal.component.css'],
})
export class CriarNotaFiscalComponent implements OnInit {
  clientes: Cliente[] = [];
  notaFiscal: NotaFiscal = {
    dataEmissao: new Date(),
    valorTotal: 0,
    tipoId: 2,
    icms: 0,
    ipi: 0,
    pis: 0,
    cofins: 0,
    statusId: 1,
    numeroDocumento: 0,
    descricao: '',
    notaFiscalProdutos: [],
  };

  dropdownConfig = {
    displayKey: 'nome', // Campo a ser exibido no dropdown
    search: true, // Ativa a pesquisa
    clearable: true, // Permite limpar a seleção
    placeholder: 'Selecione um cliente',
    height: 'auto', // Altura do dropdown
  };

  isFocused: { [key: string]: boolean } = {
    valorTotal: false,
    icms: false,
    ipi: false,
    pis: false,
    cofins: false,
  };

  impostosCalculados: boolean = false;
  isEditMode: boolean = false;

  constructor(
    private notaFiscalService: NotaFiscalService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.buscarClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.notaFiscalService.buscarNotaFiscalPorId(id).subscribe((nota) => {
        this.notaFiscal = nota;
        this.impostosCalculados = true;
      });
    }
  }

  calcularImpostos(): void {
    this.notaFiscal.icms = parseFloat(
      (this.notaFiscal.valorTotal * 0.18).toFixed(2)
    );
    this.notaFiscal.ipi = parseFloat(
      (this.notaFiscal.valorTotal * 0.05).toFixed(2)
    );
    this.notaFiscal.pis = parseFloat(
      (this.notaFiscal.valorTotal * 0.01).toFixed(2)
    );
    this.notaFiscal.cofins = parseFloat(
      (this.notaFiscal.valorTotal * 0.02).toFixed(2)
    );

    this.impostosCalculados = true;
  }

  salvarNota(): void {
      this.notaFiscal.valorTotal = Math.abs(this.notaFiscal.valorTotal);
      this.notaFiscal.icms = Math.abs(this.notaFiscal.icms);
      this.notaFiscal.ipi = Math.abs(this.notaFiscal.ipi);
      this.notaFiscal.pis = Math.abs(this.notaFiscal.pis);
      this.notaFiscal.cofins = Math.abs(this.notaFiscal.cofins);

    if (this.isEditMode) {
      this.notaFiscalService.atualizarRascunho(this.notaFiscal).subscribe({
        next: (nota) => {
          alert('Rascunho de Nota Fiscal atualizado!');
          this.router.navigate(['/notas-fiscais-venda']);
        },
        error: (error) => {
          console.log(`Erro ao atualizar Nota Fiscal!`, JSON.stringify(error));
          alert(`Erro ao atualizar Nota Fiscal!`);
        },
      });
    } else {
      this.notaFiscalService.criarRascunho(this.notaFiscal).subscribe({
        next: (nota) => {
          alert('Nota Fiscal salva!');
          this.router.navigate(['/notas-fiscais-venda']);
        },
        error: (error) => {
          console.log(`Erro ao salvar Nota Fiscal!`, JSON.stringify(error));
          alert(`Erro ao salvar Nota Fiscal!`);
        },
      });
    }
  }

  onFocus(field: string) {
    this.isFocused[field] = true;
  }

  onBlur(field: string) {
    this.isFocused[field] = false;
  }

  buscarClientes(term: string, item: any) {
    const normalizarBusca = term.trim().toLowerCase();

    const buscaSelect = `${
      item.id
    } - ${item.nome.toLowerCase()} ${item.documentoIdentificacao.toLowerCase()}`;

    return buscaSelect.includes(normalizarBusca);
  }
}
