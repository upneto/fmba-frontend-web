import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "src/app/models/login";
import { environment } from "src/environments/environment";
import { AbstractApiServices } from "../abstract-api-services";

@Injectable({
  providedIn: 'root',
})
export class LoginApiService extends AbstractApiServices {

  private urlBase = `${environment.api.login}`;

  constructor(private http: HttpClient) {
    super();
  }

  doLogin(logon: Login): Observable<any> {
    return this.http.post(
      this.urlBase,
      JSON.stringify(logon),
      { headers: super.getHeaders(this.urlBase) as HttpHeaders });
  }
}
