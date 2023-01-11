import { ComboApiService } from './../../services/api/combo/combo-api-service';
import { OrdemServicoApiService } from './../../services/api/ordem-servico/ordem-servico-api-service';
import { OrdemServico } from './../../models/ordem-servico';
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state-service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AbstractPages } from '../AbstractPages';
import { AlertType } from 'src/app/models/payloads/Alert';

@Component({
  selector: 'app-page-detalha-ordem-servico',
  templateUrl: './page-detalha-ordem-servico.component.html',
  styleUrls: ['./page-detalha-ordem-servico.component.css'],
})
export class PageDetalhaOrdemServicoComponent
  extends AbstractPages
  implements OnInit
{
  public selectedRow!: OrdemServico;
  public formOrdemServico!: FormGroup;

  // Combos
  public comboVeiculo: any;
  public comboCliente: any;

  constructor(
    private stateService: StateService,
    private formBuilder: FormBuilder,
    private service: OrdemServicoApiService,
    private comboService: ComboApiService ) {
    super();
    this.buildForm(new OrdemServico());
  }

  ngOnInit(): void {
    // Obtem item selecionado na tela anterior
    this.selectedRow = this.stateService.data as OrdemServico;
    console.log('Detalhe => ' + this.selectedRow.codigo);

    // faz a consulta pela API e constroi o formulario
    const data = this.callDetailService(this.selectedRow);
    this.buildForm(data);

    // Inicializa os combos
    this.callVeiculoService();
    this.callClienteService();
  }

  /**
   * ---------------------------------------------------------------
   *
   *        Pesquisa
   *
   * ---------------------------------------------------------------
   */

  callDetailService(ordemServico: OrdemServico): OrdemServico {
    // Implementar chamada API de detalhe se precisar!!!
    console.log(JSON.stringify(ordemServico));
    return ordemServico;
  }

  buildForm(ordemServico: OrdemServico): void {
    this.formOrdemServico = this.formBuilder.group({
      codigo: new FormControl({ value: ordemServico.codigo, disabled: true }),
      dataInicio: new FormControl({
        value: ordemServico.dataInicio,
        disabled: false,
      }),
      dataFinal: new FormControl({
        value: ordemServico.dataFinal,
        disabled: false,
      }),
      idCliente: new FormControl({
        value: ordemServico.idCliente,
        disabled: false,
      }),
      nomeCliente: new FormControl({
        value: ordemServico.nomeCliente,
        disabled: false,
      }),
      idVeiculo: new FormControl({
        value: ordemServico.idVeiculo,
        disabled: false,
      }),
      veiculo: new FormControl({
        value: ordemServico.veiculo,
        disabled: false,
      }),
      placa: new FormControl({ value: ordemServico.placa, disabled: false }),
    });
  }

  /**
   * ---------------------------------------------------------------
   *
   *        Combos
   *
   * ---------------------------------------------------------------
   */

  callVeiculoService(): void {
    this.comboService.doFindAllVeiculos().subscribe({
      next: (data) => {
        this.comboVeiculo = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.showMessage(
          'Não foi possível efetuar a consulta por veiculos!',
          AlertType.error
        );
      },
    });
  }

  callClienteService(): void {
    this.comboService.doFindAllClientes().subscribe({
      next: (data) => {
        this.comboCliente = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.showMessage(
          'Não foi possível efetuar a consulta por clientes!',
          AlertType.error
        );
      },
    });
  }

  /**
   * ---------------------------------------------------------------
   *
   *        update
   *
   * ---------------------------------------------------------------
   */

  update(): void {}
}
