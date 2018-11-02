import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/core/services/film.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/core/interfaces/film';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  film$: Observable<Film>

  constructor(
    private filmService: FilmService,
    private acRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data) => {
      this.film$ = this.filmService.getFilmByName(data.id)
    })
  }

}
