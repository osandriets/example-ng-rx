import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDitailComponent } from './user-ditail.component';

describe('UserDitailComponent', () => {
  let component: UserDitailComponent;
  let fixture: ComponentFixture<UserDitailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDitailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDitailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
