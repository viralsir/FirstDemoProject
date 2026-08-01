import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

  message: string="";

  greetmessage(name:HTMLInputElement)
  {
        // this.message="wel come "+ name.value;
    this.message=` Wel come ${name.value} `;
    name.style.backgroundColor='red';
    name.value="";

  }
   rollno:number=0;
   name:string="";
   maths:number=0;
   science:number=0;
   status:string="";
   total:number=0;
   avg:number=0;
   grade:string="";

  protected save(rollno: HTMLInputElement, name: HTMLInputElement, maths: HTMLInputElement, science: HTMLInputElement) {

   this.rollno= parseInt(rollno.value);
   this.name = name.value;
   this.maths=parseInt(maths.value);
   this.science=parseInt(science.value);


   if(this.maths>=35 && this.science>=35){
     this.status="Pass";
     this.total=this.maths+this.science;
     this.avg=this.total/2;
     if (this.avg>=90)
       this.grade="A";
     else if(this.avg>70)
       this.grade="B";
     else
       this.grade="C";
   }
   else {
     this.status="Fail";
   }



  }
}
