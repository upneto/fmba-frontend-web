import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/models/ordem-servico';
import { AlertService } from 'src/app/services/alert/alert-service';
import { StateService } from 'src/app/services/state/state-service';

@Component({
  selector: 'app-page-lista-ordem-servico',
  templateUrl: './page-lista-ordem-servico.component.html',
  styleUrls: ['./page-lista-ordem-servico.component.css']
})
export class PageListaOrdemServicoComponent implements OnInit {

  public displayedColumns: string[] = ['codigo', 'nomeCliente', 'veiculo', 'placa'];
  public dataSource!: OrdemServico[];
  public clickedRows = new Set<OrdemServico>();

  constructor(private router: Router, private stateService: StateService, private alert: AlertService) { }

  ngOnInit(): void {
    this.dataSource = this.pesquisarTodos();
  }

  pesquisarTodos(): OrdemServico[] {
    const data: OrdemServico[] = [
      { codigo: 123456789, nomeCliente: 'Luiz inácio lula da silva', veiculo: 'Brasilia', placa: 'XPTO1234' },
      { codigo: 987654321, nomeCliente: 'Luiz inácio lula da silva', veiculo: 'Fusca', placa: 'XPTO4563' },
      { codigo: 852963147, nomeCliente: 'Luiz inácio lula da silva', veiculo: 'Ferrari', placa: 'XPTO9876' }
    ];
    return data;
  }

  incluirNovo() {
    this.router.navigateByUrl('nova-ordem-servico');
  }

  detalhar(row: OrdemServico) {
    this.stateService.data = row;
    console.log("Selecionado => " + this.stateService.data)
    this.router.navigateByUrl('detalhe-ordem-servico');
  }
}
