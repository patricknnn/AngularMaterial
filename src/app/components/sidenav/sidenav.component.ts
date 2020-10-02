import { Component, OnInit } from '@angular/core';
import { navlink } from 'src/app/models/navlink';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public navlinks: navlink[];
  public simplebarOptions: object;

  constructor() {
    this.navlinks = [
      new navlink("Dashboard", "dashboard", "/dashboard"),
      new navlink("Typography", "format_size", "/typography"),
      new navlink("Buttons & Menus", "check_box_outline_blank", "/buttons", [new navlink("Buttons", "check_box", "/buttons"), new navlink("Menus", "indeterminate_check_box", "/menus")]),
      new navlink("Toolbars", "construction", "/toolbars"),
      new navlink("Cards & Panels", "view_agenda", "/cards"),
      new navlink("Forms", "keyboard", "/forms"),
      new navlink("Paginators", "last_page", "/paginators"),
      new navlink("Steppers", "switch_right", "/steppers"),
      new navlink("Tables", "table_chart", "/tables"),
      new navlink("Tabs", "tab", "/tabs"),
      new navlink("Dialogs", "chat", "/dialogs"),
      new navlink("Progress indicators", "autorenew", "/progressindicators"),
      new navlink("Icons", "insert_photo", "/icons"),
      new navlink("Badges", "verified", "/badges"),
    ];
    this.simplebarOptions = {autoHide: false};
  }

  ngOnInit(): void {
  }

}
