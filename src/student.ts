export class Student {
  rollno:number=0;
  name:string="";
  maths:number=0;
  science:number=0;
  english:number=0;
  PASSINGMARKS=35;
  constructor(rollno: number, name: string, maths: number, science: number, english: number) {
    this.rollno = rollno;
    this.name = name;
    this.maths = maths;
    this.science = science;
    this.english = english;
  }

  public  total()
   {
     return this.maths+this.science+this.english;
   }

   public status()
   {
     if(this.maths>=this.PASSINGMARKS && this.science>=this.PASSINGMARKS && this.english>=this.PASSINGMARKS )
     {
       return "PASS";
     }
     else{
       return "FAIL";
     }
   }

}
