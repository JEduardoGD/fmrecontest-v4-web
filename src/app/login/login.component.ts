import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user.model';

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
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    async onLoggedin() {
        const x: User = await this.authenticationService.login(this.email, this.password);
        localStorage.setItem('currentUser', JSON.stringify(x));
        this.router.navigate([this.returnUrl]);
    }
}
