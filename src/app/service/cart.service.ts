import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productInfo: any = [];
  totalprice: number = 0;

  findItemsInCart() {
    return this.productInfo.length;
  }
  public subject = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<any>('')
  constructor() { }

  sendMessage(message: any) {
    this.subject.next(message)
  }
  receivedMessage(): Observable<any> {
    return this.subject.asObservable();
  }


}
