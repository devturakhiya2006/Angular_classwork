import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../custompipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,DatePipe,UpperCasePipe,TitleCasePipe,LowerCasePipe,JsonPipe,CurrencyPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  courseTitle = "HellO "
  today=new Date()
  salary=20000
  empList=[
    {id:123,name:"dev",dep:"it",salary:20000,city:''}
  ]
}