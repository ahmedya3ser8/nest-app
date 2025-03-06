import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth', component: AuthLayoutComponent, children:[
    {path: 'register', loadComponent: () => import('./pages/register/register.component').then((c) => c.RegisterComponent), title: 'register'},
    {path: 'login', loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent), title: 'login'}
  ]},
  {path: '', component: MainLayoutComponent, children:[
    {path: 'home', loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent), title: 'home'},
    {path: 'about', loadComponent: () => import('./pages/about/about.component').then((c) => c.AboutComponent), title: 'about'},
    {path: 'shop', loadComponent: () => import('./pages/shop/shop.component').then((c) => c.ShopComponent), title: 'shop'},
    {path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then((c) => c.BlogComponent), title: 'blog'},
    {path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent), title: 'contact'},
    {path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then((c) => c.CartComponent), title: 'cart'},
    {path: 'wishlist', loadComponent: () => import('./pages/wishlist/wishlist.component').then((c) => c.WishlistComponent), title: 'wishlist'},
    {path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent), title: '404'}
  ]}
];
