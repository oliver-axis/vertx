import {Component} from "angular2/core";

@Component({
    selector: "contact",
    template:`
        <br>
        <div>  <!-- *ngIf="showDetail === true" -->
            <div>
                <label for="first-name">First Name:</label>
                <input [(ngModel)]="contact.firstName" type="text" id="first-name">
            </div>
            <div>
                <label for="last-name">Last Name:</label>
                <input [(ngModel)]="contact.lastName" type="text" id="last-name">
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input [(ngModel)]="contact.phone" type="text" id="phone">
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input [(ngModel)]="contact.email" type="text" id="email">
            </div>
        </div>

    `,
    inputs: ["contact"],
    styles:[`
        label {
            display:inline-block;
            width: 140px;
        }
        input {
            width: 200px;
        }
    `]
})

export class ContactComponent {
    public contact = {};
}