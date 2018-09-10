import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  onBack(): void {
      this._router.navigate(['/products']);
  }
  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
        'productId': id,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

}
