import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class NftTokenService {
  private _id: string = '123';

  get id(): string {
    return this._id;
  }
}
