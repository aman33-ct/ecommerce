import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  totalprice!: number;

  constructor(private api: ApiService, private cart: CartService) { }
  
  details: any = [];
  searchKey: string = '';
  ngOnInit(): void {
    this.showAllProduct()
    this.cart.search.subscribe((val:any)=>{
      this.searchKey = val; 
      console.log("searchKey", this.searchKey);
    })
  }
  // console.log("df")
  showAllProduct() {
    this.api.callApi().subscribe(data => {
      this.details = data;
      console.log(this.details)
    })   
  }

  productsInCart(data: any){
    this.cart.productInfo.push(data);
    this.cart.sendMessage(this.cart.productInfo);
  }
  
}
