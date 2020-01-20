import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footerBar/footerBar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      FooterBarComponent,
      NavBarComponent,
      MovieDetailsComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]

})
export class AppModule { }
