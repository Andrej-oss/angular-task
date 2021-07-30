import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {BookActionService} from "../../logic/store/actions/actions-book/book-action.service";

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.css']
})
export class StartComponentComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private bookActionService: BookActionService) {
    this.items = [];
    this.activeItem = {};
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home'},
      {label: 'Table', icon: 'pi pi-fw pi-calendar', routerLink: '/table'},
      {label: 'Form', icon: 'pi pi-fw pi-pencil', routerLink: '/form'},
    ];
    this.activeItem = this.items[0];
    this.bookActionService.getAllBookStore();
    this.bookActionService.getAllAuthorsStore();
  }
}
