import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private resdata: any;

  callApi(){
    return this.http.get<any>("https://fakestoreapi.com/products/")
  }

}
