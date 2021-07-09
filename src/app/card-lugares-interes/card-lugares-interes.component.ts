import { Component, Input, OnInit } from '@angular/core';
import { Lugar } from '../Lugar';

@Component({
  selector: 'app-card-lugares-interes',
  templateUrl: './card-lugares-interes.component.html',
  styleUrls: ['./card-lugares-interes.component.scss']
})
export class CardLugaresInteresComponent implements OnInit {

  @Input()
  lugar: Lugar = {
    nombre:'',
    imagen:''
  }

  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
