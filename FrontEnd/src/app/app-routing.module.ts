import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'Movies', component: MovieDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
