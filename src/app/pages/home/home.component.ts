import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { BrandsComponent } from "./components/brands/brands.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
