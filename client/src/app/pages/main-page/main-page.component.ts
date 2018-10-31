import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';

import { Film } from 'src/app/core/interfaces/film';
import { FilmService } from 'src/app/core/services/film.service';
import { Tabs } from 'src/app/core/interfaces/tabs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent
  
  destroy$: Subject<boolean> = new Subject()
  films$: Observable<Film[]>
  tabs: Tabs

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.films$ = this.filmService.getFilms()
    this.filmService.getTabsFilm().pipe(
      takeUntil(this.destroy$)
    ).subscribe((tabs: Tabs) => {
      this.tabs = tabs
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
