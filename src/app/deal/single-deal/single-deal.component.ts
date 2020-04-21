import {Component, Input, OnInit} from '@angular/core';
import {DealModel} from '../../models/Deal.model';
import {DealsService} from '../../services/deals/deals.service';

@Component({
  selector: 'app-single-deal',
  templateUrl: './single-deal.component.html',
  styleUrls: ['./single-deal.component.scss']
})
export class SingleDealComponent implements OnInit {
  @Input() selectedDeal: DealModel;

  constructor(private dealsService: DealsService) {
  }

  ngOnInit(): void {
  }

}
