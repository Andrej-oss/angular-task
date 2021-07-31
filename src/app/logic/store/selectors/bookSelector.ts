import {createFeatureSelector, createSelector} from "@ngrx/store";
import {DefaultState} from "../../../models/initialState";
import {bookNode} from "../reducers/bookReducer";

export const bookSelector = createFeatureSelector<DefaultState>(bookNode);

export const allBooksSelector = createSelector(bookSelector, value => value.books);
export const allAuthorSelector = createSelector(bookSelector, value => value.authors);
export const oneBookSelector = createSelector(bookSelector, value => value.book);
export const oneAuthorSelector = createSelector(bookSelector, value => value.author);
