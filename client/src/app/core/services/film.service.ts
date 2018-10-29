import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';
import { Tabs } from '../interfaces/tabs';

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
}