import {ethers} from 'ethers';
import {Inject, Injectable, InjectionToken} from '@angular/core';

export const MetamaskWeb3Provider = new InjectionToken('MetamaskWeb3Provider', {
  providedIn: 'root',
  factory: () => (window as any).web3.currentProvider
});

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends ethers.providers.Web3Provider {
  private readonly _web3Provider: any;

  constructor(@Inject(MetamaskWeb3Provider) web3Provider) {
    super(web3Provider);
    this._web3Provider = web3Provider;
  }

  get web3Provider(): any {
    return this._web3Provider;
  }
}
