import {Book} from "./Book";
import {Author} from "./Author";

export interface DefaultState {
    books: Book[],
    authors: Author[],
    book: Book | null | undefined,
    author: Author | null | undefined,
}

export const initialState: DefaultState = {
    books: [],
    authors: [],
    book: null,
    author: null
};
