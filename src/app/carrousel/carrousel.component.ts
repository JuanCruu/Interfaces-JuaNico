import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  contador: number = 1;
  constructor() {
    this.moveCarousel();
   }
  

  ngOnInit(): void {
  }

  moveCarousel(){
    setTimeout(()=>{ 
      if(this.contador < 3){
        this.contador += 1;
      } else {
        this.contador = 1;
      }
      this.moveCarousel();
    }, 5000);
  }
}
