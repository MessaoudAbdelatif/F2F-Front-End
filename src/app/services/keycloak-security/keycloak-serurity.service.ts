import {Injectable} from '@angular/core';
import {KeycloakInstance} from 'Keycloak-js';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSerurityService {
  public kc: KeycloakInstance;

  constructor() {
  }

  public init() {
    return new Promise((resolve, reject) => {

      console.log('security Initialisation......');
      this.kc = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'F2Follow',
        clientId: 'AngularFrontF2F'
      });
      this.kc.init(
        {
          // onLoad: 'login-required',
          onLoad: 'check-sso',
        }).then((authenticated) => {
        console.log(this.kc.token);
        resolve(authenticated);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    });

  }
}
