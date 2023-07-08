import { Component } from '@angular/core';
import { ILoginData } from '../Interface/ilogin-data';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 constructor(private svc: AuthService){
 }

  data: ILoginData= {
    email:'',
    password:''
  }

  login(){
    this.svc.login(this.data).subscribe();
  } 
}

