import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPerformanceComponent } from './about-performance.component';

describe('AboutPerformanceComponent', () => {
  let component: AboutPerformanceComponent;
  let fixture: ComponentFixture<AboutPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
