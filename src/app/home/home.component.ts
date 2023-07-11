import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  isLogged: boolean = false;
  constructor() {

   }

  ngOnInit() {

    this.checkLog()

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  checkLog() {
    let user = localStorage.getItem('user');
    if (user) {
    this.isLogged = true;
    }
    }

apri(event:MouseEvent){
  const faq= event.target! as HTMLElement
          faq.classList.toggle('open');

          console.log('ciao')

          const icon = faq.querySelector('.faq__icon i');
          icon?.classList.toggle('uil-plus');
          icon?.classList.toggle('uil-minus');
}
}  // FINE PARTE DOMANDE E CARICAMENTO 2s Mostra e nascondi domadne frequenti







