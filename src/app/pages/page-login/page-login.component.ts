import { AlertType } from './../../models/payloads/Alert';
import { ResponseApp } from './../../models/payloads/ResponseApp';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginApiService } from 'src/app/services/api/login/login-api-service';
import { AbstractPages } from '../AbstractPages';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent extends AbstractPages implements OnInit {

  public formLogin!: FormGroup;
  public isValid: boolean = true;

  constructor(private router: Router, private service: LoginApiService) {
    super();
  }

  ngOnInit(): void {
    this.buildForm(new Login());
    super.buildAlert();
  }

  buildForm(login: Login): void {
    this.isValid = true;
    this.formLogin = new FormGroup({
      usuario: new FormControl({ value: login.usuario, disabled: false }, [
        Validators.maxLength(30),
        Validators.required,
      ]),
      senha: new FormControl({ value: login.senha, disabled: false }, [
        Validators.maxLength(30),
        Validators.required,
      ]),
    });
  }

  doLogin(): void {
    console.log('Executou login! ' + this.formLogin.value);
    if (this.formLogin.valid) {
      this.callService();
    } else {
      this.isValid = false;
      console.log('Formulario invalido!');
    }
  }

  callService(): void {
    const logon: Login = new Login();
    logon.usuario = this.formLogin.value.usuario;
    logon.senha = this.formLogin.value.senha;

    this.service.doLogin(logon).subscribe({
      next: (data) => {
        this.isValid = true;
        console.log(JSON.stringify(data));
        super.setStorageItem('JWT_TOKEN', data.token)
        this.router.navigateByUrl('lista-ordem-servico');
      },
      error: (error) => {
        this.isValid = false;
        console.error('There was an error!', error);
        this.showMessage('Erro ao efetuar o login', AlertType.error);
      },
    });
  }
}
