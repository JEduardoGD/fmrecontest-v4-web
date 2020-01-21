import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './config/jwt.interceptor';
import { SweetAlertService } from './services/sweet.alert.service';
import { ContestService } from './services/contest.service';
import { EditionsService } from './services/editions.service';
import { EmailsService } from './services/email.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        AuthenticationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        SweetAlertService,
        ContestService,
        EditionsService,
        EmailsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
