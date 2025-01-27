import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';



@NgModule({
  declarations: [
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClienteModule { }
