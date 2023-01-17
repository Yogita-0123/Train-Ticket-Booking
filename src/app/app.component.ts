import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
trainName = "AP EXPERSS";
AvailTicket = 120;

BookTicket(){
  this.AvailTicket--;
  console.log("You clicked on this Book Ticket btn");
}

CanceTicket(){
 this.AvailTicket++;
  console.log("You clicked on this Cancel Ticket btn");
}

}

