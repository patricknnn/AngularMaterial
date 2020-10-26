import { Component, OnInit } from '@angular/core';
import { Iconcard } from 'src/app/models/iconCard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public iconCards: Iconcard[];

  constructor() {
    this.iconCards = [
      new Iconcard("", "Angular 10", "construction", "The latest version of angular", ""),
      new Iconcard("", "Angular router", "directions", "Navigate between views", ""),
      new Iconcard("", "Angular animations", "style", "Enhance user experience", ""),
      new Iconcard("", "Material Design", "design_services", "Google's design guidelines", ""),
      new Iconcard("", "Material Icons", "insert_emoticon", "Google's material icon set", "info"),
      new Iconcard("", "Forms", "description", "Including input validation", "done"),
      new Iconcard("", "Authentication", "verified_user", "Using JSON Web Tokens", ""),
    ]
  }

  ngOnInit(): void {
  }

}
