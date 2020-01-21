import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../model/response.model';
import { ENDPOINT } from '../config/constants';

export class EmailsService {
    constructor(private http: HttpClient) { }

    async getAllByEmailId(editionid: number): Promise<ResponseModel> {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENDPOINT.EMAIL}/byeditionid/${editionid}`)
            .subscribe(response => {
                resolve(response as ResponseModel);
          }, err => {
            console.error(err);
            reject(err);
          });
        });
    }
}
