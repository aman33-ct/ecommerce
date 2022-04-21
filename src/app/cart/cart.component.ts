import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  result: any;
  totalprice: number = 0;
  isCartEmpty!: boolean;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.receivedMessage().subscribe((data) => {
      this.result = [...data];
    })
  }

  ngDoCheck() {
    this.result = this.cart.productInfo;
    if(this.result.length == 0){
      this.isCartEmpty = true;
    }
    this.totalprice = 0;
    for (let i = 0; i < this.result.length; i++) {
       this.totalprice += this.result[i].price;
       console.log(this.totalprice)
    }

  }
  removeItem(id: number) {
    this.totalprice = 0;
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i].id == id) {
        //  this.result.splice(i, 1)
        this.result = this.result.filter((item: { id: number; }) => item.id !== id);
        this.cart.productInfo = this.result;
      }
    }
  }

  // if(this.cart.productInfo.length != 0){

  // }
}
