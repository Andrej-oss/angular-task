import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book, BookImpl} from "../../models/Book";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";
import {BookDaoService} from "../../logic/services/bookDao/book-dao.service";

@Component({
    selector: 'app-form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
    bookForm: FormGroup;
    id: FormControl;
    author: FormControl;
    title: FormControl;
    book: BookImpl = new BookImpl();

    constructor(private bookActionService: BookActionService,
                private bookDaoService: BookDaoService) {
        this.bookForm = new FormGroup({
            id: this.id = new FormControl('', [Validators.required]),
            author: this.author = new FormControl('', [Validators.minLength(7)]),
            title: this.title = new FormControl('', Validators.required)
        })
    }

    ngOnInit(): void {
    }

    onBack() {
        window.history.back();
    }

    onSubmit(form: FormGroup) {
          this.book = {
            id: +form.controls.id.value,
            author: form.controls.author.value,
            title: form.controls.title.value,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              path: '../../../assets/img/default.jpg'
          };
          try {
              this.bookDaoService.saveBook(this.book).subscribe(book => {
                  this.bookActionService.saveBookStore(book);
              })
          }
          catch (e) {
              console.log(e);
          }
          finally {
              this.bookForm.reset();
          }
    }
}
