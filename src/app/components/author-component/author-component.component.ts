import { Component, OnInit } from '@angular/core';
import {AuthorDaoService} from "../../logic/services/authorDao/author-dao.service";
import {Author} from "../../models/Author";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {allBooksSelector, oneAuthorSelector} from "../../logic/store/selectors/bookSelector";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";
import {Book} from "../../models/Book";

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {
  books: Book[] = [];
  author: Author | undefined | null;

  constructor(private authorDaoService: AuthorDaoService,
              private store$: Store,
              private bookActionService: BookActionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.store$.pipe(select(allBooksSelector)).subscribe(books => this.books = books );
    debugger;
    if (this.books.length){
      debugger;
      let find = this.books.find(book => book.author === this.activatedRoute.snapshot.params.name && (book.author !== 'S.King'));
      if (!!find){
        debugger
        this.author = {
          id: 1,
          name: find.author,
          surname: find.author,
          biography: find.description,
          path: '../../../assets/img/author.jpg'
        }
      }
      else if (!find){
        this.bookActionService.getAuthorByName(this.getSurNameAuthor(this.activatedRoute.snapshot.params.name));
        this.store$.pipe(select(oneAuthorSelector)).subscribe(author => this.author = author);
      }
    }
  }

  onBack() {
    window.history.back();
  }
  getSurNameAuthor(name: string): string{
   let slice = name.split('.');
   return slice[1].toString();
  }
}
