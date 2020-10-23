import { Component, OnInit } from '@angular/core';
import { Navlink } from 'src/app/models/navlink';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public navlinks: Navlink[];
  public simplebarOptions: object;

  constructor(
    private menuService: MenuService
  ) {
    this.simplebarOptions = { autoHide: true };
  }

  ngOnInit(): void {
    this.menuService.getNavlinks().subscribe(
      data => this.navlinks = data
    );
  }

}
