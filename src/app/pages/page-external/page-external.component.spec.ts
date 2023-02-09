import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExternalComponent } from './page-external.component';

describe('PageExternalComponent', () => {
  let component: PageExternalComponent;
  let fixture: ComponentFixture<PageExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
