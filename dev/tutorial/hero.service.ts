import {Injectable} from 'angular2/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    // if we want to 'take it slow'
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

}

//export class HeroService {
//    constructor(
//        private _backend: BackendService,
//        private _logger: Logger) { }
//
//    private _heroes:Hero[] = [];
//
//    getHeroes() {
//        this._backend.getAll(Hero).then( (heroes:Hero[]) => {
//            this._logger.log(`Fetched ${heroes.length} heroes.`);
//            this._heroes.push(...heroes); // fill cache
//        });
//        return this._heroes;
//    }
//}
