import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent{

  isVisible: boolean = false;

  showSidenav() {
    this.isVisible = true;
  }

  changeSidenav() {
    this.isVisible = false;
  }

}
