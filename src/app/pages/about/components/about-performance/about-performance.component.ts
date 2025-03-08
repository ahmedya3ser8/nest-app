import { Component } from '@angular/core';

@Component({
  selector: 'app-about-performance',
  imports: [],
  templateUrl: './about-performance.component.html',
  styleUrl: './about-performance.component.scss'
})
export class AboutPerformanceComponent {
  performanceInfo = [
    {title: 'Who we are'},
    {title: 'Our history'},
    {title: 'Our mission'}
  ]
}
