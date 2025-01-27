import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarNotaFiscalComponent } from './criar-nota-fiscal.component';

describe('CriarNotaFiscalComponent', () => {
  let component: CriarNotaFiscalComponent;
  let fixture: ComponentFixture<CriarNotaFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarNotaFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarNotaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
