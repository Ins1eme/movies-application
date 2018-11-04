import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap, map } from 'rxjs/operators';

import { FilmService } from 'src/app/core/services/film.service';
import { Film } from 'src/app/core/interfaces/film';
import { Review } from 'src/app/core/interfaces/review';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})

export class SinglePageComponent implements OnInit, OnDestroy {

  film: Film
  destroy$: Subject<boolean> = new Subject()
  title: string
  reviewCount: number

  constructor(
    private filmService: FilmService,
    private acRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.acRoute.params.pipe(
      takeUntil(this.destroy$),
      map(params => {
        this.title = params['id']
        return params['id']
      }),
      switchMap(id => this.filmService.getFilmByName(id))
    ).subscribe((film: Film) => {
      this.film = film
      this.reviewCount = this.film.review.length
    })
  }

  submitForm(event) {
    const review = {
      comment: event.value.comment,
      name: event.value.name,
      email: event.value.email,
      title: this.title
    }

    this.filmService.addReview(review).pipe(
      takeUntil(this.destroy$)
    ).subscribe((review: Review) => {
      this.film.review = this.film.review.concat(review)
      this.reviewCount = this.film.review.length
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }
}
