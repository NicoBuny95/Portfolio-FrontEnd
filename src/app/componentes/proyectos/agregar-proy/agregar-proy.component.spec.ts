import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProyComponent } from './agregar-proy.component';

describe('AgregarProyComponent', () => {
  let component: AgregarProyComponent;
  let fixture: ComponentFixture<AgregarProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
