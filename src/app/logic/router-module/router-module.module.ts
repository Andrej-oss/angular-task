
import {Routes} from "@angular/router";
import {StartComponentComponent} from "../../components/start-component/start-component.component";
import {TableComponentComponent} from "../../components/table-component/table-component.component";
import {DetailComponentComponent} from "../../components/detail-component/detail-component.component";

export const routes: Routes = [
  {path: '', component: StartComponentComponent},
  {path: 'home', component: StartComponentComponent},
  {path: 'table', component: TableComponentComponent},
  {path: 'table/:id', component: DetailComponentComponent},
];
