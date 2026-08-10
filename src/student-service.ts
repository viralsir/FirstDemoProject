import { Service } from '@angular/core';
import {Student} from './student';

@Service()
export class StudentService
{
  public studentlist:Array<Student>=[];

  addStudent(student:any)
  {
    this.studentlist.push(student);
  }
  viewStudent()
  {
    return this.studentlist;
  }

}
