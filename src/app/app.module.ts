
/* CORE */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

/** Componentes */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDetalhaOrdemServicoComponent } from './pages/page-detalha-ordem-servico/page-detalha-ordem-servico.component';
import { PageNovaOrdemServicoComponent } from './pages/page-nova-ordem-servico/page-nova-ordem-servico.component';
import { PageListaOrdemServicoComponent } from './pages/page-lista-ordem-servico/page-lista-ordem-servico.component';
import { StateService } from './services/state/state-service';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageExternalComponent } from './pages/page-external/page-external.component';
import { LoadingInterceptor } from './interceptos/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageLoginComponent,
    PageDetalhaOrdemServicoComponent,
    PageNovaOrdemServicoComponent,
    PageListaOrdemServicoComponent,
    PageExternalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    MatNativeDateModule,
    MatSelectModule,
    NgxMatSelectSearchModule,

    NgbAlertModule
  ],
  providers: [
    StateService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
