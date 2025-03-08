import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProviderComponent } from './about-provider.component';

describe('AboutProviderComponent', () => {
  let component: AboutProviderComponent;
  let fixture: ComponentFixture<AboutProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
