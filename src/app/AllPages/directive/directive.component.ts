import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isCourseStart = false

  studentList = [
    'Rohit',
    'Dev',
    'Dhoni',
    'Raj',
    'Vraj'
  ]
  attributeval1: string = ''
  attributeval2: string = ''
  attributeval3: string = ''
  attributeval4: string = ''

  Employee = [
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York', department: 'IT' },
    { id: 2, name: 'Alice Smith', email: 'alice@example.com', city: 'London', department: 'HR' },
    { id: 3, name: 'David Brown', email: 'david@example.com', city: 'Paris', department: 'Finance' },
    { id: 4, name: 'Emma Wilson', email: 'emma@example.com', city: 'New York', department: 'Marketing' },
    { id: 5, name: 'Michael Lee', email: 'michael@example.com', city: 'Tokyo', department: 'IT' },
    { id: 6, name: 'Sophia Clark', email: 'sophia@example.com', city: 'London', department: 'Sales' },
    { id: 7, name: 'James Taylor', email: 'james@example.com', city: 'Sydney', department: 'Finance' },
    { id: 8, name: 'Olivia Martin', email: 'olivia@example.com', city: 'Paris', department: 'HR' },
    { id: 9, name: 'William Scott', email: 'william@example.com', city: 'Tokyo', department: 'Marketing' },
    { id: 10, name: 'Ava Harris', email: 'ava@example.com', city: 'Sydney', department: 'Sales' }
  ];
  toggleState() {
    this.isCourseStart = !this.isCourseStart
  }
  changeToSuccess() {
    this.attributeval1 =
      this.attributeval1 === 'bg-success' ? '' : 'bg-success';
  }
  changeToPrimary() {
    this.attributeval2 =
      this.attributeval2 === 'bg-primary' ? '' : 'bg-primary';
  }
  changeToWarning() {
    this.attributeval3 =
      this.attributeval3 === 'bg-warning' ? '' : 'bg-warning';
  }
  changeToDanger() {
    this.attributeval4 =
      this.attributeval4 === 'bg-danger' ? '' : 'bg-danger'
  }
}