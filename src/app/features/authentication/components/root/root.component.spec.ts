import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInModule } from './root.component';

describe('SignInModule', () => {
  let component: SignInModule;
  let fixture: ComponentFixture<SignInModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
