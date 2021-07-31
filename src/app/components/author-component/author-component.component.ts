import { Component, OnInit } from '@angular/core';
import {AuthorDaoService} from "../../logic/services/authorDao/author-dao.service";
import {Author} from "../../models/Author";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {oneAuthorSelector} from "../../logic/store/selectors/bookSelector";
import {AuthorLoadEffect} from "../../logic/store/actions/types/bookActionsType";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {
  authors: Author[] = [];
  author: Author | undefined | null;

  constructor(private authorDaoService: AuthorDaoService,
              private store$: Store,
              private bookActionService: BookActionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.store$.dispatch(new AuthorLoadEffect(this.getSerNameAuthor(this.activatedRoute.snapshot.params.name)));
    this.bookActionService.getAuthorByName(this.getSerNameAuthor(this.activatedRoute.snapshot.params.name));
    this.store$.pipe(select(oneAuthorSelector)).subscribe(author => this.author = author);
  }

  onBack() {
    window.history.back();
  }
  getSerNameAuthor(name: string): string{
   let slice = name.split('.');
   return slice[1].toString();
  }
}
