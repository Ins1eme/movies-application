import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { PagesModule } from './pages/pages.module';
import { SafePipe } from './core/pipes/SafePipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    PagesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
