import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  cols: any;

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'author', header: 'Author' },
      { field: 'title', header: 'Title' },
      { field: 'action', header: 'Action' }
    ];
  }

}
