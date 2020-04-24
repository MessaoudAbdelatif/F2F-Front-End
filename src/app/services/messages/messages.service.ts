import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageModel} from '../../models/Message.model';
import {KeycloakSerurityService} from '../keycloak-security/keycloak-serurity.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageSelected = new EventEmitter<MessageModel>();
  messageSelected2: MessageModel;

  constructor(private httpClient: HttpClient, private securityService: KeycloakSerurityService) {
  }

  getMessagesFromApi() {
    if (this.securityService.kc.hasRealmRole('company')) {
      return this.httpClient.get('/f2fserver/api/v1/messages/company/');
    }
    if (this.securityService.kc.hasRealmRole('influencer')) {
      return this.httpClient.get('/f2fserver/api/v1/messages/influencer/');
    }
  }

  createMessage(message: MessageModel) {
    let body = JSON.stringify(message);
    if (this.securityService.kc.hasRealmRole('influencer')) {
      return this.httpClient.post('/f2fserver/api/v1/message/influencer', body, httpOptions);
    }
    if (this.securityService.kc.hasRealmRole('company')) {
      return this.httpClient.post('/f2fserver/api/v1/message/company', body, httpOptions);
    }
  }

  deleteMessage(id) {
    return this.httpClient.delete('/f2fserver/api/v1/message' + id);
  }
}
