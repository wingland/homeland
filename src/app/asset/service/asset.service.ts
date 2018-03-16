import { HttpClient } from '@angular/common/http';
import { Asset } from './../meta/asset';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AssetService {

  constructor(private httpClient: HttpClient) { }

  // TODO: add parameters
  getAssets(): Promise<Asset> {
    return this.httpClient.get<Asset>('/dummy').toPromise();
  }
}
