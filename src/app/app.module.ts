/* CORE */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Componentes */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDetalhaOrdemServicoComponent } from './pages/page-detalha-ordem-servico/page-detalha-ordem-servico.component';
import { PageNovaOrdemServicoComponent } from './pages/page-nova-ordem-servico/page-nova-ordem-servico.component';
import { PageListaOrdemServicoComponent } from './pages/page-lista-ordem-servico/page-lista-ordem-servico.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageLoginComponent,
    PageDetalhaOrdemServicoComponent,
    PageNovaOrdemServicoComponent,
    PageListaOrdemServicoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
