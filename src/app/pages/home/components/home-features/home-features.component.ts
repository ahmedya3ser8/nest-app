import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features',
  imports: [],
  templateUrl: './home-features.component.html',
  styleUrl: './home-features.component.scss'
})
export class HomeFeaturesComponent {
  features = [
    {imgUrl: '/images/features/feature-01.png'},
    {imgUrl: '/images/features/feature-02.png'},
    {imgUrl: '/images/features/feature-03.png'},
    {imgUrl: '/images/features/feature-04.png'},
  ]
}
