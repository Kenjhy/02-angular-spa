import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroeInput:any={};
  @Input() index:number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter(); //Emita o dispare un evento personalizado
   }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
    this.router.navigate( ['/heroe',this.index] );
    // this.heroeSeleccionado.emit(this.index);
  }

}
