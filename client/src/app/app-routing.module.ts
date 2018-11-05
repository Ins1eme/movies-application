import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'films/:id', component: SinglePageComponent},
    { path: 'films', component: ListPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
