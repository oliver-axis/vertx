import {Component} from 'angular2/core';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    template:`
        <h3>Tour of Heroes</h3>
        <!--<a [routerLink]="['Heroes']">Heroes</a>-->
        <!--<router-outlet></router-outlet>-->
    `,
    directives: [RouterOutlet],
    providers: [HeroService, ROUTER_PROVIDERS]


})

export class TourOfHeroesComponent {
    //public title = '';
    constructor(private _heroService: HeroService) {
    }

}