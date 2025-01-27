import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNotaFiscalComponent } from './listar-nota-fiscal.component';

describe('ListarNotaFiscalComponent', () => {
  let component: ListarNotaFiscalComponent;
  let fixture: ComponentFixture<ListarNotaFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNotaFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNotaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
