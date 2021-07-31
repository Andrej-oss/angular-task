import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {
    AuthorLoadEffect,
    AuthorsLoadEffect, AuthorsSuccessLoad,
    BookActionsType, BookAuthorLoadEffect, BookIdLoadEffect, ErrorAuthorLoad,
    ErrorBooksLoad,
    getAuthors,
    getBooks, SuccessAuthorOneLoad, SuccessBookByAuthorLoad, SuccessBookOneLoad,
    SuccessBooksLoad
} from "../actions/types/bookActionsType";
import {catchError, map, mergeMap} from "rxjs/operators";
import {BookDaoService} from "../../services/bookDao/book-dao.service";
import {of} from "rxjs";
import {AuthorDaoService} from "../../services/authorDao/author-dao.service";
import {BookActionService} from "../actions/actions-book/book-action.service";

@Injectable()
export class AppEffect {
    constructor(private actions$: Actions,
                private authorDaoService: AuthorDaoService,
                private bookActionService: BookActionService,
                private bookDaoService: BookDaoService) {
    }
    books$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionsType.getAllBooksThisEffects),
        mergeMap(() =>  this.bookDaoService.getAllBooks().pipe(
            map(books => new SuccessBooksLoad(books))
        )),
        catchError(() => of(new ErrorBooksLoad()))
    ), {dispatch: true});
    book$ = createEffect(() => this.actions$.pipe(
        ofType<BookIdLoadEffect>(BookActionsType.getOneThisEffects),
        mergeMap((action) => this.bookDaoService.getOneBook(action.id).pipe(
            map(book => new SuccessBookOneLoad(book))
        )),
        catchError(() => of(new ErrorBooksLoad()))
    ), {dispatch: true});
    booksAuthor$ = createEffect(() => this.actions$.pipe(
        ofType<BookAuthorLoadEffect>(BookActionsType.getOneByAuthorThisEffects),
        mergeMap((action) => this.bookDaoService.getBooksByAuthor(action.name).pipe(
            map(book => new SuccessBooksLoad(book))
        )),
        catchError(() => of(new ErrorBooksLoad()))
    ), {dispatch: true});
    authors$ = createEffect(() => this.actions$.pipe(
        ofType(BookActionsType.getAllAuthorsThisEffects),
        mergeMap(() => this.authorDaoService.getAllAuthors().pipe(
            map(authors => new AuthorsSuccessLoad(authors))
        )),
        catchError(() => of(new ErrorAuthorLoad()))
    ), {dispatch: true});
}
