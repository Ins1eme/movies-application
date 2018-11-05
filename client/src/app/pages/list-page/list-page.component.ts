import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { FilmService } from 'src/app/core/services/film.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Filters } from 'src/app/core/interfaces/filters';
import { Film } from 'src/app/core/interfaces/film';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {

	films: Film[]
	destroy$: Subject<boolean> = new Subject()

	constructor(
		private filterService: FilterService,
		private filmService: FilmService,
		private loaderService: LoaderService
 	 ) { }

  	ngOnInit() {
		this.loaderService.setLoaderState(true)
    	this.filterService.getFiltersValues()
			.pipe(
				takeUntil(this.destroy$),
				switchMap((filter: Filters) => {
					return this.filmService.getSortedFilm(filter)
				})
			)
			.subscribe((films: Film[]) => {
				this.films = films
				this.loaderService.setLoaderState(false)
			})
		this.filterService.getFiltersValues().subscribe(data => console.log(data))
	}

	ngOnDestroy() {
		this.destroy$.next(true)
	}

   
}
