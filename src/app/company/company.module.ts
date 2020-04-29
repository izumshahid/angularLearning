import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployLoginComponent } from './employ-login/employ-login.component';

@NgModule({
  declarations: [EmployLoginComponent],
  imports: [CommonModule],
})
export class CompanyModule {
  constructor() {
    console.log('this is company module');
  }
}
