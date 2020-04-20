import {Component, Input, OnInit, Output} from '@angular/core';
import {InfluencersService} from '../../services/Influencers/influencers.service';
import {Influencer} from '../../models/Influencer.model';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit {


  constructor(private influencersService: InfluencersService) {
  }

  influencers: Influencer[];

  ngOnInit(): void {
    this.getInfleuncers();
  }

  getInfleuncers() {

    this.influencersService.getInfluencersFromApi()
      .subscribe(
        (influencers: Influencer[]) => {
          this.influencers = influencers;
        }, error => {
          console.log(error);
        }
      );
  }
}
