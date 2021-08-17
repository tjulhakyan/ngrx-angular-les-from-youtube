import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from "./reducers/counter";
import {count, map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  updateAt?: number;
  count$=this.store.select(countSelector);
  cannotDecrease$=this.count$.pipe(map(count=>count<1))
  updateAt$=this.store.select(updatedAtSelector)


  constructor(private store: Store){}

  // get cannotDecrease(): boolean{
  //   return this.counter<1;
  // }

  increase(): void{
    // this.counter++;
    // this.updateAt=Date.now();
    this.store.dispatch(increase()); //asum e Stor-in or katarvel e hetyevyal gortsoxutyun@
  }

  decrease(): void{
    // this.counter--;
    // this.updateAt=Date.now();
    this.store.dispatch(decrease()); //asum e Stor-in or katarvel e hetyevyal gortsoxutyun@
  }

  clear(): void{
    // this.counter=0;
    // this.updateAt=Date.now();
    this.store.dispatch(clear());  //asum e Stor-in or katarvel e hetyevyal gortsoxutyun@
  }
}
