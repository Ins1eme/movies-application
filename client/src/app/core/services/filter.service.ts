import { Subject, Observable, ReplaySubject } from "rxjs";
import { Filters } from "../interfaces/filters";
import { Injectable } from "@angular/core";

@Injectable()

export class FilterService {

    public filterValues: ReplaySubject<Filters> = new ReplaySubject()

    setFiltersValues(filter: Filters) {
        this.filterValues.next(filter)
    }

    getFiltersValues(): Observable<Filters> {
        return this.filterValues.asObservable()
    }
}