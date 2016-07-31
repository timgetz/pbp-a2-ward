import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {

    customers = [
        {id: 1, name: 'Ward'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Sally'},
        {id: 4, name: 'Emmet'},
        {id: 5, name: 'Eric'}
    ];

    constructor() { }

    ngOnInit() { }

}