import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [ProductListComponent],
    imports: [BrowserModule],
    bootstrap: [ProductListComponent]
})
export class ProductListModule {}
