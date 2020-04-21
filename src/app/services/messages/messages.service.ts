import {EventEmitter, Injectable} from '@angular/core';
import {Influencer} from '../../models/Influencer.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageModel} from '../../models/Message.model';
import {KeycloakSerurityService} from '../keycloak-security/keycloak-serurity.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageSelected = new EventEmitter<MessageModel>();

  constructor(private httpClient: HttpClient, private securityService: KeycloakSerurityService) {
  }

  getMessagesFromApi() {
    const email = this.securityService.kc.tokenParsed['email'];
    console.log(email);
    if (this.securityService.kc.hasRealmRole('company')) {
      return this.httpClient.get('/f2fserver/api/v1/messages/company/' + email);
    }
    if (this.securityService.kc.hasRealmRole('influencer')) {
      return this.httpClient.get('/f2fserver/api/v1/messages/influencer/' + email);
    }
  }
}
