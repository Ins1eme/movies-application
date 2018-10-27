import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.ds.scrollbarHidden = true;
    this.ds.snapDuration = 200;
  }
}
