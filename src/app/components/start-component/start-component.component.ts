import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.css']
})
export class StartComponentComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;

  constructor() {
    this.items = [];
    this.activeItem = {};
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Table', icon: 'pi pi-fw pi-calendar'},
      {label: 'Form', icon: 'pi pi-fw pi-pencil'},
    ];
    this.activeItem = this.items[0];
  }

}
