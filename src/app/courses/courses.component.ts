import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Lezioni } from '../Interface/lezioni';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
  isLogged: boolean = false;
  isTeacher: boolean|undefined = false;
  
  constructor(private svg: AuthService){
  }

  lezione:Lezioni={
    link:" ",
    titolo:" ",
    materia:" ",
    descrizione:" "
  }

  ngOnInit() {
   this.checkLog()
   this.svg.isTeacher$.subscribe((res) => (this.isTeacher = res));
  }


 
  checkLog() {
   let user = localStorage.getItem('user');
   if (user) {
   this.isLogged = true;
   }
   }
 
}
