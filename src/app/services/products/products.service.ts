import {EventEmitter, Injectable} from '@angular/core';
import {ProductModel} from '../../models/Product.model';
import {HttpClient} from '@angular/common/http';
import {KeycloakSerurityService} from '../keycloak-security/keycloak-serurity.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient, private securityService: KeycloakSerurityService) {
  }

  productSelected = new EventEmitter<ProductModel>();

  getProductsFromApi() {
    const email = this.securityService.kc.tokenParsed['email'];
    console.log(email);
    if (this.securityService.kc.hasRealmRole('company')) {
      return this.httpClient.get('/f2fserver/api/v1/products/' + email);
    }
  }

}
