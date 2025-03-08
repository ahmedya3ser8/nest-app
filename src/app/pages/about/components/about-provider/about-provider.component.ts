import { Component } from '@angular/core';

@Component({
  selector: 'app-about-provider',
  imports: [],
  templateUrl: './about-provider.component.html',
  styleUrl: './about-provider.component.scss'
})
export class AboutProviderComponent {
  iconsProvider = [
    {imgUrl: '/images/icons/icons-01.png', title: 'Best Prices & Offers'},
    {imgUrl: '/images/icons/icons-02.png', title: 'Wide Assortment'},
    {imgUrl: '/images/icons/icons-03.png', title: 'Free Delivery'},
    {imgUrl: '/images/icons/icons-04.png', title: 'Easy Returns'},
    {imgUrl: '/images/icons/icons-05.png', title: '100% Satisfaction'},
    {imgUrl: '/images/icons/icons-06.png', title: 'Great Daily Deal'}
  ]
}
