import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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


  constructor() {
    this.bookForm = new FormGroup({
      id : this.id =  new FormControl('', Validators.required),
      author: this.author = new FormControl('', [Validators.minLength(7)]),
      title: this.title = new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onBack() {
    window.history.back();
  }

  onSubmit(form: FormGroup){
    console.log(form);
  }
}
