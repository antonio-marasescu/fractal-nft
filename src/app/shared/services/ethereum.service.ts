import {Injectable} from '@angular/core';
import {ProviderService} from './provider.service';
import {forkJoin, from, Observable, ReplaySubject} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {
  private _initialized = false;
  private _accounts: string[];
  private _mainAccount: string;
  private _signer: any;
  private _networkId: string;
  public serviceInitialized = new ReplaySubject<boolean>();

  constructor(private providerService: ProviderService) {
  }

  public setup(): Observable<any> {
    this._initialized = false;
    this._signer = this.providerService.getSigner();
    return from(this.providerService.web3Provider.enable()).pipe(
      mergeMap(() => forkJoin(
        [
          from(this.providerService.send('net_version', [])),
          from(this.providerService.listAccounts())]
        )
          .pipe(
            map(([networkId, accounts]) => {
              this._networkId = networkId;
              this._accounts = accounts;
              if (accounts && accounts.length > 0) {
                this._mainAccount = accounts[0];
              }
              this._initialized = true;
              this.serviceInitialized.next(true);
            })
          )
      )
    );
  }

  public get isInitialized(): boolean {
    return this._initialized;
  }

  public get mainAccount(): string {
    return this._mainAccount;
  }

  public get accounts(): string[] {
    return this._accounts;
  }

  public get signer(): any {
    return this._signer;
  }

  public get networkId(): string {
    return this._networkId;
  }
}
