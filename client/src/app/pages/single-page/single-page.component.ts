import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap, map } from 'rxjs/operators';

import { FilmService } from 'src/app/core/services/film.service';
import { Film } from 'src/app/core/interfaces/film';
import { Review } from 'src/app/core/interfaces/review';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})

export class SinglePageComponent implements OnInit, OnDestroy {

  film: Film
  title: string
  reviewCount: number
  destroy$: Subject<boolean> = new Subject()

  constructor(
    private filmService: FilmService,
    private acRoute: ActivatedRoute,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
	  
    this.loaderService.setLoaderState(true)

    this.acRoute.params
      .pipe(
        takeUntil(this.destroy$),
        map(params => {
          this.title = params['id']
          return params['id']
        }),
        switchMap(id => this.filmService.getFilmByName(id))
      )
      .subscribe((film: Film) => {
        this.film = film
        this.reviewCount = this.film.review.length
        this.loaderService.setLoaderState(false)
      })
  }

  submitForm(event) {
    const review = {
      comment: event.value.comment,
      name: event.value.name,
      email: event.value.email,
      title: this.title
    }

	this.filmService.addReview(review)
		.pipe(takeUntil(this.destroy$))
		.subscribe((review: Review) => {
			this.film.review = this.film.review.concat(review)
			this.reviewCount = this.film.review.length
		})
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }
}
