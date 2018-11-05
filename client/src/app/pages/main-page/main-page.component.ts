import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';

import { Film } from 'src/app/core/interfaces/film';
import { FilmService } from 'src/app/core/services/film.service';
import { Tabs } from 'src/app/core/interfaces/tabs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent
  
  destroy$: Subject<boolean> = new Subject()
  films: Film[]
  tabs: Tabs

  constructor(
    private filmService: FilmService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {


	this.loaderService.setLoaderState(true)
	
    this.filmService.getFilms()
    	.pipe(
			  takeUntil(this.destroy$)
		  )
      .subscribe((films: Film[]) => {
        this.films = films
      })
	
  this.filmService.getTabsFilm()
		.pipe(
			takeUntil(this.destroy$)
		)
		.subscribe((tabs: Tabs) => {
			this.tabs = tabs
			this.loaderService.setLoaderState(false)
		})
  }
  
  ngAfterViewInit() {
    this.ds.scrollbarHidden = true;
    this.ds.snapDuration = 200;
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }
}
