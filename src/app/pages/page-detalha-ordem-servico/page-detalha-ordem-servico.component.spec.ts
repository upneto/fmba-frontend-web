import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalhaOrdemServicoComponent } from './page-detalha-ordem-servico.component';

describe('PageDetalhaOrdemServicoComponent', () => {
  let component: PageDetalhaOrdemServicoComponent;
  let fixture: ComponentFixture<PageDetalhaOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetalhaOrdemServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetalhaOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
