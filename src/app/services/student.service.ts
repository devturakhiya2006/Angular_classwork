import { Injectable } from '@angular/core';
export interface StuData{
  id:number
  name:string
  city:string
} 

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 stuArray: StuData[] = [
    { id: 1, name: 'Dev', city: 'Delhi' },
    { id: 2, name: 'Mitva', city: 'Mumbai' },
    { id: 3, name: 'Tanish', city: 'Pune' },
    { id: 4, name: 'Shavya', city: 'Kolkata' },
    { id: 5, name: 'shubh', city: 'Chennai' }
  ];

  displayStudentDetails(){
    return this.stuArray
  }
  constructor() { }
}
