import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {StudentService} from '../student-service';

@Component({
  selector: 'app-student-entry',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './student-entry.html',
  styleUrl: './student-entry.css',
})
export class StudentEntry {

  studentservice:StudentService=inject(StudentService);


  studentformgorup:FormGroup=new FormGroup({
    rollno:new FormControl('',[Validators.required,Validators.min(1)]),
    name:new FormControl('',[Validators.required]),
    maths:new FormControl('',[Validators.required,Validators.min(0)]),
    science:new FormControl('',[Validators.required,Validators.min(0)]),
    english:new FormControl('',[Validators.required,Validators.min(0)]),
  })

  protected save()
  {
    this.studentservice.addStudent(this.studentformgorup.value);
    this.studentformgorup.reset();
  }


}
