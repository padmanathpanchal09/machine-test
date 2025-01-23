import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCodeLoginComponent } from './test-code-login.component';

describe('TestCodeLoginComponent', () => {
  let component: TestCodeLoginComponent;
  let fixture: ComponentFixture<TestCodeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCodeLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCodeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
