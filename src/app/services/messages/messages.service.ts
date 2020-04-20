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
    return this.httpClient.get('/f2fserver/api/v1/messages');
  }
}
