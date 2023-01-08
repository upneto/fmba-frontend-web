import { LoginApiService } from './../../services/api/login/login-api-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AlertService } from 'src/app/services/alert/alert-service';
import { ResponseApp } from 'src/app/models/payloads/ResponseApp';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit  {

  public formLogin!: FormGroup;
  public isValid: boolean = true;

  constructor(
    private router: Router,
    private serviceApi: LoginApiService) { }

  ngOnInit(): void {
    this.buildForm(new Login());
  }

  buildForm(login: Login): void {
    this.isValid = true;
    this.formLogin = new FormGroup({
      usuario: new FormControl({ value: login.usuario, disabled: false }, [Validators.maxLength(30), Validators.required]),
      senha: new FormControl({ value: login.senha, disabled: false }, [Validators.maxLength(30), Validators.required])
    });
  }

  doLogin(): void {
    console.log('Executou login! ' + this.formLogin.value);
    if(this.formLogin.valid) {
      this.callService() ;
    }
    else {
      this.isValid = false;
      console.log('Formulario invalido!');
    }
  }

  callService(): void {
    const logon: Login = new Login();
    logon.usuario = this.formLogin.value.usuario;
    logon.senha = this.formLogin.value.senha;

    this.serviceApi.doLogin(logon).subscribe(
      (resultado: ResponseApp) => {
        if (!resultado.error) {
          this.router.navigateByUrl('lista-ordem-servico');
        }
        else {
          console.log('Login Inválido!');
        }
      },
      (error) => {
        console.log('Erro na chamada da API de LOGIN!');
      }
    );
  }
}
