import {Component, Input, OnInit} from '@angular/core';
import {Influencer} from '../../models/Influencer.model';
import {InfluencersService} from '../../services/Influencers/influencers.service';

@Component({
  selector: 'app-single-influencer',
  templateUrl: './single-influencer.component.html',
  styleUrls: ['./single-influencer.component.scss']
})
export class SingleInfluencerComponent implements OnInit {
  @Input() selectedInfluencer: Influencer;

  constructor(private influencersService: InfluencersService) {
  }

  ngOnInit(): void {
  }

}
