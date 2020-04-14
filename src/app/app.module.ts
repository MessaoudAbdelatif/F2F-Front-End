import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDealListComponent } from './my-deal-list/my-deal-list.component';
import { SingleDealComponent } from './my-deal-list/single-deal/single-deal.component';
import { DealFormComponent } from './my-deal-list/deal-form/deal-form.component';
import { MyMessageListComponent } from './my-message-list/my-message-list.component';
import { SingleMessageComponent } from './my-message-list/single-message/single-message.component';
import { MessageFormComponent } from './my-message-list/message-form/message-form.component';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { SingleInfluencerComponent } from './influencer-list/single-influencer/single-influencer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { ProductFormComponent } from './product-list/product-form/product-form.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyDealListComponent,
    SingleDealComponent,
    DealFormComponent,
    MyMessageListComponent,
    SingleMessageComponent,
    MessageFormComponent,
    InfluencerListComponent,
    SingleInfluencerComponent,
    ProductListComponent,
    SingleProductComponent,
    ProductFormComponent,
    SearchComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
