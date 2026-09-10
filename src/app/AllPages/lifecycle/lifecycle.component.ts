import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { ProductService } from '../../services/product.service';
import { tick } from '@angular/core/testing';
// import("../../services/student.service").

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit {
  product: any
  constructor(private proServices: ProductService) { }

  ngOnInit(): void {
    this.product = this.proServices.getAllProduct()

    // const productObservable = this.proServices.getAllProduct() as unknown as Observable<any[]>;
    // productObservable.subscribe((data: any[]) => {
    //   this.product = data;
    // });
  }

  // studentInstance:any[]=[]  //StuData[] | undefined;

  // constructor(private stuService: StudentService) {
  //   console.log('Construction Execution');
  // }
  // ngOnInit() {
  //   this.studentInstance = this.stuService.displayStudentDetails();
  //   console.log(this.studentInstance);

  // }
  // getData() {
  // }

  // ngOnDestroy(): void {
  //   alert("you are leaving....!");
  // }



  //2> lifesycle concept
  // ngOnInit(): void {
  //   console.log('component initialised')
  //   // throw new Error('Method not implemented.');
  // }
  // constructor() {
  //   console.log('COnstruction Execution');
  // }
}
