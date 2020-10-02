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
      new iconcard(170, "new users", "person_add", "this month", "schedule"),
      new iconcard(5, "birthdays", "cake", "this week", "schedule"),
      new iconcard(12, "activities", "event_note", "this month", "schedule"),
    ]
  }

  ngOnInit(): void {
  }

}
