import {Component, OnInit} from '@angular/core';
import {InfluencersService} from '../serivces/Influencers/influencers.service';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit {
  public influencers;

  constructor(private influencersService: InfluencersService) {
  }

  ngOnInit(): void {
    this.getInfleuncers();
  }

  getInfleuncers() {
    this.influencersService.getInfluencers().subscribe(
      data => {
        this.influencers = data;
      },
      err => console.error(err)
    );
  }

}
