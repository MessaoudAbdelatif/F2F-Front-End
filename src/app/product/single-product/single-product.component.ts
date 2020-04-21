import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models/Product.model';
import {ProductsService} from '../../services/products/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() selectedProduct: ProductModel;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

}
