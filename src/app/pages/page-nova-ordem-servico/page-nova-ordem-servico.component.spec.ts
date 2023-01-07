import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNovaOrdemServicoComponent } from './page-nova-ordem-servico.component';

describe('PageNovaOrdemServicoComponent', () => {
  let component: PageNovaOrdemServicoComponent;
  let fixture: ComponentFixture<PageNovaOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNovaOrdemServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNovaOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
