import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationStartComponent } from './authentication-start.component';

describe('AuthenticationStartComponent', () => {
  let component: AuthenticationStartComponent;
  let fixture: ComponentFixture<AuthenticationStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
