import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBusquedaComponent } from './spinner-busqueda.component';

describe('SpinnerBusquedaComponent', () => {
  let component: SpinnerBusquedaComponent;
  let fixture: ComponentFixture<SpinnerBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
