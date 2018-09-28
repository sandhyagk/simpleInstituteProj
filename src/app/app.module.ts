import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Service File
 */
import { CompanyServiceService } from './company-service.service';


/**
 * Component File
 */
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


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    CompanyRecordComponent,
    CompanyUpdateComponent,
    
    ViewCompanyComponent,
    
   
    
    EmployComponent,
    
    EmployRecordComponent,
    
    EmployUpdateComponent,
    
    ViewEmployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
