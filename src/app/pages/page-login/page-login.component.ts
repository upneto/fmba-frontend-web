import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit  {

  private formCLogin: FormGroup | undefined;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.createForm(new Login());
  }

  createForm(login: Login): void {
    this.formCLogin = new FormGroup({
      usuario: new FormControl({ value: login.usuario, disabled: false }, [Validators.maxLength(30), Validators.required]),
      senha: new FormControl({ value: login.senha, disabled: false }, [Validators.maxLength(30), Validators.required])
    });
  }

  doLogin(): void {
    this.router.navigateByUrl('lista-ordem-servico');
  }
}
