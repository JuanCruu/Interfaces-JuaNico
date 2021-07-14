import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  spin=false;
  favorite=false;
  boton="Alquilar";
  constructor() {
    setTimeout(()=>{ 
      this.spin=true; 
    
    }, 2000);
   }
   favorito(){
     this.favorite = !this.favorite;
   }
   animate(){
     document.getElementById("alquilar")?.classList.add("Addgradient")
     document.getElementById("alquilarD")?.classList.add("Addgradient")
     this.boton="Alquilado"
    }
  ngOnInit(): void {
  }

}
