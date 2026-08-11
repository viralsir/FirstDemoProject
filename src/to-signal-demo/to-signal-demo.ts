import {Component, inject, Signal, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../post';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-to-signal-demo',
  imports: [],
  templateUrl: './to-signal-demo.html',
  styleUrl: './to-signal-demo.css',
})
export class ToSignalDemo {
  http:HttpClient=inject(HttpClient);
  postlist=toSignal<Post[]>(this.http.get<Post []>("https://jsonplaceholder.typicode.com/posts"))



}
