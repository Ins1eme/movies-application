import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loaderState$: Observable<boolean>

  constructor(
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.loaderState$ = this.loaderService.getLoaderState()
  }

}
