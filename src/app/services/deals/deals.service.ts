import {EventEmitter, Injectable} from '@angular/core';
import {MessageModel} from '../../models/Message.model';
import {HttpClient} from '@angular/common/http';
import {KeycloakSerurityService} from '../keycloak-security/keycloak-serurity.service';
import {DealModel} from '../../models/Deal.model';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  dealSelected = new EventEmitter<DealModel>();

  constructor(private httpClient: HttpClient, private securityService: KeycloakSerurityService) {
  }

  getDealsFromApi() {
    const email = this.securityService.kc.tokenParsed['email'];
    console.log(email);
    if (this.securityService.kc.hasRealmRole('company')) {
      return this.httpClient.get('/f2fserver/api/v1/deals/company/' + email);
    }
    if (this.securityService.kc.hasRealmRole('influencer')) {
      return this.httpClient.get('/f2fserver/api/v1/deals/influencer/' + email);
    }
  }
}
