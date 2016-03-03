import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <a [routerLink]=""></a>
                <a [routerLink]=""></a>
            </nav>
        </header>
        <!--<div class=""main>-->

        <!--</div>-->
        <contact-list></contact-list>
    `,
    directives:[ContactListComponent],
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

}
