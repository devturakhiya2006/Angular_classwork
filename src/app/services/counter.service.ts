import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  incValue:number=0
  decValue:number=0

  incLogic(){
   this.incValue++
  }
  decLogic(){
   this.decValue--
  }
}
