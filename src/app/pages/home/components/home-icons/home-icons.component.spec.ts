import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconsComponent } from './home-icons.component';

describe('HomeIconsComponent', () => {
  let component: HomeIconsComponent;
  let fixture: ComponentFixture<HomeIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
