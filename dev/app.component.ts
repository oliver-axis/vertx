import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="showDetail === true">
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <input [(ngModel)]="selectedContact.firstName" type="text">
        <div>  <!-- *ngIf="showDetail === true" -->
            Phone Number: {{selectedContact.phone}} <br>
            E-mail: {{selectedContact.email}}
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
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
