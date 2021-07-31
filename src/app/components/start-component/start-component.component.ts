import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";
import {select, Store} from "@ngrx/store";
import {Book} from "../../models/Book";
import {allAuthorSelector, allBooksSelector, bookSelector} from "../../logic/store/selectors/bookSelector";
import {Author} from "../../models/Author";
import {BooksLoadEffect} from "../../logic/store/actions/types/bookActionsType";

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.css']
})
export class StartComponentComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  books: Book[] = [];
  author: Author[] = [];

  constructor(private bookActionService: BookActionService,
              private $store: Store) {
    this.items = [];
    this.activeItem = {};
  }

  ngOnInit(): void {
    this.$store.pipe((select(allBooksSelector))).subscribe(data => this.books = data);
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home'},
      {label: 'Table', icon: 'pi pi-fw pi-calendar', routerLink: '/table'},
      {label: 'Form', icon: 'pi pi-fw pi-pencil', routerLink: '/form'},
    ];
    this.activeItem = this.items[0];
    if (!this.books.length) {
    //  this.$store.dispatch(new BooksLoadEffect());
    }
  }
}
