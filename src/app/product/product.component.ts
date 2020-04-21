import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../models/Product.model';
import {ProductsService} from '../services/products/products.service';
import {MessageModel} from '../models/Message.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productSelected: ProductModel;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.productSelected.subscribe((product: ProductModel) => {
      this.productSelected = product;
    });

  }

}
