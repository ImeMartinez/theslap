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
  constructor(private userService:UsersService) { 

  }
  
  public registerUser():void{

    if(this.password != this.password2){
      Swal.fire({title: "Error", text: "Las contraseñas no coinciden", icon: "error", confirmButtonText: "Ok"}).then(() => {
        return;
      });
    }
    else if(this.name == "" || this.lastName == '' || this.email == '' || this.password == '' || this.password2 == ''){
      Swal.fire({title: "Error", text: "Todos los campos son obligatorios", icon: "error", confirmButtonText: "Ok"}).then(() => {
        return
      });
    }
    else{

    const user:User = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      image: "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
    }

    this.userService.checkUserExists(user.email).subscribe({
      next: (response) => {
        console.log(response)
        if(response){
          Swal.fire({
            title: "Error", 
            text: "El correo que ingresaste ya está registrado. Intenta con otro", 
            icon: "error", 
            confirmButtonText: "Ok"
          }).then(() => {
            return;
          });
        }
        else{
          this.userService.registerUser(user).subscribe({
            next: (response) => {
              console.log(response.user)
              
              Swal.fire({title: "Success", text: "Usuario registrado correctamente", icon: "success", confirmButtonText: "Ok"}).then(() => {
                window.localStorage.setItem("Authorization", response.token);
                window.location.href = "/";
              });
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      },
      error: (error) => {
        return error
      }
    });

    
   
  }}
}