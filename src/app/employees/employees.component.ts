import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


   // Employee Data
   employeeData:any=[
    {
      empId:"00022",
      empName:"Rahul",
      empEmail:"rahul@gmail.com",
      empMobile:"8989757589",
      empDesignation:"Manager",
      empSalary:"30,000"
    }
  ];

  employeeId="";
  employeeName="";
  employeeEmail="";
  employeMobile="";
  employeeDesgnation="";
  employeeSalary="";

  selectedIndex="";


  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(employeetemplate: TemplateRef<any>, index:any) {

    if (index !='null'){
      this.employeeId = this.employeeData[index].empId;
      this.employeeName = this.employeeData[index].empName;
      this.employeeEmail = this.employeeData[index].empEmail;
      this.employeMobile = this.employeeData[index].empMobile;
      this.employeeDesgnation = this.employeeData[index].empDesignation;
      this.employeeSalary = this.employeeData[index].empSalary;
      this.selectedIndex = index;
    }
    this.modalRef = this.modalService.show(employeetemplate);
  }

  submit(){
    let user={
      empId:this.employeeId,
      empName:this.employeeName,
      empEmail:this.employeeEmail,
      empMobile:this.employeMobile,
      empDesignation:this.employeeDesgnation,
      empSalary:this.employeeSalary
    }

    console.log('this.employeeData',this.employeeData)
    this.employeeData.push(user);

    this.close();

  }

  update(){
    this.employeeData[this.selectedIndex].empId=this.employeeId;
    this.employeeData[this.selectedIndex].empName=this.employeeName,
    this.employeeData[this.selectedIndex].empEmail=this.employeeEmail;
    this.employeeData[this.selectedIndex].empMobile=this.employeMobile;
    this.employeeData[this.selectedIndex].empDesignation=this.employeeDesgnation;
    this.employeeData[this.selectedIndex].empSalary=this.employeeSalary;

    this.close();
  }

  eDelete(i:any){
    this.employeeData.splice(i,1);
  }

  close(){
    this.employeeId="";
    this.employeeName="";
    this.employeeEmail="";
    this.employeMobile="";
    this.employeeDesgnation="";
    this.employeeSalary="";
    this.modalRef?.hide();
  }

  clear(){
    this.employeeId="";
    this.employeeName="";
    this.employeeEmail="";
    this.employeMobile="";
    this.employeeDesgnation="";
    this.employeeSalary="";
  }

 

  ngOnInit(): void {
  }

}
