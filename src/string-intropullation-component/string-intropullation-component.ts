import { Component } from '@angular/core';

@Component({
  selector: 'app-string-intropullation-component',
  imports: [],
  templateUrl: './string-intropullation-component.html',
  styleUrl: './string-intropullation-component.css',
})
export class StringIntropullationComponent {

  rollno:number=1;
  name:string="rajan";
  maths:number=94;
  science:number=55;
  english:number=55;
  total:number=this.maths+this.science+this.english;

}
