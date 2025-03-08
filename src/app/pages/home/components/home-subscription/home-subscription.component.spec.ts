import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubscriptionComponent } from './home-subscription.component';

describe('HomeSubscriptionComponent', () => {
  let component: HomeSubscriptionComponent;
  let fixture: ComponentFixture<HomeSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
