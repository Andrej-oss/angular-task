import {Book} from "./Book";
import {Author} from "./Author";

export interface DefaultState {
    books: Book[],
    authors: Author[],
}

export const initialState: DefaultState = {
    books: [],
    authors: [],
};
