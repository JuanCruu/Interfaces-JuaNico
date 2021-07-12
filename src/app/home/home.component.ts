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
      imagen: "https://i.imgur.com/IO7gSOE.png",
      oferta: true,
      tipo: "busqueda"
    },
    {
      titulo: "Cabana con playa",
      descripcion: "Excelente departamento de excelente diseño totalmente reciclado, excelente vistas de la ciudad, muy buena ubicación, a metros del mar, del centro comercial Guemes, del Cacino, del Hotel Hermitage, Provincial y Museo Castagnino. Ideal para desplazarse caminando a todos los lugares, sin necesidad de...",
      precio: 5600,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/Tx0OWEY.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 2600,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/oImaGvk.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Estudio luminoso en Plaza Mitre",
      descripcion: "Disfrutá de la sencillez de este alojamiento tranquilo y céntrico. Muy luminoso, confortable y con todos los servicios. Excelente ubicación, a 50 mts. de Plaza Mitre, y a 500 mts. del shopping y de la Peatonal. Importante: a 100 mts el estacionamiento es libre y gratuito en la calle. Hay estacionamiento de pago cerca ...",
      precio: 3400,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/g6GouLj.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Dpto con pileta",
      descripcion: "Dpto con pileta",
      precio: 1200,
      valoracion: [true, false, false, false, false],
      imagen: "https://i.imgur.com/1CaX5G8.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Mansion Playboy",
      descripcion: "Mansion playboy con todos los servicios. Cuenta con salon de juegos, casino privado, pileta y salida para lanchas y embarcaciones privada.",
      precio: 8500,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/Y5UHut6.png",
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
      imagen: "https://i.imgur.com/IO7gSOE.png",
      oferta: true,
      tipo: "busqueda"
    },
    {
      titulo: "Cabana con playa",
      descripcion: "Excelente departamento de excelente diseño totalmente reciclado, excelente vistas de la ciudad, muy buena ubicación, a metros del mar, del centro comercial Guemes, del Cacino, del Hotel Hermitage, Provincial y Museo Castagnino. Ideal para desplazarse caminando a todos los lugares, sin necesidad de...",
      precio: 5600,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/Tx0OWEY.png",
      oferta: false,
      tipo: "busqueda"
    }],
    [{
      titulo: "Departamento entero",
      descripcion: "Te va a encantar mi espacio por la ubicación, las vistas, el ambiente, y las zonas exteriores. Mi alojamiento es bueno para parejas, aventureros, y viajeros de negocios. Se encuentra cerca de las playas y del centro comercial ( guemes y alem) es una zona residencial y tranquila para ...",
      precio: 2600,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/oImaGvk.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Estudio luminoso en Plaza Mitre",
      descripcion: "Disfrutá de la sencillez de este alojamiento tranquilo y céntrico. Muy luminoso, confortable y con todos los servicios. Excelente ubicación, a 50 mts. de Plaza Mitre, y a 500 mts. del shopping y de la Peatonal. Importante: a 100 mts el estacionamiento es libre y gratuito en la calle. Hay estacionamiento de pago cerca ...",
      precio: 3400,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/g6GouLj.png",
      oferta: false,
      tipo: "busqueda"
    }],
    [{
      titulo: "Dpto con pileta",
      descripcion: "Dpto con pileta",
      precio: 1200,
      valoracion: [true, false, false, false, false],
      imagen: "https://i.imgur.com/1CaX5G8.png",
      oferta: false,
      tipo: "busqueda"
    },
    {
      titulo: "Mansion Playboy",
      descripcion: "Mansion playboy con todos los servicios. Cuenta con salon de juegos, casino privado, pileta y salida para lanchas y embarcaciones privada.",
      precio: 8500,
      valoracion: [true, true, true, true, true],
      imagen: "https://i.imgur.com/Y5UHut6.png",
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
  spin:boolean=false;
  constructor() { 
    setTimeout(()=>{ 
      this.spin=true; 
    
    }, 2000);
  }

  ngOnInit(): void {
  }

}
