import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productTitle = 'Product list';
    imageWidth = 50;
    showImage = false;
    errorMessage: string;

    products: IProduct[];

    filteredProducts: IProduct[];

    _listFilter: string;
    get listFilter() {
        return this._listFilter;
    }

    set listFilter(newValue: string) {
        this._listFilter = newValue;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private _productService: ProductService) {
    }

    onRatingClicked(message: string): void {
        this.productTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) > -1
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //
        // this.products = this._productService.getProducts();
        // this.filteredProducts = this.products;

        this._productService.getProducts()
            .subscribe(products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                error => this.errorMessage = <any>error);

    }

}
