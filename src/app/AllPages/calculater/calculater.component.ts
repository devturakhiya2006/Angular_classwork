import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-calculater',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './calculater.component.html',
  styleUrl: './calculater.component.css'
})
export class CalculatorComponent {
  assignTitle='calculator';
  calImgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrueINFRqSTPfXl-EuubwW1dAyDgA9QW22grdIccxcog&s=10'
  FirstNum='';
  SecondNum='';
  calResult=0 ;
Add(){
  this.calResult=Number(this.FirstNum)+Number(this.SecondNum)
}
Sub(){
  this.calResult=Number(this.FirstNum)-Number(this.SecondNum)

}
Mul(){
  this.calResult=Number(this.FirstNum)*Number(this.SecondNum)

}
Div() {
  if (Number(this.SecondNum) === 0) {
    this.calResult = 0; 
    alert("Cannot divide by zero"); 
  } else {
    this.calResult = Number(this.FirstNum) / Number(this.SecondNum);
  }
}
clearData(){
  this.FirstNum=''
  this.SecondNum=''
  this.calResult=0
}
constructor(public cntService: CounterService) {}

}
// num1: number = 0;
//   num2: number = 0;
//   result: number | string = 0;

//   add() {
//     this.result = this.num1 + this.num2;
//   }
//   sub() {
//     this.result = this.num1 - this.num2;
//   }
//   mul() {
//     this.result = this.num1 * this.num2;
//   }
//   div() {
//     this.result = this.num2 !== 0 ? (this.num1 / this.num2) : "Cannot divide by zero";
//   }