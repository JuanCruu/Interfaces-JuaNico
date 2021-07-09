import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
   step=1;
   bar=document.getElementById('progressbar');
   
  constructor() { }
  
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
    alert('a')
  }
}
