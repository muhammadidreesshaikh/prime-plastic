import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from './product-catalog.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  catalog: any = [];

  constructor(
    private _catalog: ProductCatalogService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._catalog.getCatalog().subscribe(res => {
      this.catalog = res;
    })
  }

}
