import { Component } from '@angular/core';
import { ILoginData } from '../Interface/ilogin-data';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogged: boolean = false;
  
  constructor(private svc: AuthService){
  }
  
  ngOnInit() {
    this.checkLog();
  }
  
  checkLog() {
    let user = localStorage.getItem('user');
    if (user) {
      this.isLogged = true;
    }
  }
  
  data: ILoginData = {
    email:'',
    password:''
  }
  
  login() {
    this.svc.login(this.data).subscribe(() => {
      // Salva i dati nel localStorage dopo il login
      localStorage.setItem('user', JSON.stringify(this.data));
      
      // Svuota i campi di inserimento dopo il login
      this.data = {
        email: '',
        password: ''
      };
      
      // Imposta isLogged a true
      this.isLogged = true;
    });
  }
}
