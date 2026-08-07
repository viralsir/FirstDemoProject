import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mdf-demo',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './mdf-demo.html',
  styleUrl: './mdf-demo.css',
})
export class MDFDemo {

  formgroup:FormGroup=new FormGroup({
    eid:new FormControl('', [Validators.required]),
    ename: new FormControl('', [Validators.required,Validators.minLength(3)]),
    salary: new FormControl('', [Validators.required,Validators.min(0)]),
    department: new FormControl('', [Validators.required,Validators.minLength(2)]),

  })
  protected EmployeeList: any=[];


  protected save() {
    console.log(this.formgroup.value);
    this.EmployeeList.push(this.formgroup.value);
    this.formgroup.reset();
  }
}
