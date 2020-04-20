import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../services/messages/messages.service';
import {MessageModel} from '../models/Message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messageSelected: MessageModel;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesService.messageSelected.subscribe((message: MessageModel) => {
      this.messageSelected = message;
    });
  }

}
