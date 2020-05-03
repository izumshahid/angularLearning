import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { EmployeeComponent } from './employee/employee.component';
import { CompanyModule } from './company/company.module';
import { MyservicesService } from './myservices.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, CompanyModule, FormsModule],
  providers: [MyservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('this is app module');
  }
}
