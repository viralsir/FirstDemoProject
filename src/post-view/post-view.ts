import {Component, inject} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post-service';

@Component({
  selector: 'app-post-view',
  imports: [],
  templateUrl: './post-view.html',
  styleUrl: './post-view.css',
})
export class PostView {

   postservice: PostService=inject(PostService);
   postlist:Post[]=[];

   loaddata(){
     this.postservice.getAllPost().subscribe({
       next: (data  )=>{this.postlist = data},
       error:(err)=>{console.log(err)}
     });
   }

}
