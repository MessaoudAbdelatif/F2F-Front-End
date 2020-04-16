import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const HttpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class InfluencersService {

  constructor(private httpClient: HttpClient) {
  }

  getInfluencers() {
    return this.httpClient.get('/f2fserver/api/v1/influencers');
  }
}
