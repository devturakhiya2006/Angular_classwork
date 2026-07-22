import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseComponent } from './AllPages/course/course.component';
import { EmployeeComponent } from './AllPages/employee/employee.component';
import { UniversityComponent } from './AllPages/university/university.component';
import { CalculatorComponent } from './AllPages/calculater/calculater.component';
import { PipeComponent } from './AllPages/pipe/pipe.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CourseComponent,EmployeeComponent,UniversityComponent,CalculatorComponent,RouterLink,PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
