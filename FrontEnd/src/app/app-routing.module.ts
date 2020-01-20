import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
