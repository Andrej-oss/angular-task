import { Component, OnInit } from '@angular/core';
import {AuthorDaoService} from "../../logic/services/authorDao/author-dao.service";
import {Author} from "../../models/Author";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {
  authors: Author[] = [];
  author: Author | undefined;

  constructor(private authorDaoService: AuthorDaoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.authors.length){
      this.authorDaoService.getAllAuthors().subscribe(value => {
        this.author = value.find(author => this.getSerNameAuthor(this.activatedRoute.snapshot.params.name) === author.surname);
      });
    }
  }

  onBack() {
    window.history.back();
  }
  getSerNameAuthor(name: string): string{
   let slice = name.split('.');
   return slice[1].toString();
  }
}
