import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from './../meta/asset';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-detail',
  template: `
    <h3 class='center'>
      {{asset.name}}
    </h3>
    <ons-button modifier="large" (click)="onBackClicked()">Back to all</ons-button>
  `,
  styles: []
})
export class AssetDetailComponent implements OnInit {

  asset: Asset;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const assetId = +this.route.snapshot.paramMap.get('id');
    // TODO: replace with service
    this.asset = {
      id: assetId,
      name: `Asset ${assetId}`
    };
  }

  onBackClicked() {
    this.router.navigate(['asset']);
  }

}
