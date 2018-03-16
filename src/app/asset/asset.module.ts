import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetService } from './service/asset.service';

@NgModule({
  imports: [
    CommonModule,
    AssetRoutingModule,
    HttpClientModule
  ],
  declarations: [AssetManagementComponent, AssetDetailComponent],
  exports: [AssetManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AssetService]
})
export class AssetModule { }
