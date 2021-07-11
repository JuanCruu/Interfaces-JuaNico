import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-busqueda',
  templateUrl: './spinner-busqueda.component.html',
  styleUrls: ['./spinner-busqueda.component.scss']
})
export class SpinnerBusquedaComponent implements OnInit {
  numero=0;
  spin=true;
  constructor() { 
    this.cargando();
    
  }
  cargando(){
    setTimeout(()=>{ 
      if(this.numero==100){
        this.spin=false;
      }
      if(this.numero<100)
      this.numero+=5;
     
      this.cargando();
    }, 90);
  }

  ngOnInit(): void {
  }

}
