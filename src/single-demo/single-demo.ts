import {Component, computed, effect, signal} from '@angular/core';
import {CartItem} from '../cart-item';



@Component({
  selector: 'app-single-demo',
  imports: [],
  templateUrl: './single-demo.html',
  styleUrl: './single-demo.css',
})
export class SingleDemo {
  count=signal<number>(0);
  cartItems=signal<CartItem[]>(
    [{ name:"Mobile",qty:22,price:1000 },
    ]);

  totalprice=computed(()=>this.cartItems().reduce((sum,item)=>sum+(item.qty*item.price),0))
  totaleffect=effect(()=>{
    let cartItems=this.cartItems();
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    console.log(cartItems);
  })

  reset(){
    this.count.set(0);
  }

  increment(){
    this.count.update(c=>c+1);
  }

  addToCart(){
    this.cartItems.update(items=>[...items,{
      name:"radio",qty:2,price:1000
    }])
  }


}
