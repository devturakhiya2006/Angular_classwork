import { Routes } from '@angular/router';
import { CalculatorComponent } from './AllPages/calculater/calculater.component';
import { CourseComponent } from './AllPages/course/course.component';
import { DirectiveComponent } from './AllPages/directive/directive.component';
import { PipeComponent } from './AllPages/pipe/pipe.component';
import { LifecycleComponent } from './AllPages/lifecycle/lifecycle.component';
import { ParentComponent } from './AllPages/parent/parent.component';
import { FormBuilderComponent } from './AllPages/form-builder/form-builder.component';
import { AuthComponent } from './form/auth/auth.component';

export const routes: Routes = [
    { path: 'course', component: CourseComponent },
    { path: 'directives', component: DirectiveComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'lifecycle', component: LifecycleComponent },
    { path: 'input', component: ParentComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'form-builder', component: FormBuilderComponent },
    {
        path: 'calculater',
        loadComponent: () => import('./AllPages/calculater/calculater.component').then(
            (m) => m.CalculatorComponent
        )
    }
];