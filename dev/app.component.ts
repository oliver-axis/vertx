import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h3 (click)="onSelect()" [class.clicked]="showDetail === true">{{contact.firstName}} {{contact.lastName}}</h3>
        <input [(ngModel)]="contact.firstName" type="text">
        <div *ngIf="showDetail === true">
            Phone Number: {{contact.phone}} <br>
            E-mail: {{contact.email}}
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public contact = {firstName: "Jacob", lastName: "Smiley", phone: "510-867-5309",  email: "jacob.smiley@gmail.com"};
    public showDetail = false;

    onSelect() {
        this.showDetail = true;
    }
}
