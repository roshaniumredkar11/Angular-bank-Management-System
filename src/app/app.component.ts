import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'BankManagementSystem';


  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

 // Login Page

 logUserName="";
 logPassword="";

   openModallogin(logintemplate: TemplateRef<any>, index:any) {
    this.modalRef = this.modalService.show(logintemplate);
  }

  login(){
    console.log('UserName:',this.logUserName)
    console.log('Password:',this.logPassword)
  }

  // Registration Page

  regName="";
  regEmail="";
  regPhone="";
  regPassword="";
  regConPassword="";

  openModalreg(registrationtemplate: TemplateRef<any>, index:any) {
    this.modalRef = this.modalService.show(registrationtemplate);
  }

  registration(){
    console.log('Name:',this.regName)
    console.log('Email:',this.regEmail)
    console.log('Phone:',this.regPhone)
    console.log('Password:',this.regPassword)
    console.log('ConPassword:',this.regConPassword)
  }



}

