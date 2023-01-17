import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

    
// Staff Data 
staffData:any=[
  {
    sName:"Rahul",
    sGender:"Male",
    sMobile:"8989757589",
    sBranchId:"00022",
    sDesignation:"Manager",
    sAddress:"Dharampeth"

    
    
  }
];
staffName="";
staffGender="";
staffMobile="";
staffBranchId="";
staffDesignation="";
StaffAddress="";

selectedIndex="";

modalRef?: BsModalRef;
constructor(private modalService: BsModalService) {}

openModals(stafftemplate: TemplateRef<any>, index:any) {

  if (index !='null'){
    this.staffName = this.staffData[index].sName;
    this.staffGender = this.staffData[index].sGender;
    this.staffMobile = this.staffData[index].sMobile;
    this.staffBranchId = this.staffData[index].sBranchId;
    this.staffDesignation = this.staffData[index].sDesignation;
    this.StaffAddress = this.staffData[index].sAddress;
    this.selectedIndex = index;
  }
  this.modalRef = this.modalService.show(stafftemplate);
}

submitstaff(){
  let user={
    sName:this.staffName,
    sGender:this.staffGender,
    sMobile:this.staffMobile,
    sBranchId:this.staffBranchId,
    sDesignation:this.staffDesignation,
    sAddress:this.StaffAddress
  }

  console.log('this.staffData',this.staffData)
  this.staffData.push(user);

  this.closestaff();

}

updatestaff(){

  this.staffData[this.selectedIndex].sName=this.staffName;
  this.staffData[this.selectedIndex].sGender=this.staffGender,
  this.staffData[this.selectedIndex].sMobile=this.staffMobile;
  this.staffData[this.selectedIndex].sBranchId=this.staffBranchId;
  this.staffData[this.selectedIndex].sDesignation=this.staffDesignation;
  this.staffData[this.selectedIndex].sAddress=this.StaffAddress;

  console.log('this.staffData',this.staffData)

  this.closestaff();
}

deletestaff(i:any){
  this.staffData.splice(i,1);
}

closestaff(){
  this.staffName="";
  this.staffGender="";
  this.staffMobile="";
  this.staffBranchId="";
  this.staffDesignation="";
  this.StaffAddress="";
  this.modalRef?.hide();
}
clearstaff(){
  this.staffName="";
  this.staffGender="";
  this.staffMobile="";
  this.staffBranchId="";
  this.staffDesignation="";
  this.StaffAddress="";
}


  ngOnInit(): void {
  }

}
