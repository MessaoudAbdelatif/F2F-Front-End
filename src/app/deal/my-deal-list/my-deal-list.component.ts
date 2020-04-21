import {Component, OnInit} from '@angular/core';
import {DealsService} from '../../services/deals/deals.service';
import {DealModel} from '../../models/Deal.model';

@Component({
  selector: 'app-my-deal-list',
  templateUrl: './my-deal-list.component.html',
  styleUrls: ['./my-deal-list.component.scss']
})
export class MyDealListComponent implements OnInit {
  deals: DealModel[];
  errorMessage: string;

  constructor(private dealsService: DealsService) {
  }

  ngOnInit(): void {
    this.getDeals();
  }


  getDeals() {
    this.dealsService.getDealsFromApi()
      .subscribe(
        (dealsReceived: DealModel[]) => {
          this.deals = dealsReceived;
        }, err => {
          this.errorMessage = err.statusText;
          console.log(this.errorMessage);
        }
      );
  }
}
