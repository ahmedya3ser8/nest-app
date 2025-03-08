import { Component, inject, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../../../core/services/brands/brands.service';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { IBrand } from '../../../../shared/interfaces/ibrand';

@Component({
  selector: 'app-home-brands',
  imports: [CarouselModule],
  templateUrl: './home-brands.component.html',
  styleUrl: './home-brands.component.scss'
})
export class HomeBrandsComponent {
  private readonly brandsService = inject(BrandsService);
  brands: WritableSignal<IBrand[]> = signal([]);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 15,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.brandsService.getAllBrands('brands').subscribe({
      next: (res) => {
        this.brands.set(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
