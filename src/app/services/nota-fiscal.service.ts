import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { NotaFiscal } from '../models/NotaFiscal';
import { NotaFiscalStatus } from '../models/NotaFiscalStatus';


@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {
  private apiUrl = 'http://localhost:5146/notas-fiscais';

  constructor(private http: HttpClient) {}

  criarRascunho(notaFiscal: NotaFiscal): Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>(`${this.apiUrl}`, notaFiscal);
  }

  buscarNotasFiscais(tipoId: number, relations: boolean, pagina: number = 1, limite: number = 10): Observable<NotaFiscal[]> {
    let params = new HttpParams()
      .set('pagina', pagina.toString())
      .set('limite', limite.toString());

    if (tipoId > 0) {
      params = params.append('tipoId', tipoId.toString());
    }

    if (relations) {
      params = params.append('relations', 'true');
    }

    return this.http.get<NotaFiscal[]>(`${this.apiUrl}`, { params });
  }

  buscarNotaFiscalPorId(id: string): Observable<NotaFiscal> {
    return this.http.get<NotaFiscal>(`${this.apiUrl}/${id}`);
  }

  atualizarRascunho(notaFiscal: NotaFiscal): Observable<NotaFiscal> {
    return this.http.put<NotaFiscal>(
      `${this.apiUrl}/${notaFiscal.id}`,
      notaFiscal
    );
  }

  lancarNota(id: number): Observable<NotaFiscal> {
    return this.http.patch<NotaFiscal>(`${this.apiUrl}/${id}?statusId=2`, {});
  }

  deletarRascunho(id: number): Observable<NotaFiscal> {
    return this.http.delete<NotaFiscal>(`${this.apiUrl}/${id}`, {});
  }
}
