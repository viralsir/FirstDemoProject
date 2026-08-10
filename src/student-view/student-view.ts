import {Component, inject} from '@angular/core';
import {StudentService} from '../student-service';

@Component({
  selector: 'app-student-view',
  imports: [],
  templateUrl: './student-view.html',
  styleUrl: './student-view.css',
})
export class StudentView {

  studentservice: StudentService=inject(StudentService);

}
