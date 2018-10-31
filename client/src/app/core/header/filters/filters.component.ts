import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Filters } from '../../interfaces/filters';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  filters: Filters
  destroy$: Subject<boolean> = new Subject;

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmService.getFiltersOption()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((filters: Filters) => {
      this.filters = filters
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
  }
}
