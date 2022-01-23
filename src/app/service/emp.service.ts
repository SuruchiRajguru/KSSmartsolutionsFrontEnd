import { Injectable } from '@angular/core';
import { Emp } from '../model/emp';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { ApiResponseDTO } from '../model/api-response-dto';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
   jwtToken = localStorage.getItem('jwtToken');
  apiUrl:string="http://localhost:4200/kssmartsolutions/listEmpdata";
  headers=new HttpHeaders().set('content-Type','application-json');
  headers_object = new HttpHeaders().set('Content-Type', 'application/json').set("Authorization", "Bearer " + this.jwtToken)
  .set("Access-Control-Allow-Origin","*");

  httpOptions = {
    headers: this.headers_object
  };


  apiUrlSave:string="http://localhost:4200/kssmartsolutions/saveEmpData";

  apiUrlDelete:string="http://localhost:4200/kssmartsolutions/deleteEmpData/";
  apiUrlEdit:string="http://localhost:4200/kssmartsolutions/updateEmpDataById/";

  constructor(private http:HttpClient) { }

  public listEmp():Observable<ApiResponseDTO>{
    return this.http.get<ApiResponseDTO>(this.apiUrl,this.httpOptions);
  }

  public saveEmp(emp:Emp)
  {
    return this.http.post<ApiResponseDTO>(this.apiUrlSave,emp,this.httpOptions);
  }

  public deleteEmp(id:number | undefined)
  {
    return this.http.delete<ApiResponseDTO>(this.apiUrlDelete+id,this.httpOptions);
  }

  public editEmp(emp:Emp)
  {
    return this.http.put<ApiResponseDTO>(this.apiUrlEdit,emp,this.httpOptions);
  }
}
