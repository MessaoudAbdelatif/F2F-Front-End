import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';
import {Influencer} from '../../models/Influencer.model';
import {MessageModel} from '../../models/Message.model';

@Component({
  selector: 'app-my-message-list',
  templateUrl: './my-message-list.component.html',
  styleUrls: ['./my-message-list.component.scss']
})
export class MyMessageListComponent implements OnInit {
  errorMessage: string;

  constructor(private messagesService: MessagesService) {
  }

  messages: MessageModel[];

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messagesService.getMessagesFromApi()
      .subscribe(
        (messagesReceived: MessageModel[]) => {
          this.messages = messagesReceived;
        }, err => {
          this.errorMessage = err.statusText;
          console.log(this.errorMessage);
        }
      );
  }

}
