import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
