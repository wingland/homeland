import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';

const routes: Routes = [{
  path: '', component: AssetManagementComponent
}, {
  path: 'detail/:id', component: AssetDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
