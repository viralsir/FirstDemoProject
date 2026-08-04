import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-for-demo',
  imports: [],
  templateUrl: './for-demo.html',
  styleUrl: './for-demo.css',
})
export class ForDemo {
  @Input() sname:string="";

  employeelist=[
    {"id":1,"name":"Amit",salary:340000,department:"HR"},
    {"id":2,"name":"Viren",salary:340000,department:"Account"},
    {"id":3,"name":"Rakesh",salary:340000,department:"HR"},
    {"id":4,"name":"Suresh",salary:340000,department:"Account"},
    {"id":5,"name":"Rachit",salary:340000,department:"HR"},

  ];
}
