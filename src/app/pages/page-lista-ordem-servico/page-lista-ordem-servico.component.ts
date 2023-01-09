import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { StateService } from 'src/app/services/state/state-service';

@Component({
  selector: 'app-page-lista-ordem-servico',
  templateUrl: './page-lista-ordem-servico.component.html',
  styleUrls: ['./page-lista-ordem-servico.component.css'],
})
export class PageListaOrdemServicoComponent implements OnInit {
  public displayedColumns: string[] = [
    'codigo',
    'nomeCliente',
    'veiculo',
    'placa',
  ];
  public dataSource = new MatTableDataSource();
  public clickedRows = new Set<OrdemServico>();
  public filterValues: any = {};
  public filterSelectObj: any = [];

  constructor(
    private router: Router,
    private stateService: StateService,
  ) { }

  /**
   * -----------------------------------------
   *                LISTAR
   * -----------------------------------------
   */

  ngOnInit(): void {
    // Pesquisar lista Ordens de serviço
    let data = this.findAll();

    // Atribui lista à tabela
    this.dataSource.data = data;

    // Cria filtros para a lista
    this.filterSelectObj.filter((o: any) => {
      o.options = this.getFilterObject(data, o.columnProp);
    });
  }

  findAll(): OrdemServico[] {
    const data: OrdemServico[] = [
      {
        codigo: 123456789,
        nomeCliente: 'Luiz inácio lula da silva',
        veiculo: 'Brasilia',
        placa: 'XPTO1234',
      },
      {
        codigo: 987654321,
        nomeCliente: 'Luiz inácio lula da silva',
        veiculo: 'Fusca',
        placa: 'XPTO4563',
      },
      {
        codigo: 852963147,
        nomeCliente: 'Luiz inácio lula da silva',
        veiculo: 'Ferrari',
        placa: 'XPTO9876',
      },
    ];
    return data;
  }

  /**
   * -----------------------------------------
   *            FILTRAR LISTA
   * -----------------------------------------
   */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getFilterObject(fullObj: any, key: any) {
    const uniqChk: any[] = [];
    fullObj.filter((obj: any) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  /**
   * -----------------------------------------
   *             NAVEGACAO
   * -----------------------------------------
   */

  incluirNovo() {
    this.router.navigateByUrl('nova-ordem-servico');
  }

  detalhar(row: OrdemServico) {
    this.stateService.data = row;
    console.log('Selecionado => ' + this.stateService.data);
    this.router.navigateByUrl('detalhe-ordem-servico');
  }
}
