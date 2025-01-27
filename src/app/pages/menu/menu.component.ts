import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  navegarParaListarNotasFiscaisVenda() {
    this.router.navigate(['/notas-fiscais-venda']);
  }

  navegarParaCriarNotasFiscaisVenda() {
    this.router.navigate(['/notas-fiscais-venda/criar']);
  }

  navegarParaListarClientes() {
    this.router.navigate(['/clientes']);
  }

  notasFiscaisButtons = [
    {
      text: 'Notas Fiscais (Venda)',
      icon: 'fa-file-invoice',
      click: this.navegarParaListarNotasFiscaisVenda.bind(this),
      class: 'btn-primary', // Classe para o botão de "Notas Fiscais"
    },
    {
      text: 'Criar Nota Fiscal (Venda)',
      icon: 'fa-plus-circle',
      click: this.navegarParaCriarNotasFiscaisVenda.bind(this),
      class: 'btn-success', // Classe para o botão de "Criar Nota Fiscal"
    },
  ];

  clientesButtons = [
    {
      text: 'Clientes',
      icon: 'fa-users',
      click: this.navegarParaListarClientes.bind(this),
      class: 'btn-primary',
    },
    {
      text: 'Cadastrar Cliente (Em breve)',
      icon: 'fa-user-plus',
      click: () => {
        console.log('Página de cadastro de clientes em breve!');
      },
      class: 'btn-success disabled',
    },
  ];
}
