import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';
import { Tabs } from '../interfaces/tabs';
import { Filters } from '../interfaces/filters';

@Injectable({
    providedIn: 'root'
})

export class FilmService {

    constructor(
        private http: HttpClient
    ) {}


    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>('http://localhost:5000/api/films')
    }

    getTabsFilm(): Observable<Tabs> {
        return this.http.get<Tabs>('http://localhost:5000/api/films/tabs')
    }

    getFiltersOption() : Observable<Filters> {
        return this.http.get<Filters>('http://localhost:5000/api/films/filter')
    }

    getFilmByName(title: string): Observable<Film> {
        return this.http.get<Film>('http://localhost:5000/api/films/film', {params: {title}})
    }
}