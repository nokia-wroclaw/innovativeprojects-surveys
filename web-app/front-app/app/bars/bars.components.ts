import {Component, Injectable} from '@angular/core';
import {Location} from '@angular/common'
import {Router} from '@angular/router';
import {AuthGuard} from '../_guards/index';

import 'rxjs/add/operator/filter';

@Component({
    selector: 'bars',
    templateUrl: 'bars.component.html'
})

export class BarsComponent {

    logged = false;

    constructor(private authGuard: AuthGuard,
                private location: Location){}

    public isVisible() {
        let list = ["/login", "/registration"];
        let route = this.location.path();
        return (list.indexOf(route) > -1);
    }
}