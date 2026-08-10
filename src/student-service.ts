import { Service } from '@angular/core';

@Service()
export class StudentService
{
  public studentlist:any=[]

  addStudent(student:any)
  {
    this.studentlist.push(student);
  }
  viewStudent()
  {
    return this.studentlist;
  }

}
