import {Component, Input, OnInit} from '@angular/core';
import {Influencer} from '../../models/Influencer.model';
import {MessageModel} from '../../models/Message.model';
import {MessagesService} from '../../services/messages/messages.service';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.scss']
})
export class SingleMessageComponent implements OnInit {
  @Input() selectedMessage: MessageModel;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
  }

}
