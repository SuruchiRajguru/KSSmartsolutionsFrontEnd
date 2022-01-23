import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { LoginResponse } from 'src/app/model/login-response';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest:LoginRequest = new LoginRequest();
loginResponse : LoginResponse = new LoginResponse();
  
constructor(private route:ActivatedRoute,private router:Router,private authenticationService:AuthenticationService) {
  this.loginRequest=new LoginRequest();
}

   onSubmit(){
    this.authenticationService.authenticateLogin(this.loginRequest).subscribe(response =>{
      if(response.responseText === 'Success'){
      this.loginResponse = response.responseData as LoginResponse;
      this.setData(this.loginResponse);
      this.router.navigate(['/home']);

      }
      else{
        alert("Invalid Credentials");
        this.setData(this.loginResponse);
      }

    });

  }

 setData(loginResponse : LoginResponse) {
    const jwtToken = loginResponse.jwtToken;
    localStorage.setItem('jwtToken', jwtToken);
 }
  
 
  ngOnInit(): void {
  }

}
