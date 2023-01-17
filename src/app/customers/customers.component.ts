import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  // Costomers Data 

  customerData:any=[{
    cName:"Ashish",
    cDOB:'04-05-2001',
    cGender:"Male",
    cMobile:"9359658778",
    cAccountno:"100001",
    cAccounttype:"Saving"
  }
  ];

  customerName="";
  customerDOB="";
  customerGender="";
  cutomerMobile="";
  customerAcno="";
  customerActype="";

  selectedIndex="";
  
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalc(customertemplate: TemplateRef<any>, index:any) {

    if(index !='null'){
      this.customerName = this.customerData[index].cName;
      this.customerDOB = this.customerData[index].cDOB;
      this.customerGender = this.customerData[index].cGender;
      this.cutomerMobile = this.customerData[index].cMobile;
      this.customerAcno = this.customerData[index].cAccountno;
      this.customerActype = this.customerData[index].cAccounttype;
      this.selectedIndex = index;

    }
    
    this.modalRef = this.modalService.show(customertemplate);
  }
  csubmit(){
    let user={
      cName:this.customerName,
      cDOB:this.customerDOB,
      cGender:this.customerGender,
      cMobile:this.cutomerMobile,
      cAccountno:this.customerAcno,
      cAccounttype:this.customerActype
    }
    console.log('this.employeeData',this.customerData)
    this.customerData.push(user);

    this.cclose();
  }

  cupdate(){
    this.customerData[this.selectedIndex].cName=this.customerName;
    this.customerData[this.selectedIndex].cDOB=new Date();
    this.customerData[this.selectedIndex].cGender=this.customerGender;
    this.customerData[this.selectedIndex].cMobile=this.cutomerMobile;
    this.customerData[this.selectedIndex].cAccountno=this.customerAcno;
    this.customerData[this.selectedIndex].cAccounttype=this.customerActype;

    this.cclose();
  }

  cDelete(i:any){
    this.customerData.splice(i,1);
  }

  cclose(){
    this.customerName="";
    this.customerDOB="";
    this.customerGender="";
    this.cutomerMobile="";
    this.customerAcno="";
    this.customerActype="";
    this.modalRef?.hide();
  }

  cclear(){
    this.customerName="";
    this.customerDOB="";
    this.customerGender="";
    this.cutomerMobile="";
    this.customerAcno="";
    this.customerActype="";
  }




  ngOnInit(): void {
  }

}
