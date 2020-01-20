import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  morningCheck:boolean;
  afternoonCheck:boolean;
  eveningCheck:boolean;
  bookingDate : String;

  Seats: number =  20;
  seatStatus: String ;
  mSeats : number;

  booked:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  book() {

    //Checking if all the seats are fully booked 
    if(this.morningCheck == true && this.Seats <= 20 && this.Seats != 0){
      this.Seats -= this.mSeats;
      this.booked=true;
    }
    else if(this.afternoonCheck == true && this.Seats <= 20 && this.Seats != 0){
      this.Seats -= this.mSeats;
      this.booked=true;
    }
    else if(this.eveningCheck == true && this.Seats <= 20 && this.Seats != 0){
      this.Seats -= this.mSeats;
      this.booked=true;
    }
    else{
      this.seatStatus ="Sold Out!"
    }
  
  
  }
 

}
