import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {Author} from '../author';

@Component({
  selector: 'app-author-view',
  imports: [],
  templateUrl: './author-view.html',
  styleUrl: './author-view.css',
})
export class AuthorView {
   http:HttpClient=inject(HttpClient);
   authorlist=toSignal<Author[]>(this.http.get<Author[]>("http://localhost:9090/authors"))

}
