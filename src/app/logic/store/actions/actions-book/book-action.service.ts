import { Injectable } from '@angular/core';
import {BookDaoService} from "../../../services/bookDao/book-dao.service";
import {Store} from "@ngrx/store";
import {
  AuthorsSuccessLoad,
  BookSaveStore,
  BooksLoad,
  DeleteBookInStore,
  SuccessAuthorOneLoad
} from "../types/bookActionsType";
import {AuthorDaoService} from "../../../services/authorDao/author-dao.service";
import {Book} from "../../../../models/Book";

@Injectable({
  providedIn: 'root'
})
export class BookActionService {

  constructor(private bookService: BookDaoService,
              private authorService: AuthorDaoService,
              private store: Store) { }

  getAuthorByName(name: string): |{}{
    debugger
    return this.authorService.getAuthorByName(name)
        .subscribe(value => this.store.dispatch(new SuccessAuthorOneLoad(value)));
  }
  saveBookStore(book: Book){
    return this.store.dispatch(new BookSaveStore(book));
  }
  deleteBookStore(id: number){
    return this.store.dispatch(new DeleteBookInStore(id));
  }
}
