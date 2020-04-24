import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';
import {InfluencersService} from '../../services/Influencers/influencers.service';
import {Influencer} from '../../models/Influencer.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  selectedInfluencer: Influencer;

  constructor(private messagesService: MessagesService, private influencersService: InfluencersService) {
  }

  messageForm: FormGroup;
  valideMessage: string;

  ngOnInit(): void {
    this.selectedInfluencer = this.influencersService.influencerSelected2;
    this.messageForm = new FormGroup({
      receiver: new FormControl(this.selectedInfluencer.id, Validators.required),
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
    });
  }

  submitMessage() {
    if (this.messageForm.valid) {
      this.valideMessage = 'Votre message vient d\'être transmit avec success !';
      this.messagesService.createMessage(this.messageForm.value).subscribe(
        data => {
          this.messageForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.valideMessage = 'Veuillez remplir le formulaire !';
    }
  }
}
