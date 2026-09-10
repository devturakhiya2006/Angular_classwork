import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,RouterLink],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMessage:string="hello dev from parent component "
}
