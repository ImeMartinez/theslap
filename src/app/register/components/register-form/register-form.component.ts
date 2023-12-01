import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  name:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';
  password2:string = '';
  verifyPassword:string = '';


}
