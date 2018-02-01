import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
    tiedot: any;

    constructor(public digitransitService: DigitransitService) {
    }

    ngOnInit() {

        this.digitransitService.getRoutes().subscribe(response => {
            this.tiedot = response.data['stops'];

        });
    }

}

/*export class AppComponent {
    constructor(private router: Router) {
        this.router.navigate(['setup']);
    }
}*/
