import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
