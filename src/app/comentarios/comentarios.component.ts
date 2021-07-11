import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  idComentario:string="";

  constructor() { }
  comentarios:{nombre:string,fecha:string,comentario:string,imagen:string}[]=[
    {
    nombre:"romina",
    fecha:"febrero de 2020",
    comentario:"Hola,aceptan mascota?",
    imagen:"https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ,"
  },
  {
    nombre:"carla",
    fecha:"agosto de 2020",
    comentario:"ayuda",
    imagen:"https://images.generated.photos/rF3Ir6Y3AZiiqNshk_D1rTEAUsgYz4wv_CLWd0EJZmM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1NzM2MTUuanBn.jpg"
  },
  {
    nombre:"karina",
    fecha:"febrero de 202",
    comentario:"no tengo mucha imaginacion a esta altura de la noche",
    imagen:"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
  }

]

  ngOnInit(): void {
  }
  changeInput(e: string){
    this.idComentario=e;
    // console.log(this.idComentario)
  }
  comentar():void{
    let comentario=this.idComentario
    let cosa={
      nombre:"usuario1",
      fecha:"julio 2021",
      comentario:comentario,
      imagen:"https://i.imgur.com/qdiP4DB.jpg"
    }
  this.comentarios.push(cosa);
    
  }

}
