import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  spin:boolean=false;
  constructor() {

    setTimeout(()=>{ 
      this.spin=true; 
    
    }, 2000);

    
  }
  ngOnInit(): void {
  }
}