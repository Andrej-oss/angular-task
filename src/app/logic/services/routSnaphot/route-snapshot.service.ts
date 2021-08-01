import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteSnapshotService implements CanActivate{
  urlStore: string[] = [];
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = state.url.split('/');
    if (url.includes('author') || url.length > 2){
      url.pop();
      let s = url.join('/');
      state.url = s + '/';
    }
    if (this.urlStore.length < 15) {
      this.urlStore.push(state.url);
    }
    else if (this.urlStore.length >= 15){
      this.urlStore.shift();
      this.urlStore.push(state.url);
    }
    return true;
  }

  constructor() { }
}
