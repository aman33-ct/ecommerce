import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  callApi(userdata:any){
    // console.log("service", userdata)
    return this.http.post("http://localhost:3000/signup", userdata).subscribe((result)=>{
      alert("Registerd Successfully! Plz Login now");
      console.log("service", userdata)
    })
  }
  callLogin(data:any){
    return this.http.get("http://localhost:3000/signup")
    .subscribe(logindata => {
      console.log("login",logindata)
    })
  }
}
