import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FilmComponent } from './components/film/film.component';
import { TabsComponent } from './components/tabs/tabs.component'
import { TabComponent } from './components/tabs/tab/tab.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CutePipe } from '../core/pipes/Cute.pipe';

@NgModule({
  declarations: [
    FilmComponent, 
    TabsComponent, 
    TabComponent,
    LoaderComponent,
    CutePipe

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    FilmComponent,
    FilmComponent, 
    TabsComponent, 
    TabComponent,
    LoaderComponent,
    CutePipe
  ],
})
export class ShareModule { }
