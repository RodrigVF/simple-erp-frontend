import { Component, Input, OnInit } from '@angular/core';

interface Button {
  text: string;
  icon: string;
  click: () => void;
  class: string;
}

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title: string = '';
  @Input() buttons: Button[] = [];
}
