import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignInPage } from './sign-in.page';



@NgModule({
  declarations: [
    SignInFormComponent,
    SignInPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SignInModule { }
