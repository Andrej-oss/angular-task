import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthorsLoadEffect, BooksLoadEffect} from "../../logic/store/actions/types/bookActionsType";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-task';
  constructor(private store$: Store) {
    this.store$.dispatch(new BooksLoadEffect());
    this.store$.dispatch(new AuthorsLoadEffect());
  }
}
