import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  paginaAtual: number = 1;
  limitePorPagina: number = 10;
  carregando: boolean = false;
  temMaisClientes: boolean = true;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.carregando = true;
    this.clienteService.buscarClientes(
      this.paginaAtual,
      this.limitePorPagina
    ).subscribe((clientes) => {
      console.log(clientes)
      this.clientes = clientes;
      this.temMaisClientes = clientes.length === this.limitePorPagina;
      this.carregando = false;
    });
  }

  navegarParaCriarNotasFiscaisVenda() {
    this.router.navigate(['/notas-fiscais-venda/criar']);
  }

  navegarParaEditarNotasFiscaisVenda(id: number) {
    this.router.navigate([`/notas-fiscais-venda/editar/${id}`]);
  }

  irParaPagina(pagina: number): void {
    if (pagina > 0 && (this.temMaisClientes || pagina < this.paginaAtual)) {
      this.paginaAtual = pagina;
      this.carregarClientes();
    }
  }
}

