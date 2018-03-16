import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AssetManagementComponent } from './asset/asset-management/asset-management.component';

const routes: Routes = [{
  path: '', redirectTo: 'asset', pathMatch: 'full',
}, {
  path: 'asset',
  loadChildren: 'app/asset/asset.module#AssetModule'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
