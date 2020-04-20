import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyDealListComponent} from './deal/my-deal-list/my-deal-list.component';
import {SingleDealComponent} from './deal/single-deal/single-deal.component';
import {DealFormComponent} from './deal/deal-form/deal-form.component';
import {MyMessageListComponent} from './message/my-message-list/my-message-list.component';
import {SingleMessageComponent} from './message/single-message/single-message.component';
import {MessageFormComponent} from './message/message-form/message-form.component';
import {InfluencerListComponent} from './influencer/influencer-list/influencer-list.component';
import {SingleInfluencerComponent} from './influencer/single-influencer/single-influencer.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {SingleProductComponent} from './product/single-product/single-product.component';
import {ProductFormComponent} from './product/product-form/product-form.component';
import {SearchComponent} from './search/search.component';
import {ProfileComponent} from './profile/profile.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {AuthService} from './services/auth/auth.service';
import {DealsService} from './services/deals/deals.service';
import {InfluencersService} from './services/Influencers/influencers.service';
import {MessagesService} from './services/messages/messages.service';
import {ProductsService} from './services/products/products.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PreviewInfluencerComponent} from './influencer/influencer-list/preview-influencer/preview-influencer.component';
import {InfluencerComponent} from './influencer/influencer.component';
import {PreviewDealComponent} from './deal/my-deal-list/preview-deal/preview-deal.component';
import {DealComponent} from './deal/deal.component';
import {MessageComponent} from './message/message.component';
import {PreviewMessageComponent} from './message/my-message-list/preview-message/preview-message.component';
import {ProductComponent} from './product/product.component';
import {PreviewProductComponent} from './product/product-list/preview-product/preview-product.component';
import {KeycloakSerurityService} from './services/keycloak-security/keycloak-serurity.service';
import {RequestInterceptorService} from './services/keycloak-security/request-interceptor.service';

export function kcFactory(kcSecurity: KeycloakSerurityService) {
  return () => kcSecurity.init();
}

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
    HeaderComponent,
    PreviewInfluencerComponent,
    InfluencerComponent,
    PreviewDealComponent,
    DealComponent,
    MessageComponent,
    PreviewMessageComponent,
    ProductComponent,
    PreviewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakSerurityService], useFactory: kcFactory, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true},
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
