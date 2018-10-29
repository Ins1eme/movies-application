import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';
import { Film } from 'src/app/core/interfaces/film';
import { FilmService } from 'src/app/core/services/film.service';
import { Observable } from 'rxjs';
import { Tabs } from 'src/app/core/interfaces/tabs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent
  films$: Observable<Film[]>
  tabsFilms$: Observable<Tabs>
  tabs: Tabs

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.films$ = this.filmService.getFilms()
    this.filmService.getTabsFilm().subscribe((tabs: Tabs) => {
      this.tabs = tabs
    })
  }
  
  ngAfterViewInit() {
    this.ds.scrollbarHidden = true;
    this.ds.snapDuration = 200;
  }

}
