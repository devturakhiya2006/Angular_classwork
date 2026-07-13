import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  /* 
     {{}}   //intrerpolation 
     [[]]   //property binding
     ()   //event binding
     [()]   //two way binding //banana 
  */
    courseTitle = "Angular Course";
    courseContent="Begginer "
    courseDuration="2 months"
    courseFee= 2000
    isCourseAvailable=true
    imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnULbfbYGEuuC2GVfStMgUM2ivq5REnhLHMnvuLk2Ig&s=10"

enrollnow(){
  alert("You are enrolled in the course: " + this.courseTitle);
}
}
