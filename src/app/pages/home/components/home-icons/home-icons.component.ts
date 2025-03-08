import { Component } from '@angular/core';

@Component({
  selector: 'app-home-icons',
  imports: [],
  templateUrl: './home-icons.component.html',
  styleUrl: './home-icons.component.scss'
})
export class HomeIconsComponent {
  icons = [
    {
      imgUrl: '/images/icons/icons-01.png',
      offer: 'Best offers',
      desc: 'Orders $50 or more'
    },
    {
      imgUrl: '/images/icons/icons-02.png',
      offer: 'Free delivery',
      desc: '24/7 amazing services'
    },
    {
      imgUrl: '/images/icons/icons-03.png',
      offer: 'Great daily deal',
      desc: 'When you sign up'
    },
    {
      imgUrl: '/images/icons/icons-04.png',
      offer: 'Wide assortment',
      desc: 'Mega Discounts'
    },
    {
      imgUrl: '/images/icons/icons-05.png',
      offer: 'Easy returns',
      desc: 'Within 30 days'
    },
  ]
}
