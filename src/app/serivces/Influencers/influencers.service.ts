import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Influencer} from '../../models/Influencer.model';

const HttpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class InfluencersService {
  infleuncerSelected = new EventEmitter<Influencer>();

  constructor(private httpClient: HttpClient) {
  }

  getInfluencersFromApi() {
    return this.httpClient.get('/f2fserver/api/v1/influencers');
  }
}
