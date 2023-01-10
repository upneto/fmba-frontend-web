import { OrdemServicoApiService } from './../../services/api/ordem-servico/ordem-servico-api-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { StateService } from 'src/app/services/state/state-service';
import { AbstractPages } from '../AbstractPages';
import { AlertType } from 'src/app/models/payloads/Alert';

@Component({
  selector: 'app-page-lista-ordem-servico',
  templateUrl: './page-lista-ordem-servico.component.html',
  styleUrls: ['./page-lista-ordem-servico.component.css'],
})
export class PageListaOrdemServicoComponent extends AbstractPages implements OnInit {
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
    private service: OrdemServicoApiService) {
    super();
  }

  /**
   * -----------------------------------------
   *                LISTAR
   * -----------------------------------------
   */

  ngOnInit(): void {
    // Pesquisar lista Ordens de serviço
    this.findAll();

    // Cria filtros para a lista
    this.filterSelectObj.filter((o: any) => {
      o.options = this.getFilterObject(this.dataSource.data, o.columnProp);
    });
  }

  findAll(): OrdemServico[] {

    let list: OrdemServico[] = [];

    this.service.doFindAll().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.showMessage('Não foi possível efetuar a consulta!', AlertType.error);
      },
    });

    return list;
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
