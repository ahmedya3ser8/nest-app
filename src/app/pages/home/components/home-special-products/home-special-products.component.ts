import { Component } from '@angular/core';
import { IProduct } from '../../../../shared/interfaces/iproduct';

@Component({
  selector: 'app-home-special-products',
  imports: [],
  templateUrl: './home-special-products.component.html',
  styleUrl: './home-special-products.component.scss'
})
export class HomeSpecialProductsComponent {
products: IProduct[] = [
    {
      id: 100,
      num: 255,
      imageUrl: '/images/special-products/cream-milk.jpg',
      title: 'Almarai Full Cream Milk - 1L',
      price: 15,
      category: 'vegetables',
      quantity: 1
    },
    {
      id: 200,
      num: 300,
      imageUrl: '/images/special-products/chicken-liver.jpg',
      title: 'Al Watania Chicken Liver & Gizzard - 1K',
      price: 100,
      category: 'vegetables',
      quantity: 1
    },
    {
      id: 300,
      num: 780,
      imageUrl: '/images/special-products/abu-auf.jpg',
      title: 'Abu Auf Protein Bar Cranberries + Coconut, 70 Gm',
      price: 60,
      category: 'vegetables',
      quantity: 1
    },
    {
      id: 400,
      num: 360,
      imageUrl: '/images/special-products/Fayrouz-Apple-Malt-Drink.jpg',
      title: 'Fayrouz Apple Malt Drink',
      price: 25,
      category: 'vegetables',
      quantity: 1
    }
  ]
}
