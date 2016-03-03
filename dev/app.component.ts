import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ContactListComponent} from "./contacts/contact-list.component";
import {NewContactComponent} from "./contacts/new-contact.component";

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
                <a [routerLink]="['Heroes']">Tutorial</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
        <!--<contact-list></contact-list>-->
    `,
    directives:[ROUTER_DIRECTIVES], // ContactListComponent,
    styleUrls: ["../src/css/app.css"]
})

@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
    {path: '/tutorial', name: 'Heroes', component: NewContactComponent}
])
export class AppComponent {

}
