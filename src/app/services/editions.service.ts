import { HttpClient } from '@angular/common/http';

import { ResponseModel } from '../model/response.model';

import { ENDPOINT } from '../config/constants';

export class EditionsService {
    constructor(private http: HttpClient) { }

    async getAllByContestId(contestId: number): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.EDITION}/bycontestid/${contestId}`)
            .subscribe(response => {
                resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}
