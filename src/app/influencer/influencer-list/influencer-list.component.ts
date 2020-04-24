import {Component, Input, OnInit, Output} from '@angular/core';
import {InfluencersService} from '../../services/Influencers/influencers.service';
import {Influencer} from '../../models/Influencer.model';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit {
  errorMessage: string;


  constructor(public influencersService: InfluencersService) {
  }

  @Input() selectedInfluencer: Influencer;

  influencers: Influencer[];

  ngOnInit(): void {
    this.getInfleuncers();
  }

  getInfleuncers() {

    this.influencersService.getInfluencersFromApi()
      .subscribe(
        (influencers: Influencer[]) => {
          this.influencers = influencers;
        }, err => {
          this.errorMessage = err.statusText;
          console.log(this.errorMessage);
        }
      );
  }
}
