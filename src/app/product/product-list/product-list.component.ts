import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {ProductModel} from '../../models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  errorMessage: string;

  constructor(private productsService: ProductsService) {
  }

  products: ProductModel[];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProductsFromApi()
      .subscribe(
        (productsReceived: ProductModel[]) => {
          this.products = productsReceived;
        }, err => {
          this.errorMessage = err.statusText;
          console.log(this.errorMessage);
        }
      );
  }
}
