import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NftStoreRoutingPaths} from './nft-store-routing-paths';
import {LandingPageComponent} from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: NftStoreRoutingPaths.LANDING_PAGE, pathMatch: 'full'},
  {path: NftStoreRoutingPaths.LANDING_PAGE, component: LandingPageComponent},
  {
    path: '**',
    redirectTo: NftStoreRoutingPaths.LANDING_PAGE
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class NftStoreRoutingModule {
}
