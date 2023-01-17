import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  
  // Statement Data 

  statementData:any=[{
    stName:"Ashish",
    stAccountNo:'11002244',
    stDate:'04-08-2022',
    stDebit:"4000",
    stCredit:"2000",
    stBalance:"2000"
    
  }
  ];

  statementName="";
  statementAcNo="";
  statementDate="";
  statementDebit="";
  statementCredit="";
  statementBalance="";

  selectedIndex="";
    
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  openModalst(statementtemplate: TemplateRef<any>, index:any) {

    if(index !='null'){
      this.statementName = this.statementData[index].stName;
      this.statementAcNo = this.statementData[index].stAccountNo;
      this.statementDate = this.statementData[index].stDate;
      this.statementDebit = this.statementData[index].stDebit;
      this.statementCredit = this.statementData[index].stCredit;
      this.statementBalance = this.statementData[index].stBalance;
      this.selectedIndex = index;

    }
    
    this.modalRef = this.modalService.show(statementtemplate);
  }
  stsubmit(){
    let user={
      stName:this.statementName,
      stAccountNo:this.statementAcNo,
      stDate:this.statementDate,
      stDebit:this.statementDebit,
      stCredit:this.statementCredit,
      stBalance:this.statementBalance
    }
    console.log('this.statementData',this.statementData)
    this.statementData.push(user);

    this.stclose();
  }

  stupdate(){
    this.statementData[this.selectedIndex].stName=this.statementName;
    this.statementData[this.selectedIndex].stAccountNo=this.statementAcNo;
    this.statementData[this.selectedIndex].stDate=new Date();
    this.statementData[this.selectedIndex].stDebit=this.statementDebit;
    this.statementData[this.selectedIndex].stCredit=this.statementCredit;
    this.statementData[this.selectedIndex].stBalance=this.statementBalance;

    this.stclose();
  }

  stDelete(i:any){
    this.statementData.splice(i,1);
  }

  stclose(){
    this.statementName="";
    this.statementAcNo="";
    this.statementDate="";
    this.statementDebit="";
    this.statementCredit="";
    this.statementBalance="";
    this.modalRef?.hide();
  }

  stclear(){
    this.statementName="";
    this.statementAcNo="";
    this.statementDate="";
    this.statementDebit="";
    this.statementCredit="";
    this.statementBalance="";
  }




  ngOnInit(): void {
  }

}
