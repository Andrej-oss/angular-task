import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {BookDaoService} from "../../logic/services/book-dao.service";

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
   books: Book[] = [];
   book: Book | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private bookDaoService: BookDaoService) {
  }

  ngOnInit(): void {
      this.bookDaoService.getAllBooks().subscribe(books => {
        this.book = books.find(value => value.id === +this.activatedRoute.snapshot.params.id)
      });
  }

  onBack() {
    window.history.back();
  }
}
