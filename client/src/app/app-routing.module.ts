import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'films/:id', component: SinglePageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
