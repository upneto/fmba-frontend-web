import { OrdemServico } from './../../models/ordem-servico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert-service';
import { StateService } from 'src/app/services/state/state-service';

@Component({
  selector: 'app-page-detalha-ordem-servico',
  templateUrl: './page-detalha-ordem-servico.component.html',
  styleUrls: ['./page-detalha-ordem-servico.component.css']
})
export class PageDetalhaOrdemServicoComponent implements OnInit {

  public selectedRow?: OrdemServico;

  constructor(private router: Router, private stateService: StateService, private alert: AlertService) { }

  ngOnInit(): void {
    this.selectedRow = this.stateService.data as OrdemServico;
    console.log("Detalhe => " + this.selectedRow.codigo);
  }

}
