import {BookAction, BookActionsType} from "../actions/types/bookActionsType";
import {initialState} from "../../../models/initialState";


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
        case BookActionsType.deleteBookInStore: {
            let number = state.books.findIndex(value => value.id === action.payload);
            debugger;
            let books = [...state.books];
            books.splice(number, 1);
            debugger;
            return  {
                ...state,
                books: books
            };
        }
        case BookActionsType.successLoadedAuthors:{
            debugger;
            return {
                ...state,
                authors: action.payload
            }
        }
        // case BookActionsType.getAllBooks:{
        //     return {
        //         ...state,
        //        books: action.payload
        //     };
        // }
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
// version 2 but not used
// export const BookReducer = createReducer(initialState,
//     on(getBooks, (state, action) => ({
//         ...state,
//         books: action.payload
//     })),
//     on(getAuthors, (state, action) => ({
//         ...state,
//         authors: action.payload
//     }))
// );
