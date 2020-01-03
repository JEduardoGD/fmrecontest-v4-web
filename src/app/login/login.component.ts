import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../services/authentication.service';
import { SweetAlertService } from '../services/sweet.alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    returnUrl: string;

    public email: string;
    public password: string;

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private authenticationService: AuthenticationService,
        private sweetAlertService: SweetAlertService
    ) {}

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    async onLoggedin() {
        this.authenticationService.login(this.email, this.password)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.sweetAlertService.successMessage('Right!', 'Success login')
            .then(result => {
                this.router.navigate([this.returnUrl]);
            });
        })
        .catch(error => {
            this.sweetAlertService.errorMessage('Error!', 'Login fail!')
            .then(result => {});
        });
    }
}
