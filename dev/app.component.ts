import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h3>Angular 2 Boilerplate</h3>
        <p>Hello World!</p>
    `,
})
export class AppComponent {
    public contact = (firstName: "Jacob", lastName: "Smiley", phone: "510-867-5309",  email: "jacob.smiley@gmail.com");
}
