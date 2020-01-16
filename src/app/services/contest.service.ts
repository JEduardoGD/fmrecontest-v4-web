import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from '../config/constants';

@Injectable()
export class ContestService {
    constructor(private http: HttpClient) {
    }

    async getContestList(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.CONTEST}`)
            .subscribe(response => {
                resolve(response);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}
