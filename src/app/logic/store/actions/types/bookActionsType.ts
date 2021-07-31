import {Actions} from "@ngrx/store-devtools/src/reducer";
import {Book} from "../../../../models/Book";
import {Author} from "../../../../models/Author";
import {createAction, props} from "@ngrx/store";

export enum BookActionsType {
    getAllBooks = '[BOOK] get all',
    getAllBooksThisEffects = '[BOOK] get all this effects',
    getAllAuthorsThisEffects = '[AUTHOR] get all this effects',
    getOneThisEffects = '[BOOK] get one by id this effects',
    getOneByAuthorThisEffects = '[BOOK] get one by author this effects',
    getAuthorByNameThisEffect = '[AUTHOR] get one by name this effects',
    getAllAuthors = '[AUTHOR] get all',
    saveBookStore = '[book] save in store',
    getOneBook = '[BOOK] get one',
    getBookByAuthor = '[BOOK] get book by author',
    getOneAuthor = '[AUTHOR] get one author',
    successLoadedAuthor = '[AUTHOR] success loaded',
    successLoadedBooks = '[BOOK] success loaded',
    successLoadedAuthors = '[AUTHORS] success loaded',
    errorLoadedBooks = '[BOOK] error loaded',
    errorLoadedAuthor = '[AUTHOR] error loaded'
}
export const getBooks = createAction('[BOOK] get all', props<{payload: Book[]}>());
export const getAuthors = createAction('[AUTHOR] get all', props<{payload: Author[]}>());
export const getOneBook = createAction('[BOOK] get one', props<{payload: Book}>());
export const getBookByAuthor = createAction('[BOOK] get book by author', props<{payload: Book}>());
export const getOneAuthor = createAction('[AUTHOR] get author by name', props<{payload: Author}>());
// @ts-ignore
export class BooksLoad implements Actions{
    readonly type = BookActionsType.getAllBooks;

    constructor(public payload: Book[]) {
    }
}
// @ts-ignore
export class AuthorsSuccessLoad implements Actions{
    readonly type = BookActionsType.successLoadedAuthors;

    constructor(public payload: Author[]) {
    }
}
// @ts-ignore
export class BookSaveStore implements Actions{
    readonly type = BookActionsType.saveBookStore;

    constructor(public payload: Book) {
    }
}
// @ts-ignore
export class SuccessBookOneLoad implements Actions{
    readonly type = BookActionsType.getOneBook;

    constructor(public payload: Book) {
    }
}
// @ts-ignore
export class SuccessBookByAuthorLoad implements Actions{
    readonly type = BookActionsType.getBookByAuthor;

    constructor(public payload: Book) {
    }
}
// @ts-ignore
export class SuccessAuthorOneLoad implements Actions{
    readonly type = BookActionsType.successLoadedAuthor;
    constructor(public payload: Author[]) {
        debugger;
    }
}
// @ts-ignore
export class SuccessBooksLoad implements Actions{
    readonly type = BookActionsType.successLoadedBooks;

    constructor(public payload: Book[]) {
    }
}
// @ts-ignore
export class ErrorBooksLoad implements Actions{
    readonly type = BookActionsType.errorLoadedBooks;
}
// @ts-ignore
export class ErrorAuthorLoad implements Actions{
    readonly type = BookActionsType.errorLoadedAuthor;
}
// @ts-ignore
export class BooksLoadEffect implements Actions{
    readonly type = BookActionsType.getAllBooksThisEffects;
}
// @ts-ignore
export class AuthorsLoadEffect implements Actions{
    readonly type = BookActionsType.getAllAuthorsThisEffects;
}
// @ts-ignore
export class AuthorLoadEffect implements Actions{
    readonly type = BookActionsType.getAuthorByNameThisEffect;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
// @ts-ignore
export class BookIdLoadEffect implements Actions{
    readonly type = BookActionsType.getOneThisEffects;
    id: number;
    constructor(id: number) {
        this.id = id;
    }
}
// @ts-ignore
export class BookAuthorLoadEffect implements Actions{
    readonly type = BookActionsType.getOneByAuthorThisEffects;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
export type BookAction =
    BooksLoad
    | AuthorsSuccessLoad
    | BookSaveStore
    | SuccessBookOneLoad
    | SuccessBookByAuthorLoad
    | SuccessAuthorOneLoad
    | SuccessBooksLoad
    | ErrorBooksLoad
    | ErrorAuthorLoad
    | BooksLoadEffect
    | AuthorsLoadEffect
    | BookIdLoadEffect;
