import { HttpClient } from "@angular/common/http";

export abstract class AbstractApiServices {

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
}
