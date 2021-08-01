import {Component, Input, OnInit} from '@angular/core';
import {RouteSnapshotService} from "../../logic/services/routSnaphot/route-snapshot.service";
import {ActivatedRouteSnapshot} from "@angular/router";
import {History, HistoryImpl} from "../../models/History";

@Component({
  selector: 'app-history-component',
  templateUrl: './history-component.component.html',
  styleUrls: ['./history-component.component.css']
})
export class HistoryComponentComponent implements OnInit {
  history: HistoryImpl = new HistoryImpl();

  constructor(public routeSnapshotService: RouteSnapshotService) {
  }

  ngOnInit(): void {
    console.log(window.history)
  }

  findHistory(url: string): string{
    // @ts-ignore
    return this.history[url];
  }
}
