import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseApp } from '../models/payloads/ResponseApp';

@Injectable()
export class CustomHttpClient {

  constructor(private httpClient: HttpClient) {}

  /**
   * HTTP get
   * @param url Endereco de acesso (endpoint)
   * @param paginacao variavel de controle da paginação
   */
  get(url: string): Observable<ResponseApp> {
    let header = this.buildHeader();
    return this.httpClient
      .get<ResponseApp>(url, { headers: header })
      .pipe(catchError(this.handleError)) as Observable<ResponseApp>;
  }

  /**
   * HTTP post
   * @param url Endereco de acesso (endpoint)
   * @param data Conteudo/corpo da requisicao
   */
  post(url: string, data: any): Observable<ResponseApp> {
    let header = this.buildHeader();
    return this.httpClient
      .post<ResponseApp>(url, data, { headers: header })
      .pipe(catchError(this.handleError)) as Observable<ResponseApp>;
  }

  /**
   * HTTP put
   * @param url Endereco de acesso (endpoint)
   * @param data Conteudo/corpo da requisicao
   */
  put(url: string, data: any): Observable<ResponseApp> {
    let header = this.buildHeader();
    return this.httpClient
      .put<ResponseApp>(url, data, { headers: header })
      .pipe(catchError(this.handleError)) as Observable<ResponseApp>;
  }

  /**
   * HTTP delete
   * @param url Endereco de acesso (endpoint)
   */
  delete(url: string): Observable<ResponseApp> {
    let header = this.buildHeader();
    return this.httpClient
      .delete<ResponseApp>(url, { headers: header })
      .pipe(catchError(this.handleError)) as Observable<ResponseApp>;
  }

  /*
   * ----------------- Funcoes auxiliares ----------------------------
   */

  /**
   * Retorna item do local storage
   * @param name chave do item
   */
  getStorageItem(name: string): string {
    return window.localStorage.getItem(name) as string;
  }

  /**
   * Adiciona item no local storage
   * @param name chave do item
   * @param value valor do item
   */
  setStorageItem(name: string, value: string): void {
    window.localStorage.setItem(name, value);
  }

  /**
   * Constroi objeto header para requisição http
   * @param paginacao variavel de controle da paginação
   */
  buildHeader(): HttpHeaders {
    var tokenJWT: string = this.getStorageItem('JWT_TOKEN');
    const header: any = [
      { 'JWT_TOKEN': tokenJWT },
      { 'Content-Type': 'application/json'}
    ];
    return new HttpHeaders(header);
  }

  /**
   * Faz tratamento de erro
   * @param response response HTTP
   */
  handleError(response: any): any {
    if (response.status === 400) {
      const listMessage = response.error.listMessage;
      return throwError(new Error(listMessage[0].descMessage));
    }
    return throwError(new Error(response.statusText));
  }
}
