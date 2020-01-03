import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';
import { rejects } from 'assert';

@Injectable()
export class SweetAlertService {
    successMessage(title: string, message: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title,
                text: message,
                icon: 'success',
                showConfirmButton: true,
                showCancelButton: false
            })
            .then((result) => {
                resolve(result.value);
                /*
                if (result.value) {
                }
                reject(result.value);
                */
            });
        });
    }

    errorMessage(title: string, message: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Swal.fire({
                title,
                text: message,
                icon: 'error',
                showConfirmButton: true,
                showCancelButton: false
            })
            .then((result) => {
                resolve(result.value);
                /*
                if (result.value) {
                }
                reject(result.value);
                */
            });
        });
    }
}
