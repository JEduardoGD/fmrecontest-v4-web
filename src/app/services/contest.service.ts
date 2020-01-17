import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from '../config/constants';
import { ResponseModel } from '../model/response.model';

@Injectable()
export class ContestService {
    constructor(private http: HttpClient) {
    }

    async getContestList(): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.CONTEST}`)
            .subscribe(response => {
                resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}
