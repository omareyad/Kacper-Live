import { HeaderComponent } from './Master/header/header.component';
import { SingleMovComponent } from './single-mov/single-mov.component';
import { MoviesCrudComponent } from './admin/movies-crud/movies-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMovComponent } from './item-mov/item-mov.component';
import { SeriesComponent } from './Category/series/series.component';


const routes: Routes = [

  { path: 'Add', component: MoviesCrudComponent },
  { path: 'Casper/Video', component: ItemMovComponent },
  { path: 'Casper/Series', component: SeriesComponent },
  { path: 'Casper/Video/:id', component: SingleMovComponent },
  { path: 'homepage', component: HeaderComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
