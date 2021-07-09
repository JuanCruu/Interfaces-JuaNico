import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Espacio } from '../Espacios';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  lugares: Espacio[] = [
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 4500,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/dpto.png",
      oferta: true,
      tipo: "busqueda"
    },
    {
      titulo: "Cabana con playa",
      descripcion: "Excelente departamento de excelente diseño totalmente reciclado, excelente vistas de la ciudad, muy buena ubicación, a metros del mar, del centro comercial Guemes, del Cacino, del Hotel Hermitage, Provincial y Museo Castagnino. Ideal para desplazarse caminando a todos los lugares, sin necesidad de...",
      precio: 5600,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/silla.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 2600,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/playa.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Estudio luminoso en Plaza Mitre",
      descripcion: "Disfrutá de la sencillez de este alojamiento tranquilo y céntrico. Muy luminoso, confortable y con todos los servicios. Excelente ubicación, a 50 mts. de Plaza Mitre, y a 500 mts. del shopping y de la Peatonal. Importante: a 100 mts el estacionamiento es libre y gratuito en la calle. Hay estacionamiento de pago cerca ...",
      precio: 3400,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/pileta.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Dpto con pileta",
      descripcion: "Dpto con pileta",
      precio: 1200,
      valoracion: [true, false, false, false, false],
      imagen: "../../assets/pileta2.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Mansion Playboy",
      descripcion: "Mansion playboy con todos los servicios. Cuenta con salon de juegos, casino privado, pileta y salida para lanchas y embarcaciones privada.",
      precio: 8500,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/casa.png",
      oferta: false,
      tipo: "busqueda"
    }
  ];

  busquedas: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    if(this.getSearch()[0] != "")
      this.busquedas = this.getSearch();
  }
  
  getSearch(): string[]{
    let splitArr = this.searchService.getSearch().split(',');
    return splitArr;
  }

  reverse(): void{
    let list = document.querySelector("#resultados");
    let clases = list?.classList;
    if(clases?.contains("flex-column")){
      list?.classList.remove("flex-column");
      list?.classList.add("flex-column-reverse");
    } else {
      list?.classList.remove("flex-column-reverse");
      list?.classList.add("flex-column");
    }
  }

  remove(e: string){
    this.busquedas.indexOf(e);
    this.busquedas = this.busquedas.filter(busqueda => busqueda !== e);
  }
}
