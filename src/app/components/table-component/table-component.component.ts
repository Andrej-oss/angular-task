import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/Book";
import {BookDaoService} from "../../logic/services/bookDao/book-dao.service";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {allBooksSelector} from "../../logic/store/selectors/bookSelector";
import {Observable} from "rxjs";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";
import {BooksLoadEffect} from "../../logic/store/actions/types/bookActionsType";

@Component({
    selector: 'app-table-component',
    templateUrl: './table-component.component.html',
    styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
    cols: any;
    books: Book[] = [];

    constructor(private bookDaoService: BookDaoService,
                private bookService: BookActionService,
                private $store: Store,
                private router: Router) {
    }

    ngOnInit(): void {
        this.$store.pipe((select(allBooksSelector))).subscribe(data => this.books = data);
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'author', header: 'Author'},
            {field: 'title', header: 'Title'},
            {field: 'action', header: 'Action'}
        ];
    }

    onBookDetails(id: number) {
        this.router.navigateByUrl(`/table/${id}`)
    }

    onDeleteBook(id: number) {
        console.log(id);
        this.bookService.deleteBookStore(id);
    }

    onAuthorPage(name: string) {
        this.router.navigateByUrl(`/table/author/${name}`);
    }
}
