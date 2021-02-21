import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NftTokenService} from '../../services/nft-token.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  ourId: string = null;

  constructor(private nftTokenService: NftTokenService) {
  }

  ngOnInit(): void {
    this.ourId = this.nftTokenService.id;
  }
}
