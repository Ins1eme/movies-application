import { Component, Input, Output, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationService } from '../services/navigation.service';
import { Observable } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { Filters } from '../interfaces/filters';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('toogleSidenav',[
      transition(':enter', [
        style({
          transform: 'translateX(-340px)',
        }),
        animate('700ms cubic-bezier(0.77, 0, 0.175, 1)', style({
          transform: 'translateX(0px)'
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'translateX(0px)',
        }),
        animate('700ms cubic-bezier(0.77, 0, 0.175, 1)', style({
          transform: 'translateX(-340px)'
        }))
      ])
    ])
  ]
  
})

export class SideNavComponent implements OnInit{
  navigations$: Observable<string[]>

  @Input() isVisible: boolean;
  @Output() changeSidenav: EventEmitter<boolean> = new EventEmitter()

  constructor(
    private eRef: ElementRef,
    private navigationService: NavigationService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.navigations$ = this.navigationService.getNavigation()
    
  }

  @HostListener('document:click', ['$event'])
  clickOutSidenav(event) {
    if(!this.eRef.nativeElement.contains(event.target) && event.target.className !== "menu-button__line" && event.target.className !== "menu-button") {
      this.isVisible = false;
      this.changeSidenav.emit(this.isVisible)
    }
  }

  setFilter(genre) {
    const filters: Filters = { genre }
    this.filterService.setFiltersValues(filters)
    this.closeSidenav()
  }


  closeSidenav() {
    this.isVisible = false;
    this.changeSidenav.emit(this.isVisible)
  }

}
