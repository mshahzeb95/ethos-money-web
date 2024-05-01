import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PropComponent } from '../prop/prop.component';

@Component({
  selector: 'app-our-mission',
  standalone: true,
  imports: [NavbarComponent,PropComponent],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.scss'
})
export class OurMissionComponent {
  imageUrl:string = '../../assets/our-mission.png'
  imageDescription:string = 'our mission image'

}
