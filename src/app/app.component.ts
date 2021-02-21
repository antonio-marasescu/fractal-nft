import {Component, OnInit} from '@angular/core';
import {EthereumService} from './shared/services/ethereum.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialized$: Observable<boolean>;

  constructor(private ethereumService: EthereumService) {
  }

  ngOnInit(): void {
    this.initialized$ = this.ethereumService.serviceInitialized.asObservable();
    this.ethereumService.setup().subscribe();
  }
}
