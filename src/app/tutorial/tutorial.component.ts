import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
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


