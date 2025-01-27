import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:5146/clientes';

  constructor(private http: HttpClient) {}

  // Criar novo cliente
  criarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}`, cliente);
  }

  // Listar todos os clientes
  buscarClientes(pagina: number = 1, limite: number = 10): Observable<Cliente[]> {
    let params = new HttpParams()
      .set('pagina', pagina.toString())
      .set('limite', limite.toString());

    return this.http.get<Cliente[]>(`${this.apiUrl}`, { params });
  }
}
