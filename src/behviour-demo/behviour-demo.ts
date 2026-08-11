import { Component } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-behviour-demo',
  imports: [
    AsyncPipe
  ],
  templateUrl: './behviour-demo.html',
  styleUrl: './behviour-demo.css',
})
export class BehviourDemo {
  private countsubject=new BehaviorSubject<number>(0)
  count=this.countsubject.asObservable();

  increment()
  {
     this.countsubject.next(this.countsubject.value+1);
  }



}
