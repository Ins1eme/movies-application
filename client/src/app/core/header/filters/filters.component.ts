import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { FilmService } from '../../services/film.service';
import { Filters } from '../../interfaces/filters';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  filtersForm: FormGroup
  filters: Filters
  destroy$: Subject<boolean> = new Subject;

	constructor(
		private filmService: FilmService,
		private filterService: FilterService,
		private router: Router
	) { }

  ngOnInit() {
    this.filmService.getFiltersOption()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((filters: Filters) => {
      this.filters = filters
    })

    this.filtersForm = new FormGroup({
      genre: new FormControl(null),
      country: new FormControl(null),
      title: new FormControl(null)
    })
  }

	onSubmit() {
		this.filterService.setFiltersValues(this.filtersForm.value)
		this.router.navigate(['/films'])
  	}

	ngOnDestroy() {
		this.destroy$.next(true)
	}
}
