import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-our-mission',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.scss'
})
export class OurMissionComponent {
  imageUrl:string = '../../assets/our-mission.png'
  imageDescription:string = 'our mission image'

}
