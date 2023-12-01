import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
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

  constructor(private userService:UsersService) { 

  }
  
  public registerUser():void{
    if(this.password !== this.password2){
      Swal.fire({title: "Error", text: "Las contraseñas no coinciden", icon: "error", confirmButtonText: "Ok"})
    }
    const user:User = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
    this.userService.registerUser(user).subscribe({
      next: (response: any) => {
        Swal.fire({title: "Success", text: "Usuario registrado correctamente", icon: "success", confirmButtonText: "Ok"})
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
function showAlert() {
  throw new Error('Function not implemented.');
}

