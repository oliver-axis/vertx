import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
    selector: "contact-list",
    template:`
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="selectedContact === contact">
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact [contact] = "selectedContact"></contact>
    `,
    directives: [ContactComponent],
    styleUrls: ["../src/css/app.css"]
})

export class ContactListComponent {
    public contacts = [
        {firstName: "Jacob", lastName: "Smiley", phone: "510-867-5309",  email: "jacob.smiley@gmail.com"},
        {firstName: "Michael", lastName: "Jackson", phone: "510-867-5309",  email: "mike.jackson@gmail.com"},
        {firstName: "Barry", lastName: "Sanders", phone: "510-867-5309",  email: "barry.smiley@gmail.com"},
        {firstName: "Steph", lastName: "Curry", phone: "510-867-5309",  email: "warriors123@gmail.com"}
    ];
    public selectedContact = {};
    //public showDetail = false;

    onSelect(contact) {
        this.selectedContact = contact;
    }

}