import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavigationService } from '../services/navigation.service';
import { FilterService } from '../services/filter.service';
import { Filters } from '../interfaces/filters';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  navigations$: Observable<string[]>

  constructor(
    private navigationService: NavigationService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.navigations$ = this.navigationService.getNavigation()
  }

  setFilter(genre) {
    const filters: Filters = { genre }
    this.filterService.setFiltersValues(filters)
  }
}
