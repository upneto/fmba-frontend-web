import { AbstractApiServices } from 'src/app/services/api/abstract-api-services';
import { OrdemServico } from './../../../models/ordem-servico';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdemServicoApiService extends AbstractApiServices {

  private urlBase = `${environment.api.ordemServico}`;

  constructor(private http: HttpClient) {
    super();
  }

  doFindAll(): Observable<any> {
    return this.http.get(
      `${this.urlBase}`,
      { headers: super.getHeaders(this.urlBase) as HttpHeaders });
  }

  doFindById(id: string): Observable<any> {
    return this.http.get(
      `${this.urlBase}/${id}`,
      { headers: super.getHeaders(this.urlBase) as HttpHeaders });
  }

  doInsert(ordemServico: OrdemServico): Observable<any> {
    return this.http.post(
      `${this.urlBase}`,
      JSON.stringify(ordemServico),
      { headers: super.getHeaders(this.urlBase) as HttpHeaders });
  }

  doUpdate(ordemServico: OrdemServico): Observable<any> {
    return this.http.put(
      `${this.urlBase}`,
      JSON.stringify(ordemServico),
      { headers: super.getHeaders(this.urlBase) as HttpHeaders });
  }

  doDelete(id: string): Observable<any> {
    return this.http.delete(
      `${this.urlBase}/${id}`,
      { headers: super.getHeaders(this.urlBase) as HttpHeaders });
  }
}
