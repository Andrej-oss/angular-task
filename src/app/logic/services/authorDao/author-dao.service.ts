import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrl} from "../../../config/urlConfig";
import {Observable} from "rxjs";
import {Author} from "../../../models/Author";

@Injectable({
  providedIn: 'root'
})
export class AuthorDaoService {
  private authorURL = ApiUrl.authorURL;

  constructor(private httpClient: HttpClient) { }

  getAllAuthors(): Observable<Author[]>{
    return this.httpClient.get<Author[]>(this.authorURL);
  }
  getAuthorByName(name: string): Observable<Author[]>{
    debugger;
    return this.httpClient.get<Author[]>(this.authorURL + `?surname=${name}`);
  }
}
