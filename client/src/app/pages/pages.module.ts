import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';

import { ShareModule } from '../share/share.module';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    DragScrollModule

  ],
  declarations: [MainPageComponent]
})
export class PagesModule { }
