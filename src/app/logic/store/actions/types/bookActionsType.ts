import {Actions} from "@ngrx/store-devtools/src/reducer";
import {Book} from "../../../../models/Book";
import {Author} from "../../../../models/Author";

export enum BookActionsType {
    getAllBooks = '[BOOK] get all',
    getAllAuthors = '[AUTHOR] get all',
    saveBookStore = '[book] save in store',
}

// @ts-ignore
export class BooksLoad implements Actions{
    readonly type = BookActionsType.getAllBooks;

    constructor(public payload: Book[]) {
    }
}
// @ts-ignore
export class AuthorsLoad implements Actions{
    readonly type = BookActionsType.getAllAuthors;

    constructor(public payload: Author[]) {
    }
}
// @ts-ignore
export class BookSaveStore implements Actions{
    readonly type = BookActionsType.saveBookStore;

    constructor(public payload: Book) {
    }
}
export type BookAction =
    BooksLoad
    | AuthorsLoad
    | BookSaveStore;
