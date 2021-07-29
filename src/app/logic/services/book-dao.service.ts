import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../models/Book";
import {ApiUrl} from "../../config/urlConfig";

@Injectable({
  providedIn: 'root'
})
export class BookDaoService {
  private bookUrl = ApiUrl.bookURL;

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.bookUrl);
  }
  getOneBook(id: number): Observable<Book>{
    return this.httpClient.get<Book>(this.bookUrl);
  }
  getBooksByAuthor(name: string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.bookUrl);
  }
}
