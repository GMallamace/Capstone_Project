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
  isTeacher: boolean | undefined = false;
  lezione: Lezioni = {
    link: '',
    titolo: '',
    materia: '',
    descrizione: '',
    isEditing: false
  };
  cards: Lezioni[] = []; // Array per conservare le cards caricate

  constructor(private svg: AuthService) {}

  ngOnInit() {
    this.checkLog();
    this.svg.isTeacher$.subscribe((res) => (this.isTeacher = res));
  }

  checkLog() {
    let user = localStorage.getItem('user');
    if (user) {
      this.isLogged = true;
    }
  }

  pubblicaMateriale() {
    // Aggiungi la lezione all'array cards
    this.cards.push({ ...this.lezione });
    // Resetta il form
    this.lezione = {
      link: '',
      titolo: '',
      materia: '',
      descrizione: '',
      isEditing: false
    };
  }

  modificaMateriale(index: number) {
    // Implementa la logica per la modifica del materiale
    // Puoi accedere alla card utilizzando this.cards[index]
  }

  eliminaMateriale(index: number) {
    // Rimuovi la card dall'array cards
    this.cards.splice(index, 1);
  }

  getVideoUrl(link: string) {
    return link.replace("watch?v=", "embed/");
  }
}
