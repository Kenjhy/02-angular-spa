import { Component, OnInit } from '@angular/core';
// import { HeroesService, Heroe } from '../../services/heroes.service';
import { HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';
import { HeroeInterface } from 'src/app/interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroesInterface:HeroeInterface[] = [];
  
  //Recibe parameteos del servicio y otro ruta
  constructor(private _heroesService: HeroesService, private router:Router ){
    
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.heroesInterface = this._heroesService.getHeroes();
  }
  
  //Funcion click
  verHeroe( idx:number ){
    console.log(idx);
    this.router.navigate( ['/heroe',idx] );
  }


  

   // @Input() heroe: any = {};
  // @Input() index: number;

  // @Output() heroeSeleccionado: EventEmitter<number>;

  // constructor(private router: Router) {
  //   this.heroeSeleccionado = new EventEmitter();
  // }
  
  // constructor( private _heroesService:HeroesService,
  //              private router:Router
  //               ) {
  //   // console.log("constructor");
  // }

  // ngOnInit() {
  //   this.heroes = this._heroesService.getHeroes();
  //   // console.log( this.heroes );
  // }

}
