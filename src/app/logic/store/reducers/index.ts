import {bookNode, bookReducer} from "./bookReducer";
import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../../../environments/environment";
import {BookAction, BookActionsType, BooksLoad} from "../actions/types/bookActionsType";
import {DefaultState} from "../../../models/initialState";
import {Book} from "../../../models/Book";

export interface State {
    [bookNode] : DefaultState
}
export const reducers: ActionReducerMap<State, any> = {
    [bookNode] : bookReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
