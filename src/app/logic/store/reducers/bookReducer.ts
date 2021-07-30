import {InitialState} from "@ngrx/store/src/models";
import {BookAction, BookActionsType} from "../actions/types/bookActionsType";
import {initialState} from "../../../models/initialState";

export const bookNode = 'book';

export const bookReducer = (state = initialState, action: BookAction ) => {
    switch (action.type) {
        case BookActionsType.getAllBooks:{
            return {
                ...state,
               books: action.payload
            };
        }
        case BookActionsType.getAllAuthors:{
            return {
                ...state,
                authors: action.payload
            }
        }
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
