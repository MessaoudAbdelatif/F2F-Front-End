import {Component, OnInit} from '@angular/core';
import {DealsService} from '../services/deals/deals.service';
import {MessageModel} from '../models/Message.model';
import {DealModel} from '../models/Deal.model';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  dealSelected: DealModel;

  constructor(private dealsService: DealsService) {
  }

  ngOnInit(): void {
    this.dealsService.dealSelected.subscribe((deal: DealModel) => {
      this.dealSelected = deal;
    });
  }

}
