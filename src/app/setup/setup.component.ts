import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss']
})

export class SetupComponent implements OnInit {


    constructor(public digitransitService: DigitransitService, private router: Router) {

    }

    clicked() {
        this.router.navigate(['routes']);
    }

    ngOnInit() {
    }

}

/*export class AppComponent {
    constructor(private router: Router) {
        this.router.navigate(['routes']);
    }
}*/
