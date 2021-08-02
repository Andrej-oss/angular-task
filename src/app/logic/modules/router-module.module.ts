import { Routes} from "@angular/router";
import {TableComponentComponent} from "../../components/table-component/table-component.component";
import {DetailComponentComponent} from "../../components/detail-component/detail-component.component";
import {AuthorComponentComponent} from "../../components/author-component/author-component.component";
import {FormComponentComponent} from "../../components/form-component/form-component.component";
import {RouteSnapshotService} from "../services/routSnaphot/route-snapshot.service";
import {HomeComponent} from "../../components/home/home.component";

export const routes: Routes = [
   {path: 'home',component: HomeComponent, canActivate: [RouteSnapshotService]},
  {path: 'table', component: TableComponentComponent, canActivate: [RouteSnapshotService]},
  {path: 'table/:id', component: DetailComponentComponent, canActivate: [RouteSnapshotService]},
  {path: 'table/author/:name', component: AuthorComponentComponent, canActivate: [RouteSnapshotService]},
  {path: 'form', component: FormComponentComponent, canActivate: [RouteSnapshotService]}
];
