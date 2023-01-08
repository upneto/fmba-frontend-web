import { OrdemServico } from './../../models/ordem-servico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert-service';
import { StateService } from 'src/app/services/state/state-service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface ICombo {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-page-detalha-ordem-servico',
  templateUrl: './page-detalha-ordem-servico.component.html',
  styleUrls: ['./page-detalha-ordem-servico.component.css']
})
export class PageDetalhaOrdemServicoComponent implements OnInit {

  public selectedRow!: OrdemServico;
  public formOrdemServico!: FormGroup;
  public isValid: boolean = true;

  // Veiculo
  public selectedVeiculo!: number;
  public comboVeiculo!: ICombo[];

  // Cliente
  public selectedCliente!: number;
  public comboCliente!: ICombo[];

  constructor(
    private router: Router,
    private stateService: StateService,
    private alert: AlertService,
    private formBuilder: FormBuilder) {
      this.buildForm(new OrdemServico());
    }

  ngOnInit(): void {
    // Obtem item selecionado na tela anterior
    this.selectedRow = this.stateService.data as OrdemServico;
    console.log("Detalhe => " + this.selectedRow.codigo);

    // faz a consulta pela API e constroi o formulario
    const data = this.callService(this.selectedRow);
    this.buildForm(data);
  }

  callService(ordemServico: OrdemServico): OrdemServico {
    // Implementar
    return new OrdemServico();
  }

  buildForm(ordemServico: OrdemServico): void {
    this.formOrdemServico = this.formBuilder.group({
      codigo: new FormControl({ value: ordemServico.codigo, disabled: true }),
      dataInicio: new FormControl({ value: ordemServico.dataInicio, disabled: false }),
      dataFinal: new FormControl({ value: ordemServico.dataFinal, disabled: false }),
      idCliente: new FormControl({ value: ordemServico.idCliente, disabled: false }),
      nomeCliente: new FormControl({ value: ordemServico.nomeCliente, disabled: false }),
      idVeiculo: new FormControl({ value: ordemServico.idVeiculo, disabled: false }),
      veiculo: new FormControl({ value: ordemServico.veiculo, disabled: false }),
      placa: new FormControl({ value: ordemServico.placa, disabled: false })
    });
  }

  insertNew(): void {

  }

}
