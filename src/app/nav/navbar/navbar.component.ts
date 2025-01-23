import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  router = inject(Router);

  logout(){
    // const local =localStorage.getItem('ngToken');
    this.router.navigateByUrl('/login');

  localStorage.removeItem('ngToken')
  }

}
