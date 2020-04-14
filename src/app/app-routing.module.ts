import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfluencerListComponent} from './influencer-list/influencer-list.component';
import {SingleInfluencerComponent} from './influencer-list/single-influencer/single-influencer.component';
import {MyDealListComponent} from './my-deal-list/my-deal-list.component';
import {SingleDealComponent} from './my-deal-list/single-deal/single-deal.component';
import {DealFormComponent} from './my-deal-list/deal-form/deal-form.component';
import {MyMessageListComponent} from './my-message-list/my-message-list.component';
import {SingleMessageComponent} from './my-message-list/single-message/single-message.component';
import {MessageFormComponent} from './my-message-list/message-form/message-form.component';
import {ProductListComponent} from './product-list/product-list.component';
import {SingleProductComponent} from './product-list/single-product/single-product.component';
import {ProductFormComponent} from './product-list/product-form/product-form.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'influencers', component: InfluencerListComponent},
  {path: 'influencer', component: SingleInfluencerComponent},
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
