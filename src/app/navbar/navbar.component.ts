import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router'; // Import RouterModule
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,NgbNavModule,CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
logoSrc: string = '../../assets/White.png';
isNavOpen: boolean = false;

toggleNav() {
  this.isNavOpen = !this.isNavOpen;
}
closeNav() {
  this.isNavOpen = false;
}

}
