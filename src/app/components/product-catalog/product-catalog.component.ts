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
    // this.catalog =[
    //   {
    //     id: 1,
    //     image: '../../../assets/img/product1.jpg',
    //     name: '50 ml Liquor Bottle',
    //     catalogId: '4605-0001D',
    //   },
    //   {
    //     id: 2,
    //     image: '../../../assets/img/product3.jpg',
    //     name: '12 fl oz Round Jar',
    //     catalogId: 'MSO49051',
    //   },
    //   {
    //     id: 3,
    //     image: '../../../assets/img/product2.jpg',
    //     name: '100 ml Liquor Flask',
    //     catalogId: '4606-0103',
    //   },
    //   {
    //     id: 4,
    //     image: '../../../assets/img/product4.jpg',
    //     name: '24oz Single Panel Round',
    //     catalogId: '4305-0103A',
    //   },
    //   {
    //     id: 5,
    //     image: '../../../assets/img/product5.jpg',
    //     name: '750ml Liquor Traveler',
    //     catalogId: 'D7532397A',
    //   },
    //   {
    //     id: 6,
    //     image: '../../../assets/img/product1.jpg',
    //     name: '50 ml Liquor Bottle',
    //     catalogId: '4605-0001D',
    //   },
    //   {
    //     id: 7,
    //     image: '../../../assets/img/product3.jpg',
    //     name: '12 fl oz Round Jar',
    //     catalogId: 'MSO49051',
    //   },
    //   {
    //     id: 8,
    //     image: '../../../assets/img/product2.jpg',
    //     name: '100 ml Liquor Flask',
    //     catalogId: '4606-0103',
    //   },
    //   {
    //     id: 9,
    //     image: '../../../assets/img/product4.jpg',
    //     name: '24oz Single Panel Round',
    //     catalogId: '4305-0103A',
    //   },
    //   {
    //     id: 10,
    //     image: '../../../assets/img/product5.jpg',
    //     name: '750ml Liquor Traveler',
    //     catalogId: 'D7532397A',
    //   },
    //   {
    //     id: 11,
    //     image: '../../../assets/img/product1.jpg',
    //     name: '50 ml Liquor Bottle',
    //     catalogId: '4605-0001D',
    //   },
    //   {
    //     id: 12,
    //     image: '../../../assets/img/product3.jpg',
    //     name: '12 fl oz Round Jar',
    //     catalogId: 'MSO49051',
    //   }
    // ]

    this._catalog.getCatalog().subscribe(res => {
      this.catalog = res;
      console.log(this.catalog);
    })
  }

}
