import { Component } from '@angular/core';
import { IRegisterData } from '../Interface/iregister-data';
import { AuthService } from '../Services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private svc: AuthService){
  }

  data: IRegisterData = { username: '', email: '', password: '', isTeacher: false }

  register (){
    let psw_1:HTMLInputElement|null = (document.getElementById('psw') as HTMLInputElement);
    let psw_2:HTMLInputElement|null = (document.getElementById('ripetipassword') as HTMLInputElement);

   if (psw_1!.value === psw_2!.value) {   
     this.svc.register(this.data).pipe(tap(res =>{
    this.svc.login({email:this.data.email, password:this.data.password}).subscribe()
     }))
     .subscribe()
   } else {
       alert('password non corretta')
   }
    } 
}   

