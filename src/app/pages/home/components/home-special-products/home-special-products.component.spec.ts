import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialProductsComponent } from './home-special-products.component';

describe('HomeSpecialProductsComponent', () => {
  let component: HomeSpecialProductsComponent;
  let fixture: ComponentFixture<HomeSpecialProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSpecialProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSpecialProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
