import { Component } from '@angular/core';
import { HomeBlogComponent } from "./components/home-blog/home-blog.component";
import { HomeBrandsComponent } from "./components/home-brands/home-brands.component";
import { HomeDiscountComponent } from "./components/home-discount/home-discount.component";
import { HomeFeaturesComponent } from "./components/home-features/home-features.component";
import { HomeHeroComponent } from "./components/home-hero/home-hero.component";
import { HomeIconsComponent } from "./components/home-icons/home-icons.component";
import { HomeSpecialDiscountComponent } from "./components/home-special-discount/home-special-discount.component";
import { HomeSpecialProductsComponent } from "./components/home-special-products/home-special-products.component";
import { HomeSubscriptionComponent } from "./components/home-subscription/home-subscription.component";

@Component({
  selector: 'app-home',
  imports: [HomeHeroComponent, HomeBlogComponent, HomeBrandsComponent, HomeSpecialProductsComponent, HomeDiscountComponent, HomeSpecialDiscountComponent, HomeFeaturesComponent, HomeIconsComponent, HomeSubscriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
