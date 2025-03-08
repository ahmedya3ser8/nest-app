import { Component } from '@angular/core';
import { AboutInfoComponent } from "./components/about-info/about-info.component";
import { AboutProviderComponent } from "./components/about-provider/about-provider.component";
import { AboutPerformanceComponent } from "./components/about-performance/about-performance.component";
import { AboutCounterComponent } from "./components/about-counter/about-counter.component";
import { AboutTeamComponent } from "./components/about-team/about-team.component";

@Component({
  selector: 'app-about',
  imports: [AboutInfoComponent, AboutProviderComponent, AboutPerformanceComponent, AboutCounterComponent, AboutTeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
