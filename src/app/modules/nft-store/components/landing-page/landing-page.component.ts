import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NftTokenService} from '../../services/nft-token.service';
import {BigNumber} from 'ethers';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  ourId: number = 0;

  constructor(private nftTokenService: NftTokenService) {
  }

  ngOnInit(): void {
    this.nftTokenService.getFractalTokenId().subscribe((value1: BigNumber) => {
      console.log('Get 1 ', value1);
      this.ourId = value1.toNumber() + 1;
      this.nftTokenService.setFractalTokenId(this.ourId).subscribe((value2) => {
        console.log('Set ', value2);
        this.nftTokenService.getFractalTokenId().subscribe((value) => {
          console.log('Get 2 ', value);
        });
      });
    });
  }
}
