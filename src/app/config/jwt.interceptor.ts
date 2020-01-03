import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // console.log("-----------------------------------");
        // c0onsole.log(localStorage);
        // console.log("-----------------------------------");
        try {
            const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        } catch (e) {
            console.warn(e);
        }

        return next.handle(request);
    }

}
