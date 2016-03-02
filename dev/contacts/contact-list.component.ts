import {Component} from "angular2/core";

@Component({
    template:`
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="showDetail === true">
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
    `
})

export class ContactListComponent {

}