import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';

import { ShareModule } from '../share/share.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { RatingComponent } from './single-page/rating/rating.component';
import { SocialComponent } from './single-page/social/social.component';
import { ReviewComponent } from './single-page/review/review.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SafePipe } from '../core/pipes/SafePipe.pipe';


@NgModule({
	declarations: [
		MainPageComponent, 
		SinglePageComponent,
		RatingComponent,
		SocialComponent,
		ReviewComponent,
		ListPageComponent,
		SafePipe
	],
	imports: [
		CommonModule,
		ShareModule,
		DragScrollModule,
	]
})
export class PagesModule { }
