import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post';

@Service()
export class PostService {

  http:HttpClient=inject(HttpClient);
  //constructor(private http: HttpClient) {}

  public getAllPost():Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")

};

}
