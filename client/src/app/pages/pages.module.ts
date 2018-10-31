import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';

import { ShareModule } from '../share/share.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SinglePageComponent } from './single-page/single-page.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    DragScrollModule
  ],
  declarations: [
    MainPageComponent, 
    SinglePageComponent
  ]
})
export class PagesModule { }
