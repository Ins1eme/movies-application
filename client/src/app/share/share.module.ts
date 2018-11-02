import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FilmComponent } from './components/film/film.component';
import { TabsComponent } from './components/tabs/tabs.component'
import { TabComponent } from './components/tabs/tab/tab.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FilmComponent, 
    TabsComponent, 
    TabComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BrowserAnimationsModule,
    FilmComponent,
    FilmComponent, 
    TabsComponent, 
    TabComponent,
    RouterModule
  ],
})
export class ShareModule { }
