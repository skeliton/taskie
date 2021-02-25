import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.scss'],
})
export class MainSideNavComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.opened = !this.opened;
  }
}
