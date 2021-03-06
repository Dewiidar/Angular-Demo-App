import {NgModule} from '@angular/core';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
