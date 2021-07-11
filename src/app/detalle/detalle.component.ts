import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  spin=false;
  constructor() {
    setTimeout(()=>{ 
      this.spin=true; 
    
    }, 2000);
   }

  ngOnInit(): void {
  }

}
