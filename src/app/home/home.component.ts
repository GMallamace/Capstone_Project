import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;

  constructor() {

   }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
apri(event:MouseEvent){
  const faq= event.target! as HTMLElement
          faq.classList.toggle('open');
  
          console.log('ciao')
  
          // Cambio icona
          const icon = faq.querySelector('.faq__icon i');
         /* if(icon!.className === 'uil uil-plus') {
          console.log('ciao2')
            icon!.className = "uil uil-minus";
          } else {
              icon!.className = "uil uil-plus";
  
          } */
          icon?.classList.toggle('uil-plus');
          icon?.classList.toggle('uil-minus');
}
}


// Mostra e nascondi domadne frequenti




