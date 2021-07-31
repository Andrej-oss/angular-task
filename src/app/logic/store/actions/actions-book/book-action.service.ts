import { Injectable } from '@angular/core';
import {BookDaoService} from "../../../services/bookDao/book-dao.service";
import {Store} from "@ngrx/store";
import {AuthorsSuccessLoad, BookSaveStore, BooksLoad, SuccessAuthorOneLoad} from "../types/bookActionsType";
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
        .subscribe(value => this.store.dispatch(new AuthorsSuccessLoad(value)));
  }
  getAuthorByName(name: string): |{}{
    debugger
    return this.authorService.getAuthorByName(name)
        .subscribe(value => this.store.dispatch(new SuccessAuthorOneLoad(value)));
  }
  saveBookStore(book: Book){
    return this.store.dispatch(new BookSaveStore(book));
  }
}
