import {NgModule} from '@angular/core';
import {StarComponent} from './star.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [StarComponent],
    imports: [BrowserModule],
    bootstrap: [StarComponent]
})
export class StarModule {}
