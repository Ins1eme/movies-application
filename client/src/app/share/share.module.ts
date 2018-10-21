import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmComponent } from './components/film/film.component'

@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,
    FilmComponent
  ],
})
export class ShareModule { }
