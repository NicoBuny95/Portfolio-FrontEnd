import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditararEduComponent } from './editarar-edu.component';

describe('EditararEduComponent', () => {
  let component: EditararEduComponent;
  let fixture: ComponentFixture<EditararEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditararEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditararEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
