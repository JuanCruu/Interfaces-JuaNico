import { Component, OnInit } from '@angular/core';
import { Espacio } from '../Espacios';
import { Lugar } from '../Lugar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
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
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 3400,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/pileta.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 1200,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/pileta2.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 8500,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/casa.png",
      oferta: false,
      tipo: "busqueda"
    }
  ];

  valorados: [Espacio, Espacio][] = [
    [{
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
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 5600,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/silla.png",
      oferta: false,
      tipo: "busqueda"
    }],
    [{
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 2600,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/playa.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 3400,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/pileta.png",
      oferta: false,
      tipo: "busqueda"
    }],
    [{
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 1200,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/pileta2.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 8500,
      valoracion: [true, true, true, true, true],
      imagen: "../../assets/casa.png",
      oferta: false,
      tipo: "busqueda"
    }]
  ]

  lugaresInteres: Lugar[] = [
    {
      nombre:"Montañas",
      imagen:"https://aventuravertical.com/wp-content/uploads/2019/12/monta%C3%B1as-de-mexico.jpg"
    },
    {
      nombre:"Playas",
      imagen:"https://www.wallpapertip.com/wmimgs/16-165685_hd-pics-photos-attractive-best-beach-coconut-tree.jpg"
    },  {
      nombre:"Bosques",
      imagen:"https://www.ngenespanol.com/wp-content/uploads/2018/08/Tecnolog%C3%ADa-en-favor-de-los-bosques-1280x720.jpg"
    },  {
      nombre:"Cultura",
      imagen:"https://estaticos.muyinteresante.es/media/cache/400x300_thumb/uploads/images/gallery/5f97164d5bafe82537aac059/1-cultura-mexicana.jpg"
    },  {
      nombre:"Ciudad",
      imagen:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/05/23/5fa91db5a0923.jpeg"
    },{
      nombre:"Nieve",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9HVAI54Su_nQRYM_X-PRgpvJ4FN6ozw5BA&usqp=CAU"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
