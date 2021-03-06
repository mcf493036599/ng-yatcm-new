import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './search/search.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HelpComponent,
    ContactComponent,
    SearchComponent
  ],
  exports: [
    HomeComponent,
    HelpComponent,
    ContactComponent,
    SearchComponent
  ]
})
export class PageModule { }
