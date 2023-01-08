import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "src/app/models/login";
import { ResponseApp } from "src/app/models/payloads/ResponseApp";
import { environment } from "src/environments/environment";
import { CustomHttpClient } from "../../custom-http-client";

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {

  private urlBase!: string;

  constructor(private httpClient: CustomHttpClient) {
    this.urlBase = `${environment.api.login}`;
  }

  doLogin(logon: Login): Observable<ResponseApp> {
    return this.httpClient.post(`${this.urlBase}`, logon);
  }
}
