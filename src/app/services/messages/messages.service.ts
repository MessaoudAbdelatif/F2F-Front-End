import {EventEmitter, Injectable} from '@angular/core';
import {Influencer} from '../../models/Influencer.model';
import {HttpClient} from '@angular/common/http';
import {MessageModel} from '../../models/Message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageSelected = new EventEmitter<MessageModel>();

  constructor(private httpClient: HttpClient) {
  }

  getMessagesFromApi() {
    return this.httpClient.get('/f2fserver/api/v1/messages');
  }
}
