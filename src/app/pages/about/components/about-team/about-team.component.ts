import { Component } from '@angular/core';

@Component({
  selector: 'app-about-team',
  imports: [],
  templateUrl: './about-team.component.html',
  styleUrl: './about-team.component.scss'
})
export class AboutTeamComponent {
  teamInfo = [
    {imgURL: '/images/about/client-1.png', name: 'H. Merinda', title: 'CEO & Co-Founder'},
    {imgURL: '/images/about/client-2.png', name: 'Dilan Specter', title: 'Head Engineer'},
  ]
}
