import { OrdemServico } from './../../models/ordem-servico';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { Combo } from 'src/app/models/payloads/Combo';

@Component({
  selector: 'app-page-nova-ordem-servico',
  templateUrl: './page-nova-ordem-servico.component.html',
  styleUrls: ['./page-nova-ordem-servico.component.css'],
})
export class PageNovaOrdemServicoComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public selectedRow!: OrdemServico;
  public formOrdemServico!: FormGroup;
  public isValid: boolean = true;

  // Veiculo
  public comboVeiculo!: Combo[];
  public veiculoCtrl: FormControl<Combo> = new FormControl<any>(null);
  public veiculoFilterCtrl: FormControl<string> = new FormControl<any>('');
  public filteredVeiculos: ReplaySubject<Combo[]> = new ReplaySubject<Combo[]>(1);

  // Cliente
  public comboCliente!: Combo[];
  public clienteCtrl: FormControl<Combo> = new FormControl<any>(null);
  public clienteFilterCtrl: FormControl<string> = new FormControl<any>('');
  public filteredClientes: ReplaySubject<Combo[]> = new ReplaySubject<Combo[]>(1);

  @ViewChild('singleSelectVeiculo', { static: true }) singleSelectVeiculo!: MatSelect;
  @ViewChild('singleSelectCliente', { static: true }) singleSelectCliente!: MatSelect;
  protected _onDestroy = new Subject<void>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.buildForm(new OrdemServico());
  }

  ngOnInit(): void {

    this.buildForm(new OrdemServico());

    // Inicializa os combos
    let comboVeiculo = this.callVeiculoService();
    this.buildComboVeiculo(comboVeiculo);

    let comboCliente = this.callClienteService();
    this.buildComboCliente(comboCliente);
  }

  /**
   * ---------------------------------------------------------------
   *
   *        Pesquisa
   *
   * ---------------------------------------------------------------
   */

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

  callVeiculoService(): Combo[] {
    let combo: any[] = [
      { value: '1', label: 'Fusca' },
      { value: '2', label: 'Mercedes' },
      { value: '3', label: 'Ford Escort' },
    ];
    return combo;
  }

  callClienteService(): Combo[] {
    let combo: any[] = [
      { value: '1', label: 'Otavianos pereira' },
      { value: '2', label: 'Jirumundo Otaku' },
    ];
    return combo;
  }

  buildComboVeiculo(combo: Combo[]): void {
    this.veiculoCtrl.setValue(combo[10]);
    this.filteredVeiculos.next(combo.slice());
    this.veiculoFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCombo(combo, this.veiculoFilterCtrl, this.filteredVeiculos);
      });
  }

  buildComboCliente(combo: Combo[]): void {
    this.clienteCtrl.setValue(combo[10]);
    this.filteredClientes.next(combo.slice());
    this.clienteFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCombo(combo, this.clienteFilterCtrl, this.filteredClientes);
      });
  }

  ngAfterViewInit() {
    this.setInitialFilterValue(this.filteredVeiculos, this.singleSelectVeiculo);
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  setInitialFilterValue(
    filtered: ReplaySubject<Combo[]>,
    singleSelect: MatSelect
  ) {
    filtered.pipe(take(1), takeUntil(this._onDestroy)).subscribe(() => {
      singleSelect.compareWith = (a: Combo, b: Combo) =>
        a && b && a.value === b.value;
    });
  }

  filterCombo(
    combo: Combo[],
    filterCtrl: FormControl<string>,
    filteredCombo: ReplaySubject<Combo[]>
  ) {
    if (!combo) {
      return;
    }

    let search = filterCtrl.value;
    if (!search) {
      filteredCombo.next(combo.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    filteredCombo.next(
      combo.filter((combo) => combo.label.toLowerCase().indexOf(search) > -1)
    );
  }

  /**
   * ---------------------------------------------------------------
   *
   *        update
   *
   * ---------------------------------------------------------------
   */

  insert(): void {}
}
