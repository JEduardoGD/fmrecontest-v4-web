import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../model/response.model';
import { ENDPOINT } from '../config/constants';

@Injectable()
export class DxccEntityService {
    constructor(private http: HttpClient) { }

    async findAll(): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.DXCCENTITY}`)
            .subscribe(response => {
               resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }

    async findById(dxccEntityId: number): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.DXCCENTITY}/bydxccentityid/${dxccEntityId}`)
            .subscribe(response => {
               resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}