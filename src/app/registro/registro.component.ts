import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
   step=1;

   Nombre="Nombre";
   Apellido="Apellido";
   Mail="mail@mail";
   Nacimiento='12/07/2021';
   Ciudad="Bolivar";
   Direccion="Estrada Laprida";
   MetododePago="";

   bar=document.getElementById('progressbar');
   
   spin:boolean=false;
  constructor() { 
    setTimeout(()=>{ 
      this.spin=true; 
    
    }, 2000);
  }
  
  ngOnInit(): void {
  }
  next(){
    this.step++;
    console.log(this.bar)
  }
  back(){
    this.step--;
  }
  finish(){
  }
}
