import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from '../../../models/Message.model';
import {MessagesService} from '../../../services/messages/messages.service';

@Component({
  selector: 'app-preview-message',
  templateUrl: './preview-message.component.html',
  styleUrls: ['./preview-message.component.scss']
})
export class PreviewMessageComponent implements OnInit {
  @Input() selectedMessage: MessageModel;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.messagesService.messageSelected.emit(this.selectedMessage);
  }
}
