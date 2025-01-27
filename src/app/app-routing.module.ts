import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ListarNotaFiscalComponent } from './pages/nota-fiscal-venda/listar-nota-fiscal/listar-nota-fiscal.component';
import { CriarNotaFiscalComponent } from './pages/nota-fiscal-venda/criar-nota-fiscal-venda/criar-nota-fiscal.component';
import { ListarClienteComponent } from './pages/cliente/listar-cliente/listar-cliente.component';


const routes: Routes = [
  { path: '', component: MenuComponent, pathMatch: 'full' },
  {
    path: 'notas-fiscais-venda',
    component: ListarNotaFiscalComponent,
  },
  {
    path: 'notas-fiscais-venda',
    children: [
      {
        path: 'criar',
        component: CriarNotaFiscalComponent, // Componente para criar
      },
      {
        path: 'editar/:id',
        component: CriarNotaFiscalComponent, // Componente para editar
      },
    ],
  },
  {
    path: 'clientes',
    component: ListarClienteComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
