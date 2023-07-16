import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Lezioni } from '../Interface/lezioni';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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

  constructor(private svg: AuthService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.checkLog();
    this.svg.isTeacher$.subscribe((res) => (this.isTeacher = res));
    this.caricaCarteSalvate(); // Carica le carte salvate dal localStorage
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

    // Salva le carte nel localStorage
    this.salvaCarte();

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

    // Aggiorna il localStorage
    this.salvaCarte();
  }

  caricaCarteSalvate() {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      this.cards = JSON.parse(savedCards);
    }
  }

  salvaCarte() {
    // Salva le carte nel localStorage
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  getVideoUrl(link: string): SafeResourceUrl {
    const videoUrl = link.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
