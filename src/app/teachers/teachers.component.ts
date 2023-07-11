import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  isLogged: boolean = false;

  ngOnInit() {
   this.checkLog()
  }
 
  checkLog() {
   let user = localStorage.getItem('user');
   if (user) {
   this.isLogged = true;
   }
   }
 
}
