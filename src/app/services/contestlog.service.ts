import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../model/response.model';
import { ENDPOINT } from '../config/constants';

@Injectable()
export class ContestlogService {
    constructor(private http: HttpClient) { }

    async findByConteotId(contestid: number): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.CONTESTLOG}/byconteoid/${contestid}`)
            .subscribe(response => {
                resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}
