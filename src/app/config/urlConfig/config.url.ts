import {environment} from "../../../environments/environment";

const APi = environment.ApiV1;
const bookURL = `${APi}` + 'book';
const authorURL = `${APi}` + 'author';

export const ApiUrl = {
    bookURL,
    authorURL
};
