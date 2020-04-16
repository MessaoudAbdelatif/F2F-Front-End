import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyDealListComponent} from './my-deal-list/my-deal-list.component';
import {SingleDealComponent} from './my-deal-list/single-deal/single-deal.component';
import {DealFormComponent} from './my-deal-list/deal-form/deal-form.component';
import {MyMessageListComponent} from './my-message-list/my-message-list.component';
import {SingleMessageComponent} from './my-message-list/single-message/single-message.component';
import {MessageFormComponent} from './my-message-list/message-form/message-form.component';
import {InfluencerListComponent} from './influencer-list/influencer-list.component';
import {SingleInfluencerComponent} from './influencer-list/single-influencer/single-influencer.component';
import {ProductListComponent} from './product-list/product-list.component';
import {SingleProductComponent} from './product-list/single-product/single-product.component';
import {ProductFormComponent} from './product-list/product-form/product-form.component';
import {SearchComponent} from './search/search.component';
import {ProfileComponent} from './profile/profile.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './serivces/auth/auth-guard.service';
import {AuthService} from './serivces/auth/auth.service';
import {DealsService} from './serivces/deals/deals.service';
import {InfluencersService} from './serivces/Influencers/influencers.service';
import {MessagesService} from './serivces/messages/messages.service';
import {ProductsService} from './serivces/products/products.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    DealsService,
    InfluencersService,
    MessagesService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
