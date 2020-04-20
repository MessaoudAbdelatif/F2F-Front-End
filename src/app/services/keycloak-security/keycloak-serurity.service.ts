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

  public async init() {
    console.log('security......');
    this.kc = new Keycloak({
      url: 'http://localhost:8080/auth',
      realm: 'F2Follow',
      clientId: 'AngularFrontF2F'
    });
    await this.kc.init(
      {
        // onLoad: 'login-required',
        onLoad: 'check-sso',
      });
    console.log(this.kc.token);
  }
}
