import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEduComponent } from './agregar-edu.component';

describe('AgregarEduComponent', () => {
  let component: AgregarEduComponent;
  let fixture: ComponentFixture<AgregarEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
