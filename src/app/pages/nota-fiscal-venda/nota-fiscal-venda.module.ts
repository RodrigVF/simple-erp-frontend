import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarNotaFiscalComponent } from './criar-nota-fiscal-venda/criar-nota-fiscal.component';
import { ListarNotaFiscalComponent } from './listar-nota-fiscal/listar-nota-fiscal.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [CriarNotaFiscalComponent, ListarNotaFiscalComponent],
  imports: [CommonModule, FormsModule, NgSelectModule],
  exports: [ListarNotaFiscalComponent],
})
export class NotaFiscalVendaModule {}
