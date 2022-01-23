import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const jwtToken = localStorage.getItem('jwtToken');
      console.log(jwtToken);
      const modifiedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
      });
      return next.handle(modifiedRequest);
  }
}
