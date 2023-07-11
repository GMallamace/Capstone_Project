import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
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
