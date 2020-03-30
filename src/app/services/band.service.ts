import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../model/response.model';
import { ENDPOINT } from '../config/constants';

export class BandService {
    constructor(private http: HttpClient) { }

    async findAll(): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.BAND}/`)
            .subscribe(response => {
                resolve(response as ResponseModel);
            }, err => {
                console.error(err);
                reject(err);
            });
        });
    }
}
