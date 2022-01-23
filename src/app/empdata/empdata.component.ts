import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../model/emp';
import { EmpService } from '../service/emp.service';
@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
  employees:Emp[]=[];
  emp:Emp;
  empToEdit:Emp;
 

  onSubmitEmployeeDataToAdd(){
    this.empService.saveEmp(this.emp).subscribe(response=>{
      if(response.responseText === 'Success'){
        this.employees=response.responseData as Emp[];
        alert("Employee Added Successfully!!!");
        this.emp=new Emp();
      }
      else{
        alert("Something Went Wrong!!");
        
      }
    },error=>{
      switch (error.status) {
        case 401:      //login
            this.router.navigateByUrl("/login");
            break;
        case 403:     //forbidden
            this.router.navigateByUrl("/login");
            break;
    }
    this.emp=new Emp();
  });

  }

  onDeleteEmployee(id:number | undefined){
    this.empService.deleteEmp(id).subscribe(response=>{
      if(response.responseText === 'Success'){
        this.employees=response.responseData as Emp[];
        alert("Employee Deleted Successfully!!!");
        this.emp=new Emp();
      }
      else{
        alert(response.responseText);
        
      }
    },error=>{
      switch (error.status) {
        case 401:      //login
            this.router.navigateByUrl("/login");
            break;
        case 403:     //forbidden
            this.router.navigateByUrl("/login");
            break;
    }
    this.emp=new Emp();
  });


  }
  
  
  constructor(private route:ActivatedRoute,private router:Router,private empService:EmpService ) {
    this.emp=new Emp();
    this.empToEdit=new Emp();
   }

  ngOnInit(): void {
    this.empService.listEmp().subscribe(response=>{
      if(response.responseText === 'Success'){
      this.employees=response.responseData as Emp[];
    }
    else{
      alert("Something Went Wrong!!");
    }
  },error=>{
    switch (error.status) {
      case 401:      //login
          this.router.navigateByUrl("/login");
          break;
      case 403:     //forbidden
          this.router.navigateByUrl("/login");
          break;
  }
  });
  }

  onClickEditModal(empToEdit : Emp){
    this.empToEdit = empToEdit;
  }
  onSubmitEmployeeDataToEdit(emp : Emp){
    this.empService.editEmp(emp).subscribe(response=>{
      if(response.responseText === 'Success'){
        this.employees=response.responseData as Emp[];
        alert("Employee Deatils Updated Successfully!!!");
        this.emp=new Emp();
      }
      else{
        alert(response.responseText);
        
      }
    },error=>{
      switch (error.status) {
        case 401:      //login
            this.router.navigateByUrl("/login");
            break;
        case 403:     //forbidden
            this.router.navigateByUrl("/login");
            break;
    }
  });
  }

}
