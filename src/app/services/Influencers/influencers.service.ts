import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Influencer} from '../../models/Influencer.model';
import {KeycloakSerurityService} from '../keycloak-security/keycloak-serurity.service';

const HttpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class InfluencersService {
  infleuncerSelected = new EventEmitter<Influencer>();

  constructor(private httpClient: HttpClient, private securityService: KeycloakSerurityService) {
  }

  getInfluencersFromApi() {
    return this.httpClient.get('/f2fserver/api/v1/influencers');
      // {headers: new HttpHeaders({Authorization: 'Bearer ' + this.securityService.kc.token})});
  }
}
