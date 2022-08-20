import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExpComponent } from '../agregar-exp.component';

describe('AgregarExpComponent', () => {
  let component: AgregarExpComponent;
  let fixture: ComponentFixture<AgregarExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
