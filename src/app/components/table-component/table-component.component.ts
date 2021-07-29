import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book";
import {BookDaoService} from "../../logic/services/book-dao.service";

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  cols: any;
  books: Book[] = [];

  constructor(private bookDaoService: BookDaoService) { }

  ngOnInit(): void {
    if (!this.books.length){
      this.bookDaoService.getAllBooks().subscribe(books => this.books = books);
    }
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'author', header: 'Author' },
      { field: 'title', header: 'Title' },
      { field: 'action', header: 'Action' }
    ];
  }

  onBookDetails(id: number) {
    console.log(id);
  }

  onDeleteBook(id: number) {
    console.log(id);
    let index = this.books.findIndex(value => value.id === id);
    this.books.splice(index, 1);
  }

  onAuthorPage(id: number) {

  }
}
