import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private sidenav: SidenavService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  logOut() {
    this.authService.logout();
  }

}
