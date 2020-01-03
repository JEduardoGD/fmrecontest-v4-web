import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ENDPOINT } from '../config/constants';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient
        ) { }



    async login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log({ email: email, password: password });
            this.http.post(`${ENDPOINT.LOGIN}`, { email: email, password: password })
            .subscribe(response => {
                localStorage.setItem('currentUser', JSON.stringify(response));
                resolve(response);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
