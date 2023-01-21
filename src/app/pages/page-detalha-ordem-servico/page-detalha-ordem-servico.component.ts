import { OrdemServico } from './../../models/ordem-servico';
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state-service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AbstractPages } from '../AbstractPages';
import { AlertType } from 'src/app/models/payloads/Alert';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-detalha-ordem-servico',
  templateUrl: './page-detalha-ordem-servico.component.html',
  styleUrls: ['./page-detalha-ordem-servico.component.css'],
})
export class PageDetalhaOrdemServicoComponent extends AbstractPages implements OnInit {

  private urlClienteBase = `${environment.api.cliente}`;
  private urlVeiculoBase = `${environment.api.veiculo}`;
  private urlBase = `${environment.api.ordemServico}`;

  public selectedRow!: OrdemServico;
  public formOrdemServico!: FormGroup;

  // Combos
  public comboVeiculo: any;
  public comboCliente: any;

  constructor(
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private http: HttpClient
  ) {
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
        value: super.convertToDate(ordemServico.dataInicio),
        disabled: false,
      }),
      dataFinal: new FormControl({
        value: super.convertToDate(ordemServico.dataFinal),
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
    this.http.get(`${this.urlVeiculoBase}`, { headers: super.getHeaders() }).subscribe({
      next: (data: any) => {
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
    this.http.get(`${this.urlClienteBase}`, { headers: super.getHeaders() }).subscribe({
      next: (data: any) => {
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

  update(): void {
    const ordemServico = JSON.stringify(this.formOrdemServico.value);
    this.http.put(`${this.urlBase}`, ordemServico, { headers: super.getHeaders() }).subscribe({
      next: (data: any) => {
        this.showMessage('Operação realizada com sucesso!', AlertType.info);
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.showMessage('Não foi possível efetuar a operação!', AlertType.error);
      },
    });
  }
}
