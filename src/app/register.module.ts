import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register/components/register-form/register-form.component';
import { RegisterPage } from './register/register.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterPage

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class RegisterModule { }
