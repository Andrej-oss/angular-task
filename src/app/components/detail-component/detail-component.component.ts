import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book";
import {ActivatedRoute} from "@angular/router";
import {BookDaoService} from "../../logic/services/bookDao/book-dao.service";
import {select, Store} from "@ngrx/store";
import {BookIdLoadEffect} from "../../logic/store/actions/types/bookActionsType";
import {Observable} from "rxjs";
import {bookSelector, oneBookSelector} from "../../logic/store/selectors/bookSelector";

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
   book: Book | undefined | null;

  constructor(private activatedRoute: ActivatedRoute,
              private $store: Store,
              private bookDaoService: BookDaoService) {
  }

  ngOnInit(): void {
    this.$store.pipe(select(oneBookSelector)).subscribe(data => this.book = data);
      this.$store.dispatch(new BookIdLoadEffect(+this.activatedRoute.snapshot.params.id))
  }

  onBack() {
    window.history.back();
  }
}
