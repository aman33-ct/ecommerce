import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private cart: CartService) { }
  totalItemInCart: number = 0;
  public searchTerm: string = '';

  ngDoCheck(){
    this.totalItemInCart = this.cart.findItemsInCart();
  }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log("SearchTerm", this.searchTerm);
    this.cart.search.next(this.searchTerm);
    
  }

}
