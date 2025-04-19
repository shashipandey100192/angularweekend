import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistorComponent } from './userregistor.component';

describe('UserregistorComponent', () => {
  let component: UserregistorComponent;
  let fixture: ComponentFixture<UserregistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserregistorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserregistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
