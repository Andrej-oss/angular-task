export interface History {
    '/home': string,
    '/table': string,
    '/form': string,
    '/table/author/': string,
    '/table/': string
}
export class HistoryImpl implements History{
    '/form' = 'CREATE';
    '/home' = 'HOME';
    '/table' = 'BOOKS';
    '/table/' = 'BOOK';
    '/table/author/' = 'AUTHOR';
}
