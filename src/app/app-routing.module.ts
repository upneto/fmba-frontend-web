import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageListaOrdemServicoComponent } from './pages/page-lista-ordem-servico/page-lista-ordem-servico.component';
import { PageDetalhaOrdemServicoComponent } from './pages/page-detalha-ordem-servico/page-detalha-ordem-servico.component';
import { PageNovaOrdemServicoComponent } from './pages/page-nova-ordem-servico/page-nova-ordem-servico.component';
import { PageExternalComponent } from './pages/page-external/page-external.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: PageLoginComponent },
  { path: 'lista-ordem-servico', component: PageListaOrdemServicoComponent },
  { path: 'detalhe-ordem-servico', component: PageDetalhaOrdemServicoComponent },
  { path: 'nova-ordem-servico', component: PageNovaOrdemServicoComponent },
  { path: 'external-page', component: PageExternalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
