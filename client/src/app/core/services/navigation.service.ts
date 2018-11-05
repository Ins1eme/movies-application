import { Observable, of } from "rxjs";

export class NavigationService {

    private navigation: string[] = [
        'Drama',
        'Action',
        'Adventure',
        'Crime',
        'Mystery',
        'Biography',
        'Comedy',
        'Thriller',
        'Western',
        'History'
    ]

    constructor() {}


    getNavigation(): Observable<string[]> {
        return of(this.navigation)
    }

}