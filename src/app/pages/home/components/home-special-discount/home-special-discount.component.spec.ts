import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialDiscountComponent } from './home-special-discount.component';

describe('HomeSpecialDiscountComponent', () => {
  let component: HomeSpecialDiscountComponent;
  let fixture: ComponentFixture<HomeSpecialDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSpecialDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpecialDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
