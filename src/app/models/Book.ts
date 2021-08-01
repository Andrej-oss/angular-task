export interface Book {
    id: number,
    author: string,
    title: string,
    description: string,
    path: string,
}
export class BookImpl implements Book{
    author = '';
    description = '';
    id = 0;
    path = '';
    title = '';

}
