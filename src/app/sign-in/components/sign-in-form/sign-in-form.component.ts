import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  email = '';
  password = '';

  constructor(private userService:UsersService) {}

  

  public signIn():void{

    if(this.email == '' || this.password == ''){
        Swal.fire({title: "Error", text: "Todos los campos son obligatorios", icon: "error", confirmButtonText: "Ok"}).then(() => {
          return;
        });
    }
    else{
      const user = {
        email: this.email,
        password: this.password
      };

      this.userService.loginUser(user).subscribe({
        next: (response: any) => {
          window.localStorage.setItem("Authorization", response.token);
          Swal.fire({title: "Success", text: "Usuario logueado correctamente", icon: "success", confirmButtonText: "Ok"}).then(() => {
            window.location.href = "/";
          });
        },
        error: (error) => {
          console.log(error);
          Swal.fire({title: "Error", text: "Usuario o contraseña incorrectos", icon: "error", confirmButtonText: "Ok"})
        }
      });
    }
  
  }

}
