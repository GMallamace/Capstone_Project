import { Component } from '@angular/core';


interface Message {
  username: string;
  email: string;
  content: string;
}


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {

  username!: string;
  email!: string;
  messageContent!: string;
  sentMessages: Message[] = [];

  sendMessage() {
    const newMessage: Message = {
      username: this.username,
      email: this.email,
      content: this.messageContent,
    };

    // Invia il messaggio alla piattaforma (es. API, servizio di backend, ecc.)
    console.log('Messaggio inviato:', newMessage);

    // Aggiungi il messaggio inviato alla lista dei messaggi visualizzati
    this.sentMessages.push(newMessage);

    // Resettare i campi del modulo dopo l'invio del messaggio
    this.username = '';
    this.email = '';
    this.messageContent = '';
  }


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
