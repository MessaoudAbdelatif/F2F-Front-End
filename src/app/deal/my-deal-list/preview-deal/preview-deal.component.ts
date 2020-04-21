import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from '../../../models/Message.model';
import {DealModel} from '../../../models/Deal.model';
import {MessagesService} from '../../../services/messages/messages.service';
import {DealsService} from '../../../services/deals/deals.service';

@Component({
  selector: 'app-preview-deal',
  templateUrl: './preview-deal.component.html',
  styleUrls: ['./preview-deal.component.scss']
})
export class PreviewDealComponent implements OnInit {
  @Input() selectedDeal: DealModel;
  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.dealsService.dealSelected.emit(this.selectedDeal);
  }
}
