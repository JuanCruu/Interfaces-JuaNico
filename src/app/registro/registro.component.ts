import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
   step=1;

   Nombre="Gonzales";
   Apellido="Gonzales";
   Mail="@gonza.mail";
   Nacimiento=13;
   Ciudad="alguna";
   Direccion="estrada laprida";
   MetododePago="s";

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
