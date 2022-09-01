import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcercaComponent } from './editar-acerca.component';

describe('EditarAcercaComponent', () => {
  let component: EditarAcercaComponent;
  let fixture: ComponentFixture<EditarAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAcercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
