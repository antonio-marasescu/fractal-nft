import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppRoutingPaths} from './app-routing-paths';

const routes: Routes = [
  {path: '', redirectTo: AppRoutingPaths.STORE, pathMatch: 'full'},
  {
    path: AppRoutingPaths.STORE,
    loadChildren: () => import('./modules/nft-store/nft-store.module').then(m => m.NftStoreModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: AppRoutingPaths.STORE
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
})
export class AppRoutingModule {
}
