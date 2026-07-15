import { Routes } from '@angular/router';
import { CalculatorComponent } from './AllPages/calculater/calculater.component';
import { CourseComponent } from './AllPages/course/course.component';
import { DirectiveComponent } from './AllPages/directive/directive.component';

export const routes: Routes = [
    {path:'calculater', component : CalculatorComponent},
    {path:'course', component : CourseComponent},
    {path:'directives', component : DirectiveComponent}
];
