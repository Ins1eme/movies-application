import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()

export class LoaderService {
    constructor() {}

    private loaderSubject: BehaviorSubject<boolean> = new BehaviorSubject(true)

    setLoaderState(state: boolean) {
        this.loaderSubject.next(state)
    }

    getLoaderState(): Observable<boolean> {
        return this.loaderSubject.asObservable()
    }
}