
@Component({
    selector: 'heroList',
    template:`
    <h2>Hero List</h2>
    <p><i>Pick a hero from the list</i></p>
    <div *ngFor="#hero of heroes" (click)="selectHero(hero)">
      {{hero.name}}
    </div>
    <hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
    `,
    directives: [HeroDetailComponent],
    providers: [HeroService]

})

//
//export class HeroListComponent implements OnInit {
//    constructor(private _service: HeroService){ }
//    heroes:Hero[];
//    selectedHero: Hero;
//    ngOnInit(){
//        this.heroes = this._service.getHeroes();
//    }
//    selectHero(hero: Hero) { this.selectedHero = hero; }
//}import Component from "../../node_modules/angular2/ts/src/compiler/template_parser";