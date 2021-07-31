import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../models/Book";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";

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
    book: Book | undefined;

    constructor(private bookActionService: BookActionService) {
        this.bookForm = new FormGroup({
            id: this.id = new FormControl('', Validators.required),
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
      console.log(form);
          // this.book = {
          //   id: form.controls.id.value,
          //   author: form.controls.forums.value,
          //   title: form.controls.title.value
          // };
          // this.bookActionService.saveBookStore(this.book);
          this.bookForm.reset();
    }
}
