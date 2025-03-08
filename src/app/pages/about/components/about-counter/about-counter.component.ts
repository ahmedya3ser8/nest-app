import { Component } from '@angular/core';

@Component({
  selector: 'app-about-counter',
  imports: [],
  templateUrl: './about-counter.component.html',
  styleUrl: './about-counter.component.scss'
})
export class AboutCounterComponent {
  numbers: number[] = [ 5, 13, 19, 7, 3]
}
