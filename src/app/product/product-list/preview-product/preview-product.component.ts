import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../../models/Product.model';
import {ProductsService} from '../../../services/products/products.service';

@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.scss']
})
export class PreviewProductComponent implements OnInit {
  @Input() selectedProduct: ProductModel;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.productsService.productSelected.emit(this.selectedProduct);
  }
}
