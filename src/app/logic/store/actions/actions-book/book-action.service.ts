import { Injectable } from '@angular/core';
import {BookDaoService} from "../../../services/bookDao/book-dao.service";
import {Store} from "@ngrx/store";
import {AuthorsLoad, BookSaveStore, BooksLoad} from "../types/bookActionsType";
import {AuthorDaoService} from "../../../services/authorDao/author-dao.service";
import {Book} from "../../../../models/Book";

@Injectable({
  providedIn: 'root'
})
export class BookActionService {

  constructor(private bookService: BookDaoService,
              private authorService: AuthorDaoService,
              private store: Store) { }

  getAllBookStore(): |{}{
    return this.bookService.getAllBooks()
        .subscribe(value => this.store.dispatch(new BooksLoad(value)));
  }
  getAllAuthorsStore(): |{}{
    return this.authorService.getAllAuthors()
        .subscribe(value => this.store.dispatch(new AuthorsLoad(value)));
  }
  saveBookStore(book: Book){
    return this.store.dispatch(new BookSaveStore(book));
  }
}
