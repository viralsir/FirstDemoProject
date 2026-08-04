import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  imports: [],
  templateUrl: './directive-demo.html',
  styleUrl: './directive-demo.css',
})
export class DIRECTIVEDEMO {

  rollno:number=1;
  name:string="Amit";
  maths:number=95;
  science:number=94;
  english:number=95;
  total:number=this.maths+this.science+this.english;
  avg:number=this.total/3;
  Grade:string="A";



}
