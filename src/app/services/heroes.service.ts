import { Injectable } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroe.interface';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    

    private heroesInterfaceArr:HeroeInterface[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
  
    constructor(){
        console.log("Servicio listo para usarse")
    }

    getHeroes():HeroeInterface[]{
        return this.heroesInterfaceArr;
    }

    getHeroe(iDetalle:number){
      return this.heroesInterfaceArr[iDetalle];
    }

    buscarHeroes(termino:string): HeroeInterface[]{
      let heroesArr:HeroeInterface[] = [];
      termino = termino.toLowerCase();
      
      for(let i = 0; i < this.heroesInterfaceArr.length; i++){
        let heroe = this.heroesInterfaceArr[i];
          let nombre = heroe.nombre.toLowerCase();
          if(nombre.indexOf(termino)>=0){
            heroe.idx = i;
            heroesArr.push(heroe)
          }
    
          console.log(heroe);
          console.log(this.heroesInterfaceArr);
        }

      // for(let heroe of this.heroesInterfaceArr){
      //   let nombre = heroe.nombre.toLowerCase();
      //   if(nombre.indexOf(termino)>=0){
      //     heroesArr.push(heroe)
      //   }
  
      //   console.log(heroe);
      //   console.log(this.heroesInterfaceArr);
      // }
      console.log(heroesArr);
      return heroesArr;
    }
}


// export interface Heroe{
//     nombre: string;
//     bio: string;
//     img: string;
//     aparicion: string;
//     casa: string;
//     idx?: number;
// };

// <div class="col mb-4">
//                 <div class="card border-dark mb-3 text-center" style="max-width: 18rem;">
//                     <div class="card-header bg-transparent border-success">
//                         <div class="row no-gutters align-items-center">
//                             <div class="col-auto">
//                                 <h1 class="fas text-gray-300"><strong>#2</strong></h1>
//                             </div>
//                             <div class="col mr-2">
//                                 <div class="h5 text-xs font-weight-bold text-danger text-uppercase mb-1">350</div>
//                                 <div class="h9 mb-0 font-weight-bold text-gray-800">63.3%</div>
//                             </div>

//                         </div>
//                     </div>
//                     <img src="../../../../assets/images/usuario/usuario.png" class="card-img-top" alt="...">
//                     <!-- <div class="card-body text-success">
//                         <h5 class="card-title">Suc>cess card title</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of
//                             the card's content.</p>
//                     </div> -->
//                     <div class="card-footer cardFooter bg-transparent border-success">
//                         <a href="#" class="btn btnCard">Go somewhere</a>
//                     </div>
//                 </div>
//             </div>