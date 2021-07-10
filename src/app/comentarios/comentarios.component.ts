import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  idComentario:string="";

  constructor() { }
  comentarios:{nombre:string,fecha:string,comentario:string}[]=[
    {
    nombre:"juan",
    fecha:"febrero de 2020",
    comentario:"uwu"
  },
  {
    nombre:"carla",
    fecha:"agosto de 2020",
    comentario:"ayuda"
  },
  {
    nombre:"karina",
    fecha:"febrero de 202",
    comentario:"uwu"
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
      comentario:comentario
    }
  this.comentarios.push(cosa);
    
  }

}
