import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaOrdemServicoComponent } from './page-lista-ordem-servico.component';

describe('PageListaOrdemServicoComponent', () => {
  let component: PageListaOrdemServicoComponent;
  let fixture: ComponentFixture<PageListaOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListaOrdemServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListaOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
