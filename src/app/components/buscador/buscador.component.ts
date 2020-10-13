import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroesObjArr:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router: Router) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['term']);
      this.termino = params['term'];
      this.heroesObjArr = this.heroesService.buscarHeroes(params['term']);
      console.log(this.heroesObjArr);
    })
  }

  //Funcion click
  verHeroe( idx:number ){
    console.log(idx);
    this.router.navigate( ['/heroe',idx] );
  }

}
