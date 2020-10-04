import { Component, OnInit } from '@angular/core';
import { iconcard } from 'src/app/models/iconCard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public iconCards: iconcard[];

  constructor() {
    this.iconCards = [
      new iconcard("", "Angular 10", "construction", "The latest version of angular", ""),
      new iconcard("", "Material Design", "design_services", "Angular material and material design", ""),
      new iconcard("", "Material Icons", "insert_emoticon", "Google's material icon set", "info"),
    ]
  }

  ngOnInit(): void {
  }

}
