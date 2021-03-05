import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupSideNavComponent } from '../group-side-nav/group-side-nav.component';

@Component({
  selector: 'app-main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.scss'],
})
export class MainSideNavComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  @ViewChild('groupNav')
  private groupNav?: GroupSideNavComponent;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.opened = !this.opened;
  }

  toggleGroupNav(): void {
    this.groupNav?.toggle();
  }
}
