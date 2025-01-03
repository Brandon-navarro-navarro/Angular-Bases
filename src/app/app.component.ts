import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
 public title: string = 'Mi primera App en Angular';
 public counter : number = 10;


   increment():void {
    this.counter++;
  }

   decrement():void {
    this.counter--;
  }

   reset():void {
    this.counter = 10;
  }

}
