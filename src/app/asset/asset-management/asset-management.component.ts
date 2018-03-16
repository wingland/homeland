import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Asset } from '../meta/asset';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-asset-management',
  template: `
    <ons-list-title>
      Assets Management
    </ons-list-title>
    <ons-list>
      <ons-list-item *ngFor="let asset of assets" tappable (click)="onAssetTapped($event, asset)">
        {{asset.name}}
      </ons-list-item>
    </ons-list>
    `,
  styles: []
})
export class AssetManagementComponent implements OnInit {

  // TODO: get this through service
  assets: Asset[] = [{
    id: 1,
    name: 'Asset 1'
  }, {
    id: 2,
    name: 'Asset 2'
  }, {
    id: 3,
    name: 'Asset 3'
  }];
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onAssetTapped(evt, asset) {
    this.router.navigate(['detail', asset.id], {relativeTo: this.route});
  }

}
