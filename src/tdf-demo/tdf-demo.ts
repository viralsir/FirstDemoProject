import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf-demo',
  imports: [
    FormsModule
  ],
  templateUrl: './tdf-demo.html',
  styleUrl: './tdf-demo.css',
})
export class TdfDemo
{
  EmployeeList:any =[]
  protected save(Employeeform: NgForm)
  {
     console.log(Employeeform.value);
     this.EmployeeList.push(Employeeform.value);
     Employeeform.reset();
  }
}
