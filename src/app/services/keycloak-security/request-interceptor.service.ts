import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakSerurityService} from './keycloak-serurity.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {


  constructor(private securityService: KeycloakSerurityService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http interceptor.......' + req);
    if (!this.securityService.kc.authenticated) {
      return next.handle(req);
    }
    let updatedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.securityService.kc.token
      }
    });
    return next.handle(updatedRequest);
  }
}
