import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { 
 function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
   }
   
   
  }

  ngOnInit() {
  }

 
}
