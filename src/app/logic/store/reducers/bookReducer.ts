import {BookAction, BookActionsType, getAuthors, getBooks} from "../actions/types/bookActionsType";
import {initialState} from "../../../models/initialState";
import {createReducer, on} from "@ngrx/store";
import {reducers} from "./index";

export const bookNode = 'book';

export const bookReducer = (state = initialState, action: BookAction ) => {
    debugger
    switch (action.type) {
        case BookActionsType.successLoadedBooks:{
            return {
                ...state,
                books: action.payload
            }
        }
        case BookActionsType.getOneBook: {
            return {
                ...state,
                book: action.payload
            }
        }
        case BookActionsType.successLoadedAuthors:{
            debugger;
            return {
                ...state,
                authors: action.payload
            }
        }
        case BookActionsType.getAllBooks:{
            return {
                ...state,
               books: action.payload
            };
        }
        case BookActionsType.successLoadedAuthor:{
            debugger
            return {
                ...state,
                author: action.payload[0]
            }
        }
        // case BookActionsType.getAllAuthors:{
        //     return {
        //         ...state,
        //         authors: action.payload
        //     }
        // }
        case BookActionsType.saveBookStore: {
            const {books} = state;
            return {
                ...state,
                books: [...books, action.payload]
            }
        }
        default: {
            return state;
        }
    }
};
export const BookReducer = createReducer(initialState,
    on(getBooks, (state, action) => ({
        ...state,
        books: action.payload
    })),
    on(getAuthors, (state, action) => ({
        ...state,
        authors: action.payload
    }))
)
