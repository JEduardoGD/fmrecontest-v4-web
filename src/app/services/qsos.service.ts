import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../model/response.model';
import { ENDPOINT } from '../config/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class QsosService {
    constructor(private http: HttpClient) { }

    async getAllByConteoIdAndLogId(conteoId: number, logId: number): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.QSOS}/byconteoid/${conteoId}/logid/${logId}`)
            .subscribe(response => {
                resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}
