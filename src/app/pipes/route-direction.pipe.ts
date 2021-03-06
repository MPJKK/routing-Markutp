import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'routeDirection'
})
export class RouteDirectionPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value === 0) {
            return 'flight_takeoff';
        } else {
            return 'flight_land';

        }
    }

}

