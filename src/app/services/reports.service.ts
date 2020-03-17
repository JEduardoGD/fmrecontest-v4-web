import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from '../config/constants';
import { ResponseModel } from '../model/response.model';

@Injectable()
export class ReportsService {
  constructor(private http: HttpClient) { }

  async getConteoReportById(conteoId: number): Promise<Blob> {
      return new Promise((resolve, reject) => {
          this.http.get(`${ENDPOINT.REPORTS}/conteoid/${conteoId}`, {responseType: 'blob'})
          .subscribe(r => {
              resolve(r);
        }, err => {
          console.error(err);
          reject(err);
        });
      });
  }

  async getConteoById(conteoId: number):  Promise<ResponseModel> {
    return new Promise((resolve, reject) => {
        this.http.get(`${ENDPOINT.CONTEOS}/byid/${conteoId}`)
        .subscribe(response => {
            resolve(response as ResponseModel);
      }, err => {
        console.error(err);
        reject(err);
      });
    });
  }
}
