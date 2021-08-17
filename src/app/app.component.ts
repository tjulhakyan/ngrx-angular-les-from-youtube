import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  updateAt?: number;

  get cannotDecrease(): boolean{
    return this.counter<1;
  }

  increase(): void{
    this.counter++;
    this.updateAt=Date.now();
  }

  decrease(): void{
    this.counter--;
    this.updateAt=Date.now();
  }

  clear(): void{
    this.counter=0;
    this.updateAt=Date.now();
  }
}
