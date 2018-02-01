import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {DigitransitService} from './services/digitransit.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {RouteDirectionPipe} from './pipes/route-direction.pipe';
import {PiippuPipe} from './pipes/piippu.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatInputModule, MatTabsModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        RouteDirectionPipe,
        PiippuPipe

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FlexLayoutModule,
        MatTabsModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAB0SNaQU7HYpkKZ1UhPLX-2h4qksU_738'
        }),
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
