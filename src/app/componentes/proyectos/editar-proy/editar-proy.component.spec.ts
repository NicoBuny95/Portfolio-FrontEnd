import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProyComponent } from './editar-proy.component';

describe('EditarProyComponent', () => {
  let component: EditarProyComponent;
  let fixture: ComponentFixture<EditarProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
