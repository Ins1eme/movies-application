import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';


import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    ShareModule
  ],
  declarations: [HeaderComponent, SideNavComponent, FooterComponent],
  exports: [HeaderComponent, SideNavComponent, FooterComponent, ShareModule]
})
export class CoreModule { }
