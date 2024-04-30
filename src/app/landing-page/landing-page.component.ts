import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { PropComponent } from '../prop/prop.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent,SignupFormComponent,PropComponent,FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
