import {Injectable} from '@angular/core';
import {EthereumService} from '../../../shared/services/ethereum.service';
import * as FractalTokenContract from '../../../ethereum/abis/FractalToken.json';
import {BigNumber, Contract} from 'ethers';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class NftTokenService {
  private _id: string = '123';
  private _contract: Contract = null;

  constructor(private ethereumService: EthereumService) {
    this.setup();
  }

  private setup(): void {
    const contractAddress = FractalTokenContract.networks[this.ethereumService.networkId].address;
    this._contract = new Contract(contractAddress, FractalTokenContract.abi, this.ethereumService.signer);
  }

  get id(): string {
    return this._id;
  }

  getFractalTokenId(): Observable<BigNumber> {
    return from<Observable<BigNumber>>(this._contract.getFractalId());
  }

  setFractalTokenId(tokenId: number): Observable<void> {
    return from<Observable<void>>(this._contract.setFractalId(tokenId));
  }
}
