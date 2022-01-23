import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  authenticateUrl:string="http://localhost:8080/kssmartsolutions/authentication/authenticate";
  headers=new HttpHeaders().set('content-Type','application-json');



  constructor(private http:HttpClient) { }

  public authenticateLogin(loginRequest:LoginRequest):Observable<any>{
    return this.http.post(this.authenticateUrl,loginRequest);
  }
}
