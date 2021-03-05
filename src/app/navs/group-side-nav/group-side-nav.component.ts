import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-group-side-nav',
  templateUrl: './group-side-nav.component.html',
  styleUrls: ['./group-side-nav.component.scss'],
})
export class GroupSideNavComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.opened = !this.opened;
  }
}
