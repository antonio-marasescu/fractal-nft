import {NgModule} from '@angular/core';
import {NftStoreRoutingModule} from './nft-store-routing.module';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {NftTokenService} from './services/nft-token.service';
import {FractalEngineModule} from '../fractal-engine/fractal-engine.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    FractalEngineModule,
    NftStoreRoutingModule,
    SharedModule
  ],
  providers: [NftTokenService]
})
export class NftStoreModule {
}
