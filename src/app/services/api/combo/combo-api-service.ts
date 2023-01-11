import { AbstractApiServices } from 'src/app/services/api/abstract-api-services';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseApp } from "src/app/models/payloads/ResponseApp";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComboApiService extends AbstractApiServices {

  private urlClienteBase = `${environment.api.cliente}`;
  private urlVeiculoBase = `${environment.api.veiculo}`;

  constructor(private http: HttpClient) {
    super();
  }

  doFindAllClientes(): Observable<any> {
    return this.http.get(
      `${this.urlClienteBase}`,
      { headers: super.getHeaders(this.urlClienteBase) as HttpHeaders });
  }

  doFindAllVeiculos(): Observable<any> {
    return this.http.get(
      `${this.urlVeiculoBase}`,
      { headers: super.getHeaders(this.urlVeiculoBase) as HttpHeaders });
  }
}
