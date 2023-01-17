import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff.component';
import { StatementsComponent } from './statements/statements.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'statement',
    component:StatementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
