import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroeObj:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService
              ) { 
                  this.activatedRoute.params.subscribe(params=>{
                    this.heroeObj = this.heroesService.getHeroe(params['id']);
                    console.log(this.heroeObj);
                });
  }

  ngOnInit(): void {
  }

}