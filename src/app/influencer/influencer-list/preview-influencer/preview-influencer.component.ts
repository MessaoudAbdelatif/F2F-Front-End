import {Component, Input, OnInit} from '@angular/core';
import {Influencer} from '../../../models/Influencer.model';
import {InfluencersService} from '../../../services/Influencers/influencers.service';

@Component({
  selector: 'app-preview-influencer',
  templateUrl: './preview-influencer.component.html',
  styleUrls: ['./preview-influencer.component.scss']
})
export class PreviewInfluencerComponent implements OnInit {
  @Input() selectedInfluencer: Influencer;

  constructor(public influencersService: InfluencersService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
   this.influencersService.infleuncerSelected.emit(this.selectedInfluencer);
  }
}
