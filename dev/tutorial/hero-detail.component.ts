import {Component} from 'angular2/core';
import {Hero} from "./hero";

@Component({
    selector: 'hero-detail',
    template: `
          <div *ngIf="hero">
              <h2>{{hero.name}} details</h2>
              <h3>Super power: {{hero.power}}</h3>
              <div>
                <label>id: </label>
                {{hero.id}}
              </div>
              <div>
                <label>name: </label>
                {{hero.name}}
              </div>
              <div>
                <label>power: </label>
                <input [(ngModel)]="hero.power" placeholder="super power" />
              </div>
          </div>
    `,
    inputs: ["hero"]

})

export class HeroDetailComponent {
    hero: Hero;

}