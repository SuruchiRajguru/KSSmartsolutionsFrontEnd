import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { EmpdataComponent } from './empdata/empdata.component';
import { HomeComponent } from './home/home.component';
import { HomechildComponent } from './homechild/homechild.component';

const routes: Routes = [
  {path:'',component:AuthenticationComponent,children:[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
    ]},
  {path:'home',component:HomeComponent,children:[
    {path:'info',component:HomechildComponent},
    {path:'empdata',component:EmpdataComponent}
    ]
}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
