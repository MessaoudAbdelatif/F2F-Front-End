import {Component, Input, OnInit} from '@angular/core';
import {Influencer} from '../../models/Influencer.model';
import {InfluencersService} from '../../services/Influencers/influencers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-influencer',
  templateUrl: './single-influencer.component.html',
  styleUrls: ['./single-influencer.component.scss']
})
export class SingleInfluencerComponent implements OnInit {
  @Input() selectedInfluencer: Influencer;


  constructor(private influencersService: InfluencersService, private router: Router) {
  }

  ngOnInit(): void {
  }


  onNewMessage(selectedInfluencer: Influencer) {
    this.influencersService.influencerSelected2 = selectedInfluencer;
    this.router.navigate(['/messageForm']);
  }
}

