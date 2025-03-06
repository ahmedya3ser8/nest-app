import { Component } from '@angular/core';
import { TopHeaderComponent } from "./components/top-header/top-header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BottomHeaderComponent } from "./components/bottom-header/bottom-header.component";

@Component({
  selector: 'app-header',
  imports: [TopHeaderComponent, NavbarComponent, BottomHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
