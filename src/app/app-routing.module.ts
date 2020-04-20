import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfluencerListComponent} from './influencer/influencer-list/influencer-list.component';
import {MyDealListComponent} from './deal/my-deal-list/my-deal-list.component';
import {SingleDealComponent} from './deal/single-deal/single-deal.component';
import {DealFormComponent} from './deal/deal-form/deal-form.component';
import {MyMessageListComponent} from './message/my-message-list/my-message-list.component';
import {SingleMessageComponent} from './message/single-message/single-message.component';
import {MessageFormComponent} from './message/message-form/message-form.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {SingleProductComponent} from './product/single-product/single-product.component';
import {ProductFormComponent} from './product/product-form/product-form.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {InfluencerComponent} from './influencer/influencer.component';

const routes: Routes = [
  // {path: 'influencers', component: InfluencerListComponent},
  {path: 'influencer', component: InfluencerComponent},
  {path: 'deals', component: MyDealListComponent},
  {path: 'deal', component: SingleDealComponent},
  {path: 'newDeal', component: DealFormComponent},
  {path: 'messages', component: MyMessageListComponent},
  {path: 'message', component: SingleMessageComponent},
  {path: 'newMessage', component: MessageFormComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product', component: SingleProductComponent},
  {path: 'newProduct', component: ProductFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
