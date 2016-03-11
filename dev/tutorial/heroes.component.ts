import {Component} from "angular2/core";
import {HeroDetailComponent} from "./hero-detail.component";
import {Hero} from "./hero";
import {HeroService} from './hero.service';
import {OnInit} from "angular2/core";
import {Router} from "../../node_modules/angular2/src/router/router";

@Component({
    selector: 'heroes',
    template:`
          <h2>{{mainHero.name}} details!</h2>
          <!--<h3>Super power: {{mainHero.power}}</h3>-->
          <!--<div>-->
            <!--<label>id: </label>-->
            <!--{{mainHero.id}}-->
          <!--</div>-->
          <!--<div>-->
            <!--<label>name: </label>-->
            <!--{{mainHero.name}}-->
          <!--</div>-->
          <!--<div>-->
            <!--<label>power: </label>-->
            <!--<input [(ngModel)]="mainHero.power" placeholder="super power" />-->
          <!--</div>-->

          <h2>Heroes</h2>
          <ul class="heroes">
            <li *ngFor="#hero of heroes"
                (click)="onSelect(hero)"
                [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
          <hero-detail [hero]="selectedHero"></hero-detail>

     `,
    styleUrls: ["../src/css/tour-of-heroes.css"],
    directives: [HeroDetailComponent]

})

export class HeroesComponent implements OnInit {
    public heroes : Hero[];
    selectedHero: Hero;
    public mainHero: Hero = {
        id: 1,
        name: 'Rosie',
        power: 'being pretty rosie and the best puppy in the world! :)'
    };

    constructor(private _router: Router, private _heroService: HeroService) {
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this.heroes = this._heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this._router.navigate(['HeroDetail', { id: hero.id}]);
        //this.selectedHero = hero;
    }

}

