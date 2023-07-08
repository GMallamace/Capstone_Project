import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}


// Mostra e nascondi domadne frequenti

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Cambio icona
        const icon = faq.querySelector('.faq__icon i');
        if(icon!.className === 'uil uil-plus') {
            icon!.className = "uil uil-minus";
        } else {
            icon!.className = "uil uil-plus";

        }
    })
})
