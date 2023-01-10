import { HttpHeaders } from "@angular/common/http";

export abstract class AbstractApiServices {

  /**
   * Retorna item do local storage
   * @param name chave do item
   */
  getStorageItem(name: string): string {
    return window.localStorage.getItem(name) as string | '';
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
   *
   * @param url Obtem header padrão para as requisições
   * @returns
   */
  getHeaders(url: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': url,
      'JWT_TOKEN': this.getStorageItem('JWT_TOKEN')
    });
  }
}
