import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  standalone: true,
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen: boolean = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToJoin() {
    this.router.navigate(['/coming-soon']);
  }
}
