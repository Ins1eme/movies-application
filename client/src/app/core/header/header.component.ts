import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  isVisible: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  showSidenav() {
    this.isVisible = true;
  }

  closeSidenav(isVisible) {
    console.log(isVisible)
    this.isVisible = isVisible
  }

}
