import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {
  @Input() title: string;
  @Input() number: number;
  @Input() icon: string;
  @Input() subtitle: string;
  @Input() subtitleIcon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
