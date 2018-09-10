import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard.service';
import {ProductListComponent} from './product-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent}
        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
