import {Component} from "angular2/core";
import {HeroDetailComponent} from "./hero-detail.component";
import {Hero} from "./hero";
import {HeroService} from './hero.service';

@Component({
    template:`
          {{title}}
          <h2>{{mainHero.name}} details!</h2>
          <h3>Super power: {{mainHero.power}}</h3>
          <div>
            <label>id: </label>
            {{mainHero.id}}
          </div>
          <div>
            <label>name: </label>
            {{mainHero.name}}
          </div>
          <div>
            <label>power: </label>
            <input [(ngModel)]="mainHero.power" placeholder="super power" />
          </div>

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
    directives: [HeroDetailComponent],
    providers: [HeroService]

})

export class TourOfHeroesComponent {

    constructor(private _heroService: HeroService) {
    }

    public title = 'Tour of Heroes';
    selectedHero: Hero;

    getHeroes() {
        this.heroes = this._heroService.getHeroes();
    }

    heroes : Hero[];

    public mainHero: Hero = {
        id: 1,
        name: 'Rosie',
        power: 'being pretty rosie and the best puppy in the world! :)'
    };

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

}




