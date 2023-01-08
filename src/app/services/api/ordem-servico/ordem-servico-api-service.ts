import { OrdemServico } from './../../../models/ordem-servico';
import { Observable } from "rxjs";
import { ResponseApp } from "src/app/models/payloads/ResponseApp";
import { environment } from "src/environments/environment";
import { CustomHttpClient } from "../../custom-http-client";

export class OrdemServicoApiService {

  private urlBase!: string;

  constructor(private httpClient: CustomHttpClient) {
    this.urlBase = `${environment.api.ordemServico}`;
  }

  doFindAll(): Observable<ResponseApp> {
    return this.httpClient.get(`${this.urlBase}`);
  }

  doFindById(id: string): Observable<ResponseApp> {
    return this.httpClient.get(`${this.urlBase}/${id}`);
  }

  doInsert(ordemServico: OrdemServico): Observable<ResponseApp> {
    return this.httpClient.post(`${this.urlBase}`, ordemServico);
  }

  doUpdate(ordemServico: OrdemServico): Observable<ResponseApp> {
    return this.httpClient.put(`${this.urlBase}`, ordemServico);
  }

  doDelete(id: string): Observable<ResponseApp> {
    return this.httpClient.delete(`${this.urlBase}/${id}`);
  }
}
