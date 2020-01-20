import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footerBar/footerBar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      FooterBarComponent,
      MovieDetailsComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
