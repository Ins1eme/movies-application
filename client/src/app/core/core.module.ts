import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';


import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from '../share/share.module';
import { FiltersComponent } from './header/filters/filters.component';
import { FilmService } from './services/film.service';
import { LoaderService } from './services/loader.service';
import { FilterService } from './services/filter.service';
import { NavigationService } from './services/navigation.service';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    ShareModule
  ],
  declarations: [
    HeaderComponent, 
    SideNavComponent, 
    FooterComponent, 
    FiltersComponent,
  ],
  exports: [
    HeaderComponent, 
    SideNavComponent, 
    FooterComponent,
    FiltersComponent, 
    ShareModule
  ],
  providers: [
    FilmService,
    LoaderService,
    FilterService,
    NavigationService
  ]
})
export class CoreModule { }
