import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { CompanyRecordComponent } from './company-record/company-record.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

import { EmployComponent } from './employ/employ.component';
import { EmployRecordComponent } from './employ-record/employ-record.component';
import { EmployUpdateComponent } from './employ-update/employ-update.component';
import { ViewEmployComponent } from './view-employ/view-employ.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyRecord', component: CompanyRecordComponent },
  { path: 'companyUpdate', component: CompanyUpdateComponent },
  { path: 'companyView', component: ViewCompanyComponent },
  { path: 'employ', component: EmployComponent },
  { path: 'employRecord', component: EmployRecordComponent },
  { path: 'employUpdate', component: EmployUpdateComponent },
  { path: 'employView', component: ViewEmployComponent },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})



export class AppRoutingModule { }
