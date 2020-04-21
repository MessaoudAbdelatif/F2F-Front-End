import {Component, OnInit} from '@angular/core';
import {InfluencersService} from '../services/Influencers/influencers.service';
import {Influencer} from '../models/Influencer.model';
import {KeycloakSerurityService} from '../services/keycloak-security/keycloak-serurity.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {
  influencerSelected: Influencer;

  constructor(private influencersService: InfluencersService) {
  }

  ngOnInit() {
    this.influencersService.infleuncerSelected
      .subscribe(
        (influencer: Influencer) => {
          this.influencerSelected = influencer;
        }
      );
  }

}
