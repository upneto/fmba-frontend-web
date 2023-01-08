import { Observable } from "rxjs";
import { ResponseApp } from "src/app/models/payloads/ResponseApp";
import { environment } from "src/environments/environment";
import { CustomHttpClient } from "../../custom-http-client";

export class ComboApiService {

  private urlClienteBase!: string;
  private urlVeiculoBase!: string;

  constructor(private httpClient: CustomHttpClient) {
    this.urlClienteBase = `${environment.api.cliente}`;
    this.urlVeiculoBase = `${environment.api.veiculo}`;
  }

  doFindAllClientes(): Observable<ResponseApp> {
    return this.httpClient.get(`${this.urlClienteBase}`);
  }

  doFindAllVeiculos(): Observable<ResponseApp> {
    return this.httpClient.get(`${this.urlVeiculoBase}`);
  }
}
