import { Cliente } from './Cliente';
import { NotaFiscalProduto } from './NotaFiscalProduto';


export interface NotaFiscal {
  id?: number;
  clienteId?: number;
  cliente?: Cliente;
  dataEmissao: Date;
  descricao: string;
  numeroDocumento: number;
  valorTotal: number;
  tipoId: 2;
  statusId: 1;
  notaFiscalProdutos: NotaFiscalProduto[];
  icms: number;
  ipi: number;
  pis: number;
  cofins: number;
  notaFiscalStatus?: {
    nome: string;
    descricao: string;
  };
}
